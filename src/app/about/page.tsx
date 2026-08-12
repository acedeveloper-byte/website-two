export default function AboutPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted">We are a travel information platform helping travelers make better decisions with clear planning guidance.</p>
      </div>
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h5 className="fw-semibold">Our Mission</h5>
            <p className="text-muted mb-0">To make travel planning smarter, more transparent and easier for modern travelers.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h5 className="fw-semibold">What We Offer</h5>
            <p className="text-muted mb-0">Destination insights, flight guidance and travel assistance resources designed for planning convenience.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h5 className="fw-semibold">Who We Help</h5>
            <p className="text-muted mb-0">Travelers seeking fast, trusted information and support as they prepare for their next trip.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
