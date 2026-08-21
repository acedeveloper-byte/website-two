import Link from 'next/link';
import { SITE_NAME, PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../../config';

const helpTopics = [
  {
    title: 'Travel planning support',
    description: 'Need help researching routes, flights, or destinations before you travel?',
    icon: 'bi-compass',
  },
  {
    title: 'Booking questions',
    description: 'Looking for booking guidance, fare information, or next steps after a search?',
    icon: 'bi-ticket-perforated',
  },
  {
    title: 'Cancellation & refunds',
    description: 'Need help understanding cancellation terms, refund timing, or policy questions?',
    icon: 'bi-arrow-counterclockwise',
  },
  {
    title: 'General customer help',
    description: 'Have a general question about our website, contact details, or travel information?',
    icon: 'bi-headset',
  },
];

const quickAnswers = [
  'How do I contact support?',
  'Can I ask about route or destination research?',
  'Where can I get cancellation and refund information?',
  'How do I reach the team by email or phone?',
];

export default function AssistancePage() {
  return (
    <section className="container py-5 py-lg-6">
      <div className="row align-items-center g-4 mb-5">
        <div className="col-lg-7">
          <span className="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-pill mb-3">
            Customer assistance
          </span>
          <h1 className="fw-bold display-5 mb-3">We’re here to help travelers every step of the way.</h1>
          <p className="text-muted fs-5 mb-4">
            {SITE_NAME} helps customers with general travel information, route research, destination guidance,
            and support questions related to planning a trip with confidence.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary btn-lg px-4">
              Call Support
            </a>
            <a href="mailto:support@flightagencyhub.com" className="btn btn-outline-primary btn-lg px-4">
              Email Us
            </a>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm rounded-4 p-4 p-lg-5 bg-light">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div>
                <p className="text-muted mb-1 small fw-semibold text-uppercase">Support line</p>
                <h3 className="fw-bold mb-0">{PHONE_NUMBER_DISPLAY}</h3>
              </div>
              <span className="rounded-circle bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center" style={{ width: '58px', height: '58px' }}>
                <i className="bi bi-telephone-fill fs-4" />
              </span>
            </div>

            <div className="border rounded-4 p-3 mb-3 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted small">Hours</span>
                <span className="fw-semibold">Mon - Sat</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted small">Response</span>
                <span className="fw-semibold">Fast assistance</span>
              </div>
            </div>

            <p className="mb-0 text-muted">
              Need help with travel information, destination research, or a general inquiry? Our team is ready to guide you.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {helpTopics.map((topic) => (
          <div className="col-md-6 col-xl-3" key={topic.title}>
            <div className="card border-0 h-100 rounded-4 shadow-sm p-4">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary mb-3" style={{ width: '60px', height: '60px' }}>
                <i className={`bi ${topic.icon} fs-4`} />
              </div>
              <h3 className="h5 fw-bold mb-2">{topic.title}</h3>
              <p className="text-muted mb-0">{topic.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4 align-items-start mb-5">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <h2 className="fw-bold mb-4">How we can help</h2>
            <ul className="list-unstyled mb-0">
              <li className="d-flex gap-3 mb-3">
                <span className="badge bg-primary rounded-circle text-white mt-1" style={{ width: '24px', height: '24px', fontSize: '0.75rem' }}>1</span>
                <div>
                  <h3 className="h6 fw-bold mb-1">Get quick travel support</h3>
                  <p className="text-muted mb-0">Speak with our team for route information, destination details, and general planning help.</p>
                </div>
              </li>
              <li className="d-flex gap-3 mb-3">
                <span className="badge bg-primary rounded-circle text-white mt-1" style={{ width: '24px', height: '24px', fontSize: '0.75rem' }}>2</span>
                <div>
                  <h3 className="h6 fw-bold mb-1">Review policies</h3>
                  <p className="text-muted mb-0">Find guidance on cancellation, refund eligibility, and travel-related policy questions.</p>
                </div>
              </li>
              <li className="d-flex gap-3 mb-0">
                <span className="badge bg-primary rounded-circle text-white mt-1" style={{ width: '24px', height: '24px', fontSize: '0.75rem' }}>3</span>
                <div>
                  <h3 className="h6 fw-bold mb-1">Ask a question anytime</h3>
                  <p className="text-muted mb-0">Contact us by phone or email and we will help you with the next step.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <h2 className="fw-bold mb-3">Quick answers</h2>
            <div className="list-group list-group-flush">
              {quickAnswers.map((answer) => (
                <div key={answer} className="list-group-item px-0 py-3 border-0 border-bottom last-child-border-0">
                  <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-arrow-right-circle-fill text-primary fs-5" />
                    <span className="fw-semibold">{answer}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/faq" className="btn btn-link text-primary px-0 mt-3 fw-semibold text-decoration-none">
              View all FAQs
            </Link>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 p-4 p-lg-5 bg-primary text-white">
        <div className="row align-items-center g-3">
          <div className="col-lg-8">
            <p className="mb-1 text-white-75 fw-semibold text-uppercase small">Need immediate help?</p>
            <h2 className="fw-bold mb-0">Talk to our support team today.</h2>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-light btn-lg fw-bold px-4 me-2 mb-2 mb-lg-0">
              {PHONE_NUMBER_DISPLAY}
            </a>
            <a href="mailto:support@flightagencyhub.com" className="btn btn-outline-light btn-lg fw-bold px-4">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
