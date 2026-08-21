'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_NAME } from '../config';
import CTASection from './CTASection';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact-us' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2">
        <div className="container">
          <Link className="navbar-brand fw-bold text-dark me-2" href="/">
            <img src="/web_logo.png" className="img-fluid" style={{ maxWidth: '140px', width: '100%' }} alt="Website logo" />
          </Link>
          
          <div className="d-flex align-items-center gap-2 d-lg-none">
            <CTASection />
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
          </div>

          <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              {navItems.map((item) => {
                const active = item.path === '/' ? pathname === '/' : false;

                return (
                  <li className="nav-item" key={item.path}>
                    <Link
                      className={`nav-link px-2 px-md-3 py-2 py-lg-0 fw-bold text-sm ${active ? 'text-primary fw-semibold' : 'text-dark'}`}
                      href={item.path}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="nav-item mt-3 mt-lg-0 d-none d-lg-block">
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
