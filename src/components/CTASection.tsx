'use client';

import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY, SPAIN_PHONE_NUMBER, SPAIN_PHONE_NUMBER_DISPLAY } from '../config';
import { reportPhoneConversion } from '../utils/gtag';
import { usePathname } from 'next/navigation';

const CTASection = () => {
  const isSpanishAssistancePage = usePathname() === '/asistencia-reserva-vuelos-espana';

  if (isSpanishAssistancePage) {
    return (
      <div className="human-agent-btn text-decoration-none" aria-label="Líneas de asistencia para viajes">
        <span className="human-agent-flag">📞</span>
        <span>
          <a href={`tel:${PHONE_NUMBER}`} onClick={reportPhoneConversion} className="text-decoration-none d-block">
            <strong>{PHONE_NUMBER_DISPLAY}</strong>
          </a>
          <a href={`tel:${SPAIN_PHONE_NUMBER}`} onClick={reportPhoneConversion} className="text-decoration-none d-block">
            <strong>{SPAIN_PHONE_NUMBER_DISPLAY}</strong>
          </a>
        </span>
      </div>
    );
  }

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
