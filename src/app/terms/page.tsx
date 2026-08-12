import { SITE_NAME } from '../../config';

export default function TermsPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Terms & Conditions</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 760 }}>
          Review the terms that govern your use of {SITE_NAME} and the information we provide about travel planning.
        </p>
      </div>
      <div className="card border-0 rounded-4 shadow-sm p-4">
        <h5 className="fw-semibold">1. General Use</h5>
        <p className="text-muted">
          {SITE_NAME} provides travel planning information and guidance. By using this site, you agree to these terms and any updates we make.
        </p>
        <h5 className="fw-semibold">2. Content Accuracy</h5>
        <p className="text-muted">
          We strive to keep content up to date, but we do not guarantee accuracy of routes, prices, or schedules. Always verify details with the relevant carrier or travel provider.
        </p>
        <h5 className="fw-semibold">3. Use of Information</h5>
        <p className="text-muted mb-0">
          The information on this site is intended for general travel planning and should not be used as a substitute for official booking or airline confirmation.
        </p>
      </div>
    </section>
  );
}
