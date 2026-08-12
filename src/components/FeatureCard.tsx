interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="card border-0 feature-card h-100 card-hover" data-aos="fade-up">
      <div className="card-body d-flex flex-column">
        <div  className="d-flex align-items-center justify-content-center mb-3 rounded-circle" style={{ background: "#f8f9ff",width: 54, height: 54 }}>
          <i className={`bi ${icon} fs-4 fw-bold`} aria-hidden="true"></i>
        </div>
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className="card-text text-muted mb-0">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
