export default function PrivacyPolicyPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Privacy Policy</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 760 }}>
          Learn how Travelly collects, uses, and protects your information when you visit our website.
        </p>
      </div>
      <div className="card border-0 rounded-4 shadow-sm p-4">
        <h5 className="fw-semibold">Information We Collect</h5>
        <p className="text-muted">
          We may collect information you provide directly, such as contact details and messages submitted through our forms.
        </p>
        <h5 className="fw-semibold">How We Use Data</h5>
        <p className="text-muted">
          Information is used to respond to inquiries, improve site content, and help deliver a better travel planning experience.
        </p>
        <h5 className="fw-semibold">Cookies and Tracking</h5>
        <p className="text-muted mb-0">
          We use cookies and similar technologies to understand site usage and help deliver a smoother browsing experience.
        </p>
      </div>
    </section>
  );
}
