'use client';

import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY, SPAIN_PHONE_NUMBER, SPAIN_PHONE_NUMBER_DISPLAY } from '../config';
import { reportPhoneConversion } from '../utils/gtag';
import { usePathname } from 'next/navigation';

const CTASection = () => {
  const isSpanishAssistancePage = usePathname() === '/asistencia-reserva-vuelos-espana';

  if (isSpanishAssistancePage) {
    return (
      <>
        <a href={`tel:${PHONE_NUMBER}`} onClick={reportPhoneConversion} className="human-agent-btn text-decoration-none" aria-label={`Línea de asistencia de Estados Unidos: ${PHONE_NUMBER_DISPLAY}`}>
          <span className="human-agent-flag country-flag country-flag--usa" aria-hidden="true" />
          <span className="human-agent-country">
            <small>Estados Unidos</small>
            <strong>{PHONE_NUMBER_DISPLAY}</strong>
          </span>
        </a>
        <a href={`tel:${SPAIN_PHONE_NUMBER}`} onClick={reportPhoneConversion} className="human-agent-btn text-decoration-none" aria-label={`Línea de asistencia de España: ${SPAIN_PHONE_NUMBER_DISPLAY}`}>
          <span className="human-agent-flag country-flag country-flag--spain" aria-hidden="true" />
          <span className="human-agent-country">
            <small>España</small>
            <strong>{SPAIN_PHONE_NUMBER_DISPLAY}</strong>
          </span>
        </a>
      </>
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
