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
    title: 'Flight Info',
    description: 'Real-time updates, seating charts, and transparent pricing to help you choose the best route.',
  },
  {
    icon: 'bi-geo-alt',
    title: 'Planning Resources',
    description: 'Access comprehensive destination guides, visa requirements, and curated local insights.',
  },
  {
    icon: 'bi-calendar-check',
    title: 'Travel Planning',
    description: 'Access resources to help plan your next trip.',
  },
  {
    icon: 'bi-people',
    title: 'Human Assistance',
    description: '24/7 dedicated support from seasoned travel specialists ready to resolve any itinerary challenges.',
  },
];

const aboutTravellyItems = [
  {
    title: 'About Travelly',
    description: 'Travelly is a travel information platform built to help you plan with confidence, clarity and calm.',
  },
  {
    title: 'What Travelly Does',
    description: 'We provide trusted flight details, destination insights, and friendly support for every journey.',
  },
  {
    title: 'Looking for Assistance?',
    description: 'Our team is ready to support your travel questions with phone, planning guidance, and trusted advice.',
  },
];

const serviceItems = [
  {
    title: 'Quick Flight Search',
    description: 'Instantly compare routes and general travel options so you know what to expect.',
  },
  {
    title: 'Smart Destination Guides',
    description: 'Discover places with destination tips, local highlights and essential travel facts.',
  },
  {
    title: 'Personalized Support',
    description: 'Talk to a travel specialist for help with your itinerary, questions and planning.',
  },
  {
    title: 'Easy Trip Prep',
    description: 'Simple tools and clear guidance to make planning stress-free and easy to follow.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold">Everything You Need for Your Journey</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 700 }}>
            Travelly brings flight tools, destination guides, and helpful support together in one place, so planning your next trip feels clear, calm, and confident.
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
          <span className="badge section-dark-badge mb-2">Why Choose Us</span>
          <h2 className="h3 fw-bold text-white">Everything designed for a relaxed travel experience</h2>
          <p className="text-white-75 mx-auto" style={{ maxWidth: 640 }}>
            Plan with calm, compare destinations easily, and reach out to our support team whenever you need help.
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
          <h2 className="h3 fw-bold">Popular Flight Routes</h2>
          <p className="text-muted mb-0">Explore domestic USA flight routes and discover useful travel information for your next trip.</p>
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
            <h2 className="h3 fw-bold text-white">A calmer way to plan your trip</h2>
            <p className="text-white-75 mb-0">
              Travelly helps you discover flight options, destination advice, and travel assistance with clarity and ease.
            </p>
          </div>


          {aboutTravellyItems.map((item) => (
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
