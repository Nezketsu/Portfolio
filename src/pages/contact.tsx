import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { useToast } from "@/components/toast";
import { useState } from "react";
import AnimateOnScroll from "@/components/animate-on-scroll";

export default function Contact() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showToast('error', 'Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Using Web3Forms to send email directly to greg.caseaux@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          to_email: 'greg.caseaux@gmail.com',
          from_name: formData.name,
          reply_to: formData.email,
          // Champs cachés pour Web3Forms
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'box',
          _captcha: false
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('success', 'Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('error', 'Failed to send message. Please try contacting me directly at greg.caseaux@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4 py-20">
        <div className="max-w-4xl text-center">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <div>
              <h1 className={title({ size: "lg", class: "!text-4xl sm:!text-5xl lg:!text-6xl font-bold mb-6" })}>
                Let's <span className="text-primary">Connect</span>
              </h1>
              <p className={subtitle({ class: "!text-xl sm:!text-2xl text-default-600 max-w-3xl mx-auto leading-relaxed" })}>
                I'm always open to discussing new projects, opportunities, or just having a friendly chat about technology and development.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <AnimateOnScroll animation="fade-up" delay={0}>
              <Link
                href="mailto:greg.caseaux@gmail.com"
                isExternal
                className="block w-full"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Email</h3>
                    <p className="text-default-600 text-sm mb-6 leading-relaxed">
                      Drop me a line anytime. I typically respond within 24 hours.
                    </p>
                    <span className="text-primary hover:text-primary/80 font-medium break-all">
                      greg.caseaux@gmail.com
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>

            {/* GitHub Card */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <Link
                href={siteConfig.links.github}
                isExternal
                className="block w-full"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gray-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">GitHub</h3>
                    <p className="text-default-600 text-sm mb-6 leading-relaxed">
                      Check out my repositories and contribute to open source projects.
                    </p>
                    <span className="text-gray-500 hover:text-gray-400 font-medium">
                      View Profile
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>

            {/* LinkedIn Card */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <Link
                href={siteConfig.links.linkedin}
                isExternal
                className="block w-full md:col-span-2 lg:col-span-1"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
                    <p className="text-default-600 text-sm mb-6 leading-relaxed">
                      Let's connect professionally and expand our networks.
                    </p>
                    <span className="text-blue-500 hover:text-blue-400 font-medium">
                      Connect
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Contact Form Section */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h2 className={title({ size: "md", class: "!text-2xl sm:!text-3xl font-bold mb-4" })}>
                  Send a <span className="text-primary">Message</span>
                </h2>
                <p className={subtitle({ class: "!text-lg text-default-600" })}>
                  Prefer a direct approach? Use the form below to get in touch.
                </p>
              </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                    size: "lg",
                    class: `px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`
                  })}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
            </div>
          </AnimateOnScroll>

          {/* Quick Actions */}
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="text-center mt-16">
              <p className="text-default-600 mb-6">Or reach out directly via:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                    size: "lg",
                    class: "px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-300"
                  })}
                  href="mailto:greg.caseaux@gmail.com"
                  isExternal
                >
                  Email Me
                </Link>
                <Link
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                    size: "lg",
                    class: "px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform duration-300"
                  })}
                  href={siteConfig.links.linkedin}
                  isExternal
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </DefaultLayout>
  );
}
