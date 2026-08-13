export default function AboutPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted">We are an independent travel information platform offering general planning resources and destination research.</p>
      </div>
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h5 className="fw-semibold">Our Mission</h5>
            <p className="text-muted mb-0">To provide useful travel information and planning resources for travelers researching destinations and routes.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h5 className="fw-semibold">What We Offer</h5>
            <p className="text-muted mb-0">Destination references, route details, and general travel information intended for research and planning.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h5 className="fw-semibold">Who We Help</h5>
            <p className="text-muted mb-0">Travelers looking for general information and trip-planning resources before arranging travel with a provider.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
