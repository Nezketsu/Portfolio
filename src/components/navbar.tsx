"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={clsx(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/90 dark:bg-default-100/90 backdrop-blur-md shadow-lg border-b border-default-200" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-inherit group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-sm font-bold">G</span>
            </div>
            <span className="font-bold text-lg sm:text-xl text-primary">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            {siteConfig.navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={clsx(
                  "relative text-default-600 font-medium hover:text-primary transition-all duration-300 py-2 px-3 rounded-full",
                  "hover:bg-default-100 group animate-fade-in",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Switch */}
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <ThemeSwitch />
            </div>

            {/* Social Links */}
            <div className="hidden sm:flex gap-2 items-center">
              {siteConfig.links.github && (
                <a 
                  href={siteConfig.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-full text-default-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: '500ms' }}
                >
                  <GithubIcon size={20} />
                  <span className="sr-only">GitHub</span>
                </a>
              )}
              
              {siteConfig.links.linkedin && (
                <a 
                  href={siteConfig.links.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-full text-default-600 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: '600ms' }}
                >
                  <LinkedinIcon size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={clsx(
                "md:hidden p-2 rounded-full transition-all duration-300 animate-fade-in",
                "hover:bg-default-100 hover:scale-110",
                isMenuOpen && "bg-default-100 scale-110"
              )}
              style={{ animationDelay: '700ms' }}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6 transition-transform duration-300"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden",
          "fixed top-16 left-0 right-0 bottom-0 bg-white/95 dark:bg-default-100/95 backdrop-blur-xl z-20",
          "transition-all duration-300 ease-in-out",
          "overflow-y-auto",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col space-y-4">
            {siteConfig.navMenuItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={clsx(
                  "text-default-600 hover:text-primary transition-all duration-300",
                  "py-4 px-6 text-lg font-medium rounded-2xl",
                  "hover:bg-default-100 hover:scale-105 transform",
                  "animate-slide-up"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {item.label}
                </div>
              </Link>
            ))}

            {/* Social Links for Mobile */}
            <div className="flex gap-4 pt-8 mt-8 border-t border-default-200 justify-center">
              {siteConfig.links.github && (
                <a 
                  href={siteConfig.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4 rounded-2xl text-default-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 animate-scale-in"
                  style={{ animationDelay: '500ms' }}
                >
                  <GithubIcon size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
              )}
              
              {siteConfig.links.linkedin && (
                <a 
                  href={siteConfig.links.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4 rounded-2xl text-default-600 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 animate-scale-in"
                  style={{ animationDelay: '600ms' }}
                >
                  <LinkedinIcon size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}