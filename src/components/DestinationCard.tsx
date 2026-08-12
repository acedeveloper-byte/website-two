import { Destination } from '../data/destinations';

const DestinationCard = ({ destination }: { destination: Destination }) => {
  return (
    <article className="card route-card border-0 shadow-sm rounded-4 overflow-hidden card-hover h-100" data-aos="zoom-in" data-aos-delay="100">
      
      <div className="route-card-body p-4 d-flex flex-column justify-content-between">
        <div>
          <p className="text-uppercase fw-bold mb-2 small" style={{color :"#1c3e6b"}}>Flights from USA to {destination.name}</p>
          <h5 className="mb-2">{destination.country}</h5>
          <p className="text-muted mb-0">{destination.description}</p>
        </div>
        <div className="mt-4 d-flex flex-wrap align-items-center gap-2">
          <a href="tel:+18334263964" className="btn btn-primary routes-button btn-sm px-4">
            Call +1-833-426-3964
          </a>
          
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;
