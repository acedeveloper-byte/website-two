import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../config';

const CTASection = () => {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className="human-agent-btn text-decoration-none"
      aria-label="Call our general support line"
    >
      <span className="human-agent-flag">📞</span>
      <span>
        <strong>{PHONE_NUMBER_DISPLAY}</strong>
      </span>
    </a>
  );
};

export default CTASection;
