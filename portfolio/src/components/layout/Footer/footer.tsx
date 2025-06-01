// filepath: /Users/gregz./dev/Portfolio/portfolio/src/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 My Portfolio. All rights reserved.</p>
      <nav>
        <ul className="footer-links">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;