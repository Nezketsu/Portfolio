// filepath: /Users/gregz./dev/Portfolio/portfolio/src/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
        <nav>
            <ul className="nav-links">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
