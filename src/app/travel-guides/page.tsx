import { travelGuides } from '../../data/guides';

export default function TravelGuidesPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Travel Guides</h1>
        <p className="text-muted">Browse resources designed to help you plan and travel with confidence.</p>
      </div>
      <div className="row g-4">
        {travelGuides.map((guide) => (
          <div className="col-12 col-md-6 col-lg-3" key={guide.id}>
            <div className="card border-0 shadow-sm rounded-4 h-100 card-hover overflow-hidden position-relative">
              <div className="ratio ratio-4x3">
                <img src={guide.image} alt={guide.title} className="card-img-top object-fit-cover" />
              </div>
              <div className="card-body">
                <p className="text-secondary small mb-2">{guide.category}</p>
                <h5 className="card-title">{guide.title}</h5>
                <p className="card-text text-muted">{guide.description}</p>
                <a href={`/travel-guides/${guide.slug}`} className="stretched-link text-decoration-none fw-semibold">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
