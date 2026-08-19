'use client';

import Link from 'next/link';
import { SITE_NAME, PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../config';
import CTASection from './CTASection';
import { reportPhoneConversion } from '../utils/gtag';

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-white fw-bold"> <img src="/flightagencyhub_horizontal_logo.png" className="img-fluid w-80 rounded" /></h5>
            <p className="text-white-75 mb-4">
              An independent travel information platform for destination research and trip-planning guidance.
            </p>
            <CTASection />
          </div>
        
          <div className="col-12 col-sm-6 col-lg-2">
            <h6 className="text-white fw-semibold">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/about">
                  About
                </Link>
              </li>
              
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <h6 className="text-white fw-semibold">Legal</h6>
            <ul className="list-unstyled">
               <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/disclaimer">
                  Disclaimer
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/terms-and-conditions">
                  Terms & Conditions
                </Link>
              </li>
             
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/cancellation-refund">
                  Cancellation & Refund Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/faq">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-2">
            <h6 className="text-white fw-semibold">Contact</h6>
            <div className="text-white-75">
              <p className="mb-2">Address</p>
              <p className="d-block text-white fw-semibold mb-3 small">1098 S Milwaukee Ave Suite 200<br />Wheeling, IL 60090</p>
              <p className="mb-2">Phone</p>
              <a className="d-block text-white fw-semibold text-decoration-none fw-bold mb-3" href={`tel:${PHONE_NUMBER}`} onClick={reportPhoneConversion}>
                {PHONE_NUMBER_DISPLAY}
              </a>
              <p className="mb-2">Email</p>
              <a className="d-block text-white fw-semibold text-decoration-none fw-bold" href="mailto:support@flightagencyhub.com">
                support@flightagencyhub.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-top border-white-10 mt-4 pt-3">
          <p className="mb-0 small text-white"><span className="fw-bold">Disclaimer</span><br />
            {SITE_NAME} provides independent travel information, fare research guidance, destination information, and general flight planning resources. We do not operate flights, issue tickets, manage airline bookings, or provide official customer support on behalf of any airline.</p>
        </div>
        <div className="border-top text-center border-white-10 mt-4 pt-3">
          <p className="mb-0 small text-white-50">© 2026 {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
