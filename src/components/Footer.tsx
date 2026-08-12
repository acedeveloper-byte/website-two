import Link from 'next/link';
import { SITE_NAME } from '../config';
import CTASection from './CTASection';

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-white fw-bold">{SITE_NAME}</h5>
            <p className="text-white-75 mb-4">
              A modern travel information platform for smarter planning and confident journeys.
            </p>
            <CTASection />
          </div>
          <div className="col-12 col-sm-6 col-lg-2">
            <h6 className="text-white fw-semibold">Explore</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link className="footer-link text-decoration-none" href="/flights">
                  Flights
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none" href="/destinations">
                  Destinations
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none" href="/travel-guides">
                  Travel Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-2">
            <h6 className="text-white fw-semibold">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link className="footer-link text-decoration-none" href="/about">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none" href="/faq">
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        
          <div className="col-12 col-sm-6 col-lg-2">
            <h6 className="text-white fw-semibold">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link className="footer-link text-decoration-none" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none" href="/terms">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none" href="/disclaimer">
                  Disclaimer
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none" href="/cancellation-refund">
                  Cancellation & Refund Policy
                </Link>
              </li>
            </ul>
          </div>  
          
          
          <div className="col-12 col-sm-6 col-lg-3">
            <h6 className="text-white fw-semibold">Contact</h6>
            <div className="text-white-75">
              <p className="mb-2">Phone</p>
              <a className="d-block text-white fw-semibold text-decoration-none mb-3" href="tel:+18334263964">
                +1-833-426-3964
              </a>
              <p className="mb-2">Email</p>
              <a className="d-block text-white fw-semibold text-decoration-none" href="mailto:support@example.com">
                support@example.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-top border-white-10 mt-4 pt-3">
          <p className="mb-0 small text-white"><span className="fw-bold">Disclaimer</span><br/>
Fare Eazy provides independent travel information, fare research guidance, destination information, and general flight planning resources. We do not operate flights, issue tickets, manage airline bookings, or provide official airline customer support.</p>
        </div>
        <div className="border-top text-center border-white-10 mt-4 pt-3">
          <p className="mb-0 small text-white-50">© 2026 {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
