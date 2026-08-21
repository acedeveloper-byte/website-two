import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOSProvider from '../components/AOSProvider';
import { SITE_NAME, PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../config';
import ChatWidget from '../components/ChatWidget';

export const metadata: Metadata = {
  title: `${SITE_NAME} | Travel Information & Planning Directory`,
  description: 'An independent travel information directory offering travel planning guidance, flight route information, and assistance resources.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BQLCNDJVYT"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18394602086"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WG65WMVC30"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BQLCNDJVYT');
            gtag('config', 'AW-18394602086');
            gtag('config', 'G-WG65WMVC30');
            gtag('config', 'AW-18394602086/M1g-CN2wnOQcEOa0ncNE', {
              'phone_conversion_number': '+1-844-585-5025'
            });

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-18394602086/M1g-CN2wnOQcEOa0ncNE',
                  'event_callback': callback
                });
              }
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>

        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

      </head>
      <body>
        <Header />
        <AOSProvider />
        <main>{children}</main>
        <Footer />

        {/* <a
          href={`tel:${PHONE_NUMBER}`}
          className="mobile-cta-bar d-md-none d-flex align-items-center justify-content-between px-3 py-3 text-white text-decoration-none"
        >
          <div>
            <strong>General support</strong>
            <div className="small opacity-75">{PHONE_NUMBER_DISPLAY}</div>
          </div>
          <span className="btn btn-light btn-sm text-primary">Call</span>
        </a> */}
      </body>
    </html>
  );
};

export default RootLayout;
