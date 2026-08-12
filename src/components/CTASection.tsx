import Link from 'next/link';

const CTASection = () => {
  return (
     <Link
    href="/contact"
    className="human-agent-btn"
  >
    <span className="human-agent-flag">🇺🇸</span>
    <span>
      <small>Talk to Human Agent</small>
      <strong>+1-833-426-3964</strong>
    </span>
  </Link>
  );
};

export default CTASection;
