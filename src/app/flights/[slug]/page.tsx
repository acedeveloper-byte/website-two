import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinations } from '../../../data/destinations';

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return {
      title: 'Route Not Found',
      description: 'Route information not found.'
    };
  }

  return {
    title: `Flights from ${destination.origin} to ${destination.destination} | ${destination.name}`,
    description: `Research route information between ${destination.origin} and ${destination.destination}, including airport details, travel planning considerations, and related route resources.`
  };
}

export default async function FlightRoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  const relatedRoutes = destinations.filter((item) => item.slug !== destination.slug).slice(0, 4);

  return (
    <main className="container py-5">
      <nav aria-label="Breadcrumb" className="mb-4 small text-muted">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <Link href="/" className="text-decoration-none">Home</Link>
          <span>/</span>
          <Link href="/flights" className="text-decoration-none">Flights</Link>
          <span>/</span>
          <span className="text-dark fw-semibold">{destination.name}</span>
        </div>
      </nav>

      <header className="mb-5">
        <span className="badge section-dark-badge mb-2">Flight route research</span>
        <h1 className="fw-bold mb-3">Flights from {destination.origin} to {destination.destination}</h1>
        <p className="text-muted mb-0" style={{ maxWidth: 900 }}>
          Research route information, airport details, travel planning considerations, and related resources for travel between {destination.origin} and {destination.destination}.
        </p>
      </header>

      <section className="mb-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
              <h2 className="h4 fw-bold mb-3">Route Overview</h2>
              <p className="text-muted mb-0">{destination.routeOverview}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
              <h2 className="h4 fw-bold mb-3">Quick Facts</h2>
              <ul className="mb-0 ps-3 text-muted">
                <li className="mb-2"><strong>Origin:</strong> {destination.origin}</li>
                <li className="mb-2"><strong>Destination:</strong> {destination.destination}</li>
                <li className="mb-2"><strong>Typical duration:</strong> {destination.flightDuration}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h2 className="h4 fw-bold mb-3">Departure Airport</h2>
            <p className="text-muted mb-0">{destination.originAirport}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h2 className="h4 fw-bold mb-3">Arrival Airport</h2>
            <p className="text-muted mb-0">{destination.destinationAirport}</p>
          </div>
        </div>
      </section>

      <section className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h2 className="h4 fw-bold mb-3">Flight Duration</h2>
            <p className="text-muted mb-0">{destination.flightDuration}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h2 className="h4 fw-bold mb-3">Nonstop and Connecting Options</h2>
            <p className="text-muted mb-0">
              Travelers may find nonstop service on some itineraries, while others may include one-stop or connecting routes depending on airline schedules, demand, and travel timing.
            </p>
          </div>
        </div>
      </section>

      <section className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h2 className="h4 fw-bold mb-3">Airlines Serving This Route</h2>
            <ul className="mb-0 ps-3 text-muted">
              {destination.airlines.map((airline) => (
                <li key={airline} className="mb-2">{airline}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100">
            <h2 className="h4 fw-bold mb-3">Airport Information</h2>
            <p className="text-muted mb-0">
              Airport services, terminal layouts, check-in timing, and ground transportation availability can vary. Travelers should verify the latest airport information with the airline or airport authority before departure.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="card border-0 rounded-4 shadow-sm p-4">
          <h2 className="h4 fw-bold mb-3">Travel Planning Tips</h2>
          <ul className="mb-0 ps-3 text-muted">
            {destination.planningTips.map((tip) => (
              <li key={tip} className="mb-2">{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-5">
        <div className="card border-0 rounded-4 shadow-sm p-4">
          <h2 className="h4 fw-bold mb-3">Frequently Asked Questions</h2>
          <div className="accordion" id={`faq-${destination.id}`}>
            <div className="accordion-item border-0 mb-3">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${destination.id}-one`}>
                  Is this route information current?
                </button>
              </h3>
              <div id={`faq-${destination.id}-one`} className="accordion-collapse collapse" data-bs-parent={`#faq-${destination.id}`}>
                <div className="accordion-body text-muted">
                  This page contains general travel research information and should be verified with the relevant airline, airport, or travel provider before booking.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${destination.id}-two`}>
                  Where should I complete my booking?
                </button>
              </h3>
              <div id={`faq-${destination.id}-two`} className="accordion-collapse collapse" data-bs-parent={`#faq-${destination.id}`}>
                <div className="accordion-body text-muted">
                  Booking terms, fare rules, and payment processing are handled by the airline or travel provider you choose. FlightAgencyHub is an independent research platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="h4 fw-bold mb-4">Related Flight Routes</h2>
        <div className="row g-4">
          {relatedRoutes.map((route) => (
            <div className="col-lg-3 col-md-6" key={route.id}>
              <Link href={`/flights/${route.slug}`} className="text-decoration-none text-dark">
                <div className="card border-0 rounded-4 shadow-sm p-3 h-100">
                  <span className="small text-primary fw-semibold">{route.origin} → {route.destination}</span>
                  <h3 className="h6 fw-bold mt-2 mb-0">{route.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
