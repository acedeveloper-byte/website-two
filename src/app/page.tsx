import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CTASection from '../components/CTASection';
import DestinationCard from '../components/DestinationCard';
import FAQ from '../components/FAQ';
import FeatureCard from '../components/FeatureCard';
import Hero from '../components/Hero';
import { SITE_NAME } from '../config';
import { destinations } from '../data/destinations';
import { travelGuides } from '../data/guides';

const featureItems = [
  {
    icon: 'bi-info-circle',
    title: 'Flight Information',
    description: 'Review route details, destination information, and travel planning resources in one place.',
  },
  {
    icon: 'bi-geo-alt',
    title: 'Planning Resources',
    description: 'Browse destination information, route guides, and trip-planning references for general research.',
  },
  {
    icon: 'bi-calendar-check',
    title: 'Travel Planning',
    description: 'Use general travel information to compare trip ideas and plan a journey more clearly.',
  },
  {
    icon: 'bi-people',
    title: 'General Support',
    description: 'Contact us for website questions or general travel information inquiries.',
  },
];

const aboutSiteItems = [
  {
    title: `About ${SITE_NAME}`,
    description: `${SITE_NAME} is an independent travel information platform created to help users research destinations, routes, and trip-planning details.`,
  },
  {
    title: `What ${SITE_NAME} Does`,
    description: 'We provide general travel information, destination research, and helpful planning resources for travel preparation.',
  },
  {
    title: 'Need More Information?',
    description: 'Our team can help with general website and travel information questions using the contact details provided on this site.',
  },
];

const serviceItems = [
  {
    title: 'Route Research',
    description: 'Compare available route information and destination details for general planning purposes.',
  },
  {
    title: 'Destination Guides',
    description: 'Explore traveler information, local highlights, and destination references for research and planning.',
  },
  {
    title: 'General Support',
    description: 'Use the contact information provided for website questions and general travel information requests.',
  },
  {
    title: 'Trip Preparation',
    description: 'Review travel planning resources and general travel details before making arrangements with a provider.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold">Travel information and planning resources</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 700 }}>
            {SITE_NAME} provides general travel information, destination references, and trip-planning resources to help you research options before booking with a travel provider.
          </p>
        </div>
        <div className="row g-4">
          {featureItems.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.title}>
              <FeatureCard {...item} />
            </div>
          ))}
        </div>

      </section>
      <section className="container py-5 section-dark rounded-5">
        <div className="text-center mb-5">
          <span className="badge section-dark-badge mb-2">Why Explore</span>
          <h2 className="h3 fw-bold text-white">Useful travel research resources for trip planning</h2>
          <p className="text-white-75 mx-auto" style={{ maxWidth: 640 }}>
            Review destination information, route details, and general travel planning resources before making travel arrangements with a provider.
          </p>
        </div>
        <div className="row g-4">
          {serviceItems.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.title}>
              <div className="p-4 rounded-4 h-100 section-dark-card feature-soft">
                <h5 className="fw-semibold mb-3 text-white">{item.title}</h5>
                <p className="text-white-75 mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container py-5">
        <div className="text-center mb-4">
          <span className="badge section-dark-badge mb-2">Top routes</span>
          <h2 className="h3 fw-bold">Popular Flight Routes</h2>
          <p className="text-muted mb-0 mx-auto" style={{ maxWidth: 720 }}>
            Explore common route ideas and travel information to support trip research and destination planning.
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

      <section className="container py-5 section-dark m-5 p-5 rounded-5">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-7">

          </div>
          <div className="text-start mb-4">
            <span className="badge section-dark-badge mb-2">About Us</span>
            <h2 className="h3 fw-bold text-white">Travel information designed for research and planning</h2>
            <p className="text-white-75 mb-0">
              {SITE_NAME} provides general trip-planning resources, destination information, and route guidance to help travelers prepare for their journeys.
            </p>
          </div>


          {aboutSiteItems.map((item) => (
            <div className="col-lg-4" key={item.title}>
              <div className="p-4 rounded-4 section-dark-card h-100">
                <h5 className="fw-semibold mb-2 text-white">{item.title}</h5>
                <p className="text-white-75 mb-0">{item.description}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      <FAQ />
    </>
  );
}
