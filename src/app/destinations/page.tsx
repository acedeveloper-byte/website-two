import DestinationCard from '../../components/DestinationCard';
import { destinations } from '../../data/destinations';

export default function DestinationsPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Flight Routes</h1>
        <p className="text-muted">Explore domestic USA flight routes and useful route information for your next trip.</p>
      </div>
      <div className="row g-4">
        {destinations.map((destination) => (
          <div className="col-xl-3 col-lg-4 col-md-6" key={destination.id}>
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </section>
  );
}
