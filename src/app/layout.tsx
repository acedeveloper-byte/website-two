
import "./globals.css";
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOSProvider from '../components/AOSProvider';

export const metadata: Metadata = {
  title: 'Travelly | Modern Travel Information',
  description: 'A clean travel information website with flight guidance, destinations and assistance resources.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head><link
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
        <a
          href="tel:+18334263964"
          className="mobile-cta-bar d-md-none d-flex align-items-center justify-content-between px-3 py-3 text-white text-decoration-none"
        >
          <div>
            <strong>Talk to an Agent</strong>
            <div className="small opacity-75">+1-833-426-3964</div>
          </div>
          <span className="btn btn-light btn-sm text-primary">Call</span>
        </a>
      </body>
    </html>
  );
};

export default RootLayout;
