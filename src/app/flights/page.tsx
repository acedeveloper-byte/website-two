import FlightSearch from '../../components/FlightSearch';
import DestinationCard from '../../components/DestinationCard';
import { destinations } from '../../data/destinations';

export default function FlightsPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Flight Information</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 760 }}>
          Research popular route ideas, compare destination details, and review general travel information before making arrangements with a provider.
        </p>
      </div>

      <div className="mb-5">
        <FlightSearch />
      </div>

      <div className="text-center mb-4">
        <span className="badge section-dark-badge mb-2">Top routes</span>
        <h2 className="h3 fw-bold">Popular Route Ideas</h2>
        <p className="text-muted mb-0 mx-auto" style={{ maxWidth: 720 }}>
          Explore common travel routes and destination information to support trip research and planning.
        </p>
      </div>

      <div className="row g-4">
        {destinations.slice(0, 8).map((destination) => (
          <div className="col-xl-3 col-lg-4 col-md-6" key={destination.id}>
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </section>
  );
}
