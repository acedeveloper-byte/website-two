'use client';

import { SITE_NAME, PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '../../config';
import { reportPhoneConversion } from '../../utils/gtag';

export default function CancellationRefundPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Cancellation & Refund Policy</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 760 }}>
          Understand the cancellation and refund principles that apply to the travel information and services we provide.
        </p>
      </div>
      <div className="card border-0 rounded-4 shadow-sm p-4">
        <h5 className="fw-semibold">Effective Date: August 13, 2026</h5>
        <p className="text-muted">
          {SITE_NAME} provides travel-related information and booking assistance to help travelers plan and manage their journeys. This Cancellation and Refund Policy explains how cancellation requests, changes, and eligible refunds may be handled when you use our website or services.
        </p>

        <h5 className="fw-semibold">1. General Information</h5>
        <p className="text-muted">
          Cancellation and refund conditions can differ depending on the airline, travel provider, fare type, itinerary, ticket conditions, destination, and the timing of the request.
        </p>
        <p className="text-muted">
          Before completing a booking, travelers should carefully review the applicable fare conditions, cancellation rules, change restrictions, taxes, service charges, and other terms associated with their selected itinerary.
        </p>

        <h5 className="fw-semibold">2. Cancellation Requests</h5>
        <p className="text-muted">
          If you need to cancel a booking, please contact {SITE_NAME} as soon as possible using the contact information provided on our website.
        </p>
        <p className="text-muted">A cancellation request should include:</p>
        <ul className="text-muted">
          <li>Passenger name</li>
          <li>Booking or reservation reference</li>
          <li>Travel dates</li>
          <li>Contact information</li>
          <li>Reason for the cancellation, where applicable</li>
        </ul>
        <p className="text-muted">
          Submitting a cancellation request does not automatically mean that a refund will be issued. The applicable provider&apos;s rules will be reviewed before the request is processed.
        </p>

        <h5 className="fw-semibold">3. Refund Eligibility</h5>
        <p className="text-muted">
          Refund eligibility depends on the terms applicable to the particular booking.
        </p>
        <p className="text-muted">A refund may be affected by:</p>
        <ul className="text-muted">
          <li>The fare conditions attached to the reservation</li>
          <li>The airline or travel provider&apos;s cancellation rules</li>
          <li>The time at which the cancellation is requested</li>
          <li>Taxes and government-imposed charges</li>
          <li>Processing or service charges, where applicable</li>
          <li>Whether the ticket has been partially or fully used</li>
          <li>Whether the itinerary has been changed previously</li>
          <li>Any applicable third-party terms</li>
        </ul>
        <p className="text-muted">
          Where a booking is eligible for a refund, the amount returned may be different from the amount originally paid.
        </p>

        <h5 className="fw-semibold">4. Non-Refundable Reservations</h5>
        <p className="text-muted">
          Some tickets, services, or fare types may have restrictions that prevent a refund after purchase or after a specified period.
        </p>
        <p className="text-muted">
          Where such restrictions apply, {SITE_NAME} will communicate the applicable conditions to the traveler based on the information available for the reservation.
        </p>

        <h5 className="fw-semibold">5. Provider-Initiated Changes or Cancellations</h5>
        <p className="text-muted">
          If an airline or other travel provider cancels, significantly changes, or otherwise disrupts a reservation, the available options will depend on the provider&apos;s applicable rules.
        </p>
        <p className="text-muted">
          Possible options may include rebooking, travel credit, or a refund where permitted by the relevant provider.
        </p>
        <p className="text-muted">
          {SITE_NAME} does not control airline schedules, operational decisions, delays, cancellations, route changes, or other provider actions.
        </p>

        <h5 className="fw-semibold">6. Processing of Eligible Refunds</h5>
        <p className="text-muted">
          Once an eligible refund has been approved, processing may require time because the request can involve communication with an airline or another travel provider.
        </p>
        <p className="text-muted">
          The time required for funds to appear in the original payment method may also depend on the payment provider or financial institution.
        </p>
        <p className="text-muted">
          {SITE_NAME} cannot control processing times imposed by external providers.
        </p>

        <h5 className="fw-semibold">7. Service and Processing Charges</h5>
        <p className="text-muted">
          Certain bookings or requests may involve service, administrative, processing, or other applicable charges.
        </p>
        <p className="text-muted">
          Where such charges apply, the relevant terms will be communicated as part of the booking or service process. Such charges may not be refundable unless the applicable terms specifically provide otherwise.
        </p>

        <h5 className="fw-semibold">8. Changes Instead of Cancellation</h5>
        <p className="text-muted">
          If you no longer wish to travel on the original itinerary, you may be able to request a date, route, or passenger-related change instead of cancellation.
        </p>
        <p className="text-muted">
          Change options and associated costs depend on the applicable provider and reservation conditions. A change request should be submitted before the relevant travel deadline.
        </p>

        <h5 className="fw-semibold">9. Missed Departure and Unused Tickets</h5>
        <p className="text-muted">
          If a traveler does not appear for a scheduled departure without following the applicable cancellation or change procedure, the reservation may be subject to additional restrictions.
        </p>
        <p className="text-muted">
          Any remaining value or refund possibilities will depend on the terms governing that particular ticket or service.
        </p>

        <h5 className="fw-semibold">10. Duplicate or Incorrect Bookings</h5>
        <p className="text-muted">
          If you believe that a reservation was created more than once or contains an error, contact {SITE_NAME} promptly.
        </p>
        <p className="text-muted">
          Do not assume that a duplicate reservation will be automatically cancelled. Each reservation may be governed by separate conditions.
        </p>

        <h5 className="fw-semibold">11. Payment Disputes</h5>
        <p className="text-muted">
          Travelers are encouraged to contact {SITE_NAME} first if they believe a payment, cancellation, or refund has been processed incorrectly.
        </p>
        <p className="text-muted">
          A payment dispute initiated through a bank or payment provider may be handled separately from our internal review process and could affect the time required to resolve the matter.
        </p>

        <h5 className="fw-semibold">12. Third-Party Policies</h5>
        <p className="text-muted">
          {SITE_NAME} may provide information concerning travel services offered by independent airlines, travel providers, payment processors, or other third parties.
        </p>
        <p className="text-muted">
          Those organizations may maintain their own cancellation, refund, payment, and booking policies. Where applicable, those policies may take precedence over general information contained in this document.
        </p>

        <h5 className="fw-semibold">13. Policy Changes</h5>
        <p className="text-muted">
          {SITE_NAME} may update this Cancellation and Refund Policy when necessary to reflect changes in our services, provider requirements, operational procedures, or applicable regulations.
        </p>
        <p className="text-muted">
          The updated version will be published on this website with the revised effective date.
        </p>

        <h5 className="fw-semibold">14. Contact Us</h5>
        <p className="text-muted">
          For questions about a cancellation, booking change, or potential refund, please contact {SITE_NAME} through the contact details provided on our website.
        </p>
        <p className="text-muted">
          When contacting us about an existing reservation, provide your booking reference and passenger details so that the request can be reviewed efficiently.
        </p>

        <h5 className="fw-semibold">15. Important Notice</h5>
        <p className="text-muted">
          {SITE_NAME} is an independent travel website and does not control airline operations, schedules, fare rules, or provider decisions unless expressly stated otherwise.
        </p>
        <p className="text-muted">
          Information concerning a particular reservation is subject to the terms applicable to that reservation at the time of purchase.
        </p>
        <p className="text-muted mb-0">
          Travelers should retain their booking confirmation and review all applicable conditions before requesting a cancellation, change, or refund. For additional assistance, you may contact our travel support line at <a href={`tel:${PHONE_NUMBER}`} onClick={reportPhoneConversion} className="text-decoration-none fw-semibold">{PHONE_NUMBER_DISPLAY}</a>.
        </p>
      </div>
    </section>
  );
}