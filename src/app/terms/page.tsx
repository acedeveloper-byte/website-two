import { SITE_NAME } from '../../config';

export default function TermsPage() {
  return (
    <section className="container py-5">
      <div className="mb-5">
        <h1 className="fw-bold mb-2">{SITE_NAME} Terms and Conditions</h1>
        <p className="text-muted small">Effective Date: August 13, 2026</p>
      </div>

      <div className="card border-0 rounded-4 shadow-sm p-5">
        <div className="mb-4">
          <p className="text-muted">
            Welcome to <strong>{SITE_NAME}</strong>. These Terms and Conditions govern your access to and use of the {SITE_NAME} website, its content, tools, features, and related services.
          </p>
          <p className="text-muted">
            By accessing or using {SITE_NAME}, you acknowledge that you have read and accepted these Terms and Conditions. If you do not agree with these terms, please discontinue use of the website.
          </p>
        </div>

        <h5 className="fw-semibold mt-4 mb-3">1. About {SITE_NAME}</h5>
        <p className="text-muted">
          {SITE_NAME} provides travel-related information, search tools, destination resources, and other online services. Our website may display information relating to flights, routes, schedules, travel requirements, destinations, and related travel services.
        </p>
        <p className="text-muted mb-4">
          Travel information may be obtained from external sources and may change from time to time. {SITE_NAME} does not control the policies, schedules, fees, availability, operating procedures, or service standards of third-party travel providers.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">2. Acceptance of Terms</h5>
        <p className="text-muted mb-2">By using {SITE_NAME}, you confirm that:</p>
        <ul className="text-muted mb-4">
          <li>You have the legal capacity to use the website.</li>
          <li>Information you provide is accurate and current.</li>
          <li>You will use the website for lawful purposes.</li>
          <li>You will comply with applicable laws and regulations.</li>
          <li>You will not interfere with the security, operation, or functionality of the website.</li>
        </ul>
        <p className="text-muted mb-4">
          If you use {SITE_NAME} on behalf of another person or organization, you confirm that you have the necessary permission to do so.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">3. Website Information</h5>
        <p className="text-muted">
          {SITE_NAME} makes reasonable efforts to provide useful and current travel information. However, travel-related information can change frequently. Flight schedules, fares, taxes, government charges, baggage rules, cancellation conditions, travel requirements, airport information, and other details may change without prior notice.
        </p>
        <p className="text-muted">
          Information presented on {SITE_NAME} is intended for general informational purposes. Users should verify important travel details with the relevant provider or government authority before making travel arrangements.
        </p>
        <p className="text-muted mb-4">
          {SITE_NAME} does not represent that all information displayed on the website will always be complete, current, accurate, or free from errors.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">4. Third-Party Travel Providers</h5>
        <p className="text-muted">
          {SITE_NAME} may display or provide access to services, websites, search results, booking platforms, or other resources operated by third parties. Each third-party provider may have its own terms, policies, conditions, charges, cancellation rules, refund procedures, and privacy practices.
        </p>
        <p className="text-muted">
          Users should review the applicable terms of the relevant provider before completing a transaction. The appearance of a third-party service, provider, brand, or website on {SITE_NAME} does not by itself establish a partnership, endorsement, affiliation, or business relationship.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">5. Bookings and Transactions</h5>
        <p className="text-muted">
          Where a booking, reservation, purchase, or other transaction is completed through a third-party provider, that transaction is governed by the terms and conditions of the relevant provider. The applicable provider is responsible for fulfilling the purchased service and handling matters relating to its service, including schedule changes, cancellations, refunds, baggage policies, passenger requirements, and other service conditions.
        </p>
        <p className="text-muted mb-2">Before completing any transaction, users should carefully review:</p>
        <ul className="text-muted mb-4">
          <li>Passenger names and personal details</li>
          <li>Travel dates</li>
          <li>Departure and arrival locations</li>
          <li>Travel times</li>
          <li>Applicable taxes and charges</li>
          <li>Baggage allowances</li>
          <li>Change conditions</li>
          <li>Cancellation conditions</li>
          <li>Refund conditions</li>
          <li>Any applicable service charges</li>
        </ul>

        <h5 className="fw-semibold mt-4 mb-3">6. Prices, Taxes and Charges</h5>
        <p className="text-muted">
          Travel-related amounts may change due to provider policies, availability, taxes, government charges, currency fluctuations, market conditions, and other factors. Amounts displayed on {SITE_NAME} should be reviewed carefully before completing a transaction.
        </p>
        <p className="text-muted">
          The amount applicable to a completed transaction will be determined according to the terms shown during the relevant transaction and the conditions of the applicable provider.
        </p>
        <p className="text-muted mb-4">
          {SITE_NAME} is not responsible for changes made by external providers to their prices, taxes, charges, or service conditions.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">7. User Responsibilities</h5>
        <p className="text-muted mb-2">You agree to use {SITE_NAME} responsibly and lawfully. You must not:</p>
        <ul className="text-muted mb-4">
          <li>Use the website for fraudulent, deceptive, unlawful, or abusive activities</li>
          <li>Submit false or misleading information</li>
          <li>Attempt to obtain unauthorized access to website systems</li>
          <li>Introduce viruses, malicious code, or harmful material</li>
          <li>Interfere with website security or functionality</li>
          <li>Use automated systems to collect website information without permission</li>
          <li>Reproduce or commercially exploit website content without permission</li>
          <li>Use the website in a way that may harm {SITE_NAME}, its users, or third-party providers</li>
        </ul>

        <h5 className="fw-semibold mt-4 mb-3">8. Travel Documents and Entry Requirements</h5>
        <p className="text-muted">
          Users are responsible for obtaining the documents required for their travel. Depending on the journey, these may include passports, visas, permits, transit documents, identification, health-related documentation, and other required documents.
        </p>
        <p className="text-muted">
          Entry and travel requirements may differ according to nationality, destination, transit location, and travel date.
        </p>
        <p className="text-muted mb-4">
          {SITE_NAME} does not determine immigration, border, or entry requirements. Users should verify current requirements with the relevant government authority before travelling.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">9. Flight Schedule Changes</h5>
        <p className="text-muted">
          Travel schedules may change because of weather, operational circumstances, airport conditions, technical issues, government measures, regulatory requirements, industrial action, or other events. Airlines and other travel providers may modify, delay, cancel, reroute, or otherwise change their services.
        </p>
        <p className="text-muted mb-4">
          Where a third-party provider is responsible for a booking, users should contact that provider regarding available options and applicable procedures.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">10. Cancellation and Refund Conditions</h5>
        <p className="text-muted">
          Cancellation and refund conditions depend on the applicable service, booking, provider, and transaction terms. Certain services may have restrictions, deadlines, deductions, or conditions relating to cancellation or refunds.
        </p>
        <p className="text-muted mb-4">
          Users should review the relevant conditions before completing a transaction. Where a third party processes a refund, the timing, method, and processing procedure will depend on that provider.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">11. Website Availability</h5>
        <p className="text-muted">
          {SITE_NAME} seeks to maintain reliable website access but does not represent that the website will always be available, uninterrupted, or error-free. Website access may be temporarily restricted or suspended because of maintenance, technical issues, security matters, updates, infrastructure problems, or circumstances outside our reasonable control.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">12. Intellectual Property</h5>
        <p className="text-muted">
          Unless otherwise stated, content published on {SITE_NAME}, including text, graphics, logos, designs, layouts, software, photographs, and other materials, is owned by or licensed to {SITE_NAME} and is protected by applicable intellectual-property laws.
        </p>
        <p className="text-muted">
          You may use the website for personal and lawful purposes. You may not copy, reproduce, modify, publish, distribute, sell, license, create derivative works from, or commercially exploit website content without prior written permission, except where permitted by applicable law.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">13. Third-Party Websites and Links</h5>
        <p className="text-muted">
          {SITE_NAME} may contain links to websites, applications, platforms, or services operated by third parties. Such links may be provided for convenience or informational purposes.
        </p>
        <p className="text-muted">
          {SITE_NAME} does not control third-party websites and is not responsible for their content, availability, security, privacy practices, policies, or services. Your use of an external website is subject to the terms and policies applicable to that website.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">14. Privacy</h5>
        <p className="text-muted">
          Your use of {SITE_NAME} may also be subject to our Privacy Policy. The Privacy Policy explains how information may be collected, used, stored, and handled when you use our website or services. Users should review the Privacy Policy before submitting personal information through {SITE_NAME}.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">15. Disclaimer</h5>
        <p className="text-muted">
          To the extent permitted by applicable law, {SITE_NAME} provides its website, content, and informational resources on an <strong>"as available"</strong> basis. We do not represent or warrant that:
        </p>
        <ul className="text-muted mb-4">
          <li>Website information will always be current or complete</li>
          <li>Information obtained from external sources will always remain accurate</li>
          <li>The website will operate without interruption</li>
          <li>Website functions will always be available</li>
          <li>Third-party services will remain available</li>
          <li>Travel schedules will remain unchanged</li>
          <li>Travel requirements will remain unchanged</li>
          <li>Website content will meet every user's individual needs</li>
        </ul>
        <p className="text-muted mb-4">
          Users should independently verify important travel information before relying upon it.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">16. Limitation of Liability</h5>
        <p className="text-muted">
          To the maximum extent permitted by applicable law, {SITE_NAME} will not be liable for indirect, incidental, consequential, special, or similar losses arising from or relating to your use of the website or reliance upon information provided through it.
        </p>
        <p className="text-muted mb-4">
          This may include losses relating to schedule changes, delays, cancellations, missed connections, denied boarding, changes in travel requirements, third-party services, website interruptions, technical problems, or information supplied by external sources. Nothing in these Terms and Conditions excludes or limits liability where such exclusion or limitation is prohibited by applicable law.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">17. Indemnification</h5>
        <p className="text-muted mb-4">
          To the extent permitted by applicable law, you agree to indemnify and hold {SITE_NAME}, its owners, employees, contractors, affiliates, and service providers harmless from claims, losses, liabilities, damages, costs, and expenses arising from:
        </p>
        <ul className="text-muted mb-4">
          <li>Your violation of these Terms and Conditions</li>
          <li>Your unlawful use of the website</li>
          <li>Information or material submitted by you</li>
          <li>Your violation of another person's rights</li>
          <li>Your misuse of third-party services accessed through {SITE_NAME}</li>
        </ul>

        <h5 className="fw-semibold mt-4 mb-3">18. Changes to These Terms</h5>
        <p className="text-muted">
          {SITE_NAME} may revise these Terms and Conditions from time to time. Any revised version may be published on this page with an updated effective date. Your continued use of the website after revised terms become effective constitutes acceptance of those changes.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">19. Suspension or Termination</h5>
        <p className="text-muted">
          {SITE_NAME} may restrict or terminate access to the website where reasonably necessary, including where a user violates these Terms and Conditions, applicable law, or the security or proper operation of the website. Termination will not affect rights or obligations that arose before termination.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">20. Governing Law</h5>
        <p className="text-muted">
          These Terms and Conditions shall be governed by the applicable laws of the jurisdiction in which the operating entity of {SITE_NAME} is established, unless applicable law requires otherwise. Any dispute shall be subject to the jurisdiction of the courts or authorities legally competent to determine the matter.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">21. Severability</h5>
        <p className="text-muted">
          If any provision of these Terms and Conditions is determined to be invalid, unlawful, or unenforceable, that provision shall be interpreted or adjusted to the extent necessary while the remaining provisions continue in effect.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">22. Entire Agreement</h5>
        <p className="text-muted">
          These Terms and Conditions, together with any applicable policies or additional terms displayed on {SITE_NAME}, form the agreement governing your use of the website unless a separate written agreement applies.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">23. Contact Information</h5>
        <p className="text-muted">
          For questions regarding these Terms and Conditions or the use of {SITE_NAME}, please contact us using the contact information published on the website.
        </p>

        <div className="border-top pt-4 mt-5">
          <p className="small text-muted mb-0">
            <strong>Last Updated:</strong> August 13, 2026
          </p>
        </div>
      </div>
    </section>
  );
}
