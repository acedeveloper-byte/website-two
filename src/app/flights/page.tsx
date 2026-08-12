import FlightSearch from '../../components/FlightSearch';
import DestinationCard from '../../components/DestinationCard';
import { destinations } from '../../data/destinations';

export default function FlightsPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Flights</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 760 }}>
          Search popular domestic and international flight routes, compare travel details, and get support for your next trip.
        </p>
      </div>

      <div className="mb-5">
        <FlightSearch />
      </div>

      <div className="text-center mb-4">
        <h2 className="h3 fw-bold">Popular Flight Routes</h2>
        <p className="text-muted mb-0">
          Explore common routes and get quick access to travel guidance for each destination.
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
