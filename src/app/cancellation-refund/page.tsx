export default function CancellationRefundPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Cancellation & Refund Policy</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 760 }}>
          Understand the cancellation and refund principles that apply to the travel information and services we provide.
        </p>
      </div>
      <div className="card border-0 rounded-4 shadow-sm p-4">
        <h5 className="fw-semibold">Policy Scope</h5>
        <p className="text-muted">
          Travelly provides information only. Any cancellations or refunds for bookings are handled by the airline or booking platform used for your reservation.
        </p>
        <h5 className="fw-semibold">Information Use</h5>
        <p className="text-muted">
          We may provide refund guidance, but final terms depend on the carrier's policies and the type of fare purchased.
        </p>
        <h5 className="fw-semibold">Contact Support</h5>
        <p className="text-muted mb-0">
          If you need more assistance understanding cancellation rules, please contact the airline or our travel support line at +1-833-426-3964.
        </p>
      </div>
    </section>
  );
}
