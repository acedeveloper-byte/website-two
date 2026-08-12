import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../config';

const CTASection = () => {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className="human-agent-btn text-decoration-none"
    >
      <span className="human-agent-flag">🇺🇸</span>
      <span>
        <small>Talk to Human Agent</small>
        <strong>{PHONE_NUMBER_DISPLAY}</strong>
      </span>
    </a>
  );
};

export default CTASection;
