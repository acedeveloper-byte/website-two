import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../../config';

export default function ContactPage() {
  return (
    <section className="container py-5">
      <div className="row gy-4">
        <div className="col-lg-6">
          <h1 className="fw-bold">Contact</h1>
          <p className="text-muted">Reach out for general website questions or travel information inquiries related to route and destination research.</p>
          <div className="card border-0 rounded-4 shadow-sm p-4">
            <h5 className="fw-semibold">General Support</h5>
            <p className="text-muted mb-1">Phone</p>
            <p className="fw-bold">
              <a href={`tel:${PHONE_NUMBER}`} className="text-decoration-none text-dark">
                {PHONE_NUMBER_DISPLAY}
              </a>
            </p>
            <p className="text-muted mb-0">Email</p>
            <p className="fw-bold">support@flightagencyhub.com</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card border-0 rounded-4 shadow-sm p-4">
            <h5 className="fw-semibold mb-3">Send a message</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control custom-input" id="name" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control custom-input" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea className="form-control form-control-lg custom-input" id="message" rows={5} placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100 w-md-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
