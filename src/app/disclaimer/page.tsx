import { SITE_NAME } from '../../config';

export default function DisclaimerPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Disclaimer</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 760 }}>
          Read the disclaimer that explains the scope of {SITE_NAME}&apos;s travel information and our role as an independent informational platform.
        </p>
      </div>

      <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5">
        <div className="mb-4">
          <p className="lead text-dark fw-medium mb-3">
            Welcome to {SITE_NAME}. This website is intended to provide general travel information, destination resources, route guidance, and educational content to assist visitors in researching and planning travel-related activities.
          </p>
          <p className="text-muted mb-0">
            {SITE_NAME} operates as an independent travel information platform and does not provide airline operations, transportation services, airport management, or governmental travel services. Any information available on this website should be considered general in nature and used for reference purposes only.
          </p>
        </div>

        <hr className="my-4 text-muted opacity-25" />

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h5 className="fw-semibold text-dark mb-2">1. Independent Platform & Business Model</h5>
            <p className="text-muted small">
              {SITE_NAME} is an independent travel information portal. We may earn revenue through advertising, affiliate partnerships, or referral links featured on our platform. We do not issue airline tickets, process reservations, collect payments for travel services, manage bookings, or provide customer support on behalf of any airline or travel provider.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <h5 className="fw-semibold text-dark mb-2">2. Trademark & Brand Asset Disclosure</h5>
            <p className="text-muted small">
              References to airlines, airports, travel providers, destinations, trademarks, logos, and brand names are used solely for informational and identification purposes. All trademarks, service marks, and brand assets remain the property of their respective owners.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <h5 className="fw-semibold text-dark mb-2">3. Information Accuracy & Availability</h5>
            <p className="text-muted small">
              We make reasonable efforts to provide accurate and relevant travel information; however, schedules, routes, travel requirements, destination details, policies, and prices may change without notice. Visitors are encouraged to verify important details directly with service providers, transport companies, or official government sources before making travel arrangements.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <h5 className="fw-semibold text-dark mb-2">4. External Resources & Links</h5>
            <p className="text-muted small">
              This website may contain links to external websites, informational resources, advertisements, or third-party services. These external websites operate independently and maintain their own policies, terms, and privacy practices. We do not control or guarantee the content, accuracy, or availability of third-party websites.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <h5 className="fw-semibold text-dark mb-2">5. User Travel Decisions</h5>
            <p className="text-muted small">
              Any travel plans, purchases, reservations, or decisions made based on information obtained through this website are solely the responsibility of the user. Travelers should independently evaluate information and confirm important details before proceeding with travel arrangements.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <h5 className="fw-semibold text-dark mb-2">6. Advertising & Promotional Content</h5>
            <p className="text-muted small">
              The website may display advertisements, sponsored materials, or promotional content to help support platform operations. The presence of advertising material does not constitute an endorsement or recommendation of any third-party product or service.
            </p>
          </div>

          <div className="col-12">
            <h5 className="fw-semibold text-dark mb-2">7. Limitation of Liability</h5>
            <p className="text-muted small mb-0">
              {SITE_NAME} shall not be responsible for any direct or indirect losses, inconveniences, interruptions, inaccuracies, or damages arising from the use of this website, reliance on its content, or interaction with third-party services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
