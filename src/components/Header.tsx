'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_NAME } from '../config';
import CTASection from './CTASection';

const navItems = [
  { label: 'Flights', path: '/flights' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand fw-bold text-dark" href="/">
          <img src="/web_logo.png" className="img-fluid w-50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarContent"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              {navItems.map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link
                    className="nav-link px-3 font-bold text-dark"
                    href={item.path}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

       <li className="nav-item mt-3 mt-lg-0">
<CTASection />
</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
