'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_NAME, PHONE_NUMBER, PHONE_NUMBER_DISPLAY, SPAIN_PHONE_NUMBER, SPAIN_PHONE_NUMBER_DISPLAY } from '../config';
import CTASection from './CTASection';
import { reportPhoneConversion } from '../utils/gtag';

const Footer = () => {
  const isSpanishAssistancePage = usePathname() === '/asistencia-reserva-vuelos-espana';

  return (
    <footer className="text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-white fw-bold"> <img src="/flightagencyhub_horizontal_logo.png" className="img-fluid w-80 rounded" /></h5>
            <p className="text-white-75 mb-4">
              {isSpanishAssistancePage
                ? 'Una plataforma independiente de información de viajes para investigar destinos y planificar itinerarios.'
                : 'An independent travel information platform for destination research and trip-planning guidance.'}
            </p>
            <CTASection />
          </div>
        
          <div className="col-12 col-sm-6 col-lg-2">
            <h6 className="text-white fw-semibold">{isSpanishAssistancePage ? 'Empresa' : 'Company'}</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/about">
                  {isSpanishAssistancePage ? 'Acerca de' : 'About'}
                </Link>
              </li>
              
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/assistance">
                  {isSpanishAssistancePage ? 'Asistencia' : 'Assistance'}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/contact-us">
                  {isSpanishAssistancePage ? 'Contacto' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <h6 className="text-white fw-semibold">{isSpanishAssistancePage ? 'Información legal' : 'Legal'}</h6>
            <ul className="list-unstyled">
               <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/disclaimer">
                  {isSpanishAssistancePage ? 'Aviso legal' : 'Disclaimer'}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/privacy-policy">
                  {isSpanishAssistancePage ? 'Política de privacidad' : 'Privacy Policy'}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/terms-and-conditions">
                  {isSpanishAssistancePage ? 'Términos y condiciones' : 'Terms & Conditions'}
                </Link>
              </li>
             
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/cancellation-refund">
                  {isSpanishAssistancePage ? 'Política de cancelación y reembolso' : 'Cancellation & Refund Policy'}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-decoration-none fw-bold" href="/faq">
                  {isSpanishAssistancePage ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-2">
            <h6 className="text-white fw-semibold">{isSpanishAssistancePage ? 'Contacto' : 'Contact'}</h6>
            <div className="text-white-75">
              <p className="mb-2">{isSpanishAssistancePage ? 'Dirección' : 'Address'}</p>
              <p className="d-block text-white fw-semibold mb-3 small">1098 S Milwaukee Ave Suite 200<br />Wheeling, IL 60090</p>
              <p className="mb-2">{isSpanishAssistancePage ? 'Teléfono' : 'Phone'}</p>
              {isSpanishAssistancePage ? (
                <>
                  <a className="footer-country-phone text-white fw-semibold text-decoration-none fw-bold" href={`tel:${PHONE_NUMBER}`} onClick={reportPhoneConversion}>
                    <span className="country-flag country-flag--usa" aria-hidden="true" />
                    <span>Estados Unidos<strong>{PHONE_NUMBER_DISPLAY}</strong></span>
                  </a>
                  <a className="footer-country-phone text-white fw-semibold text-decoration-none fw-bold" href={`tel:${SPAIN_PHONE_NUMBER}`} onClick={reportPhoneConversion}>
                    <span className="country-flag country-flag--spain" aria-hidden="true" />
                    <span>España<strong>{SPAIN_PHONE_NUMBER_DISPLAY}</strong></span>
                  </a>
                </>
              ) : (
                <a className="d-block text-white fw-semibold text-decoration-none fw-bold mb-3" href={`tel:${PHONE_NUMBER}`} onClick={reportPhoneConversion}>
                  {PHONE_NUMBER_DISPLAY}
                </a>
              )}
              <p className="mb-2">{isSpanishAssistancePage ? 'Correo electrónico' : 'Email'}</p>
              <a className="d-block text-white fw-semibold text-decoration-none fw-bold" href="mailto:support@flightagencyhub.com">
                support@flightagencyhub.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-top border-white-10 mt-4 pt-3">
          <p className="mb-0 small text-white"><span className="fw-bold">{isSpanishAssistancePage ? 'Aviso legal' : 'Disclaimer'}</span><br />
            {isSpanishAssistancePage
              ? `${SITE_NAME} proporciona información independiente sobre viajes, orientación para investigar tarifas, información sobre destinos y recursos generales para planificar vuelos. No operamos vuelos, emitimos billetes, gestionamos reservas de aerolíneas ni ofrecemos atención oficial en nombre de ninguna aerolínea.`
              : `${SITE_NAME} provides independent travel information, fare research guidance, destination information, and general flight planning resources. We do not operate flights, issue tickets, manage airline bookings, or provide official customer support on behalf of any airline.`}</p>
        </div>
        <div className="border-top text-center border-white-10 mt-4 pt-3">
          <p className="mb-0 small text-white-50">© 2026 {SITE_NAME}. {isSpanishAssistancePage ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
