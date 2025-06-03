// filepath: /Users/gregz./dev/Portfolio/portfolio/src/components/navbar.tsx
"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lgx z-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-inherit"
          >
            <span className="font-frick text-lg sm:text-xl">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-10 items-center">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-default-600 font-bold hover:text-primary transition-colors py-2 px-1"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Switch */}
            <ThemeSwitch />

            {/* Social Links */}
            <div className="hidden sm:flex gap-3 items-center">
              {siteConfig.links.github && (
                <a 
                  href={siteConfig.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-default-600 hover:text-primary transition-colors"
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
                  className="text-default-600 hover:text-primary transition-colors"
                >
                  <LinkedinIcon size={20} /> {/* Using Twitter icon as placeholder */}
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-default-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6"
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
          "fixed top-16 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-md border-b border-border z-20",
          "transition-all duration-300 ease-in-out",
          "overflow-y-auto",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col space-y-6">
            {siteConfig.navMenuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-default-600 hover:text-primary transition-colors py-3 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Social Links for Mobile */}
            <div className="flex gap-6 pt-6 mt-4 border-t border-border">
              {siteConfig.links.github && (
                <a 
                  href={siteConfig.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-default-600 hover:text-primary transition-colors p-2"
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
                  className="text-default-600 hover:text-primary transition-colors p-2"
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