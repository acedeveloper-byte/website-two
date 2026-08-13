import { Destination } from '../data/destinations';

const DestinationCard = ({ destination }: { destination: Destination }) => {
  return (
    <article
      className="card route-card border-0 shadow-sm rounded-4 overflow-hidden card-hover h-100"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="card-body p-4 d-flex flex-column justify-content-between h-100">
        <div>
          <span className="destination-badge">Popular route</span>
          <p className="text-uppercase fw-bold mb-2 small destination-label">
            Flights from USA to {destination.name}
          </p>
          <h5 className="mb-2 destination-title">{destination.country}</h5>
          <p className="text-muted mb-0 destination-copy">{destination.description}</p>
        </div>

        <div className="mt-4 d-flex flex-wrap align-items-center gap-2">
          <span className="destination-meta">Flexible options</span>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;
