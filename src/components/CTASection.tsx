'use client';

import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../config';
import { reportPhoneConversion } from '../utils/gtag';
import { usePathname } from 'next/navigation';

const CTASection = () => {
  const isSpanishAssistancePage = usePathname() === '/asistencia-reserva-vuelos-espana';

  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      onClick={reportPhoneConversion}
      className="human-agent-btn text-decoration-none"
      aria-label={isSpanishAssistancePage ? 'Llamar a nuestra línea de atención' : 'Call our general support line'}
    >
      <span className="human-agent-flag">📞</span>
      <span>
        <strong>{PHONE_NUMBER_DISPLAY}</strong>
      </span>
    </a>
  );
};

export default CTASection;
