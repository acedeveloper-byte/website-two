import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../config';

const CTASection = () => {
  return (
    <div>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="human-agent-btn text-decoration-none"
        aria-label="Call our general support line"
      >
        <span className="human-agent-flag">📞</span>
        <span>
          <small>General support</small>
          <strong>{PHONE_NUMBER_DISPLAY}</strong>
        </span>
      </a>
      <small className="d-block text-muted mt-2" style={{ fontSize: '0.75rem' }}>
        Free support. Not affiliated with any airline. We help with airline contact info and booking questions.
      </small>
    </div>
  );
};

export default CTASection;
