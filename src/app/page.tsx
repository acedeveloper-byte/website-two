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
    title: 'Route Research',
    description: 'Explore flight route details, airports, and typical schedules to understand travel options.',
  },
  {
    icon: 'bi-geo-alt',
    title: 'Destination Guides',
    description: 'Discover destination information, travel requirements, and planning tips for your trip.',
  },
  {
    icon: 'bi-calendar-check',
    title: 'Travel Planning',
    description: 'Compare routes, understand booking requirements, and prepare for your journey.',
  },
  {
    icon: 'bi-phone',
    title: 'Free Support',
    description: 'Get help finding airline contact information and navigating booking questions—no fees.',
  },
];

const aboutSiteItems = [
  {
    title: `What ${SITE_NAME} Is`,
    description: `${SITE_NAME} is a free, independent travel information platform. We are not affiliated with any airline and do not process bookings or payments.`,
  },
  {
    title: `How We Help`,
    description: 'We provide route information, destination details, and general travel guidance to help you research your options before booking with a provider.',
  },
  {
    title: 'No Affiliation, No Fees',
    description: 'We earn through advertising and affiliate partnerships. Our phone support is free and independent—we represent no airline.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold">What We Offer</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 700 }}>
            {SITE_NAME} helps travelers research routes and destinations with accurate, free information. We are independent and never charge service fees.
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

      <section className="container py-5">
        <div className="text-center mb-4">
          <span className="badge section-dark-badge mb-2">Popular Routes</span>
          <h2 className="h3 fw-bold">Flight Route Research</h2>
          <p className="text-muted mb-0 mx-auto" style={{ maxWidth: 720 }}>
            Browse common travel routes with details on airports, flight duration, and carriers to help with your research.
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

      <section className="py-5 section-dark rounded-5 mx-2 mx-md-4 mx-lg-auto" style={{ marginTop: '3rem', marginBottom: '3rem', maxWidth: '1200px' }}>
        <div className="px-3 px-md-5">
          <div className="row gy-4">
            <div className="col-12 mb-4">
              <span className="badge section-dark-badge mb-2">About Us</span>
              <h2 className="h3 fw-bold text-white">Independent Travel Information</h2>
              <p className="text-white-75 mb-0">
                {SITE_NAME} is a free platform built to help travelers research routes and destinations. We work independently, without affiliation to any airline or travel provider.
              </p>
            </div>

            {aboutSiteItems.map((item) => (
              <div className="col-12 col-sm-6 col-lg-4" key={item.title}>
                <div className="p-4 rounded-4 section-dark-card h-100">
                  <h5 className="fw-semibold mb-2 text-white">{item.title}</h5>
                  <p className="text-white-75 mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
