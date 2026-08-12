export default function DisclaimerPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Disclaimer</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 760 }}>
          Read the disclaimer that explains the scope of Travelly's travel information and our role as an informational platform.
        </p>
      </div>
      <div className="card border-0 rounded-4 shadow-sm p-4">
        <h5 className="fw-semibold">Travel Information Only</h5>
        <p className="text-muted">
          Travelly provides independent travel information and planning guidance. We are not an airline, travel agency, or ticket seller.
        </p>
        <h5 className="fw-semibold">No Booking Services</h5>
        <p className="text-muted">
          We do not operate flights, issue tickets, or manage bookings. For reservations and ticketing, contact the airline or authorized travel provider directly.
        </p>
        <h5 className="fw-semibold">Accuracy and Liability</h5>
        <p className="text-muted mb-0">
          While we aim to keep content updated, Travelly is not responsible for errors or omissions. Use the information as a guide and verify before making travel decisions.
        </p>
      </div>
    </section>
  );
}
