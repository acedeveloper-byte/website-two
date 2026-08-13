
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'what-is-flightagencyhub',
    question: 'What is {{SITE_NAME}}?',
    answer:
      '{{SITE_NAME}} is an independent travel information website that provides general research resources for destinations, route details, and trip planning. We help travelers review general information before making travel arrangements with a provider.'
  },
  {
    id: 'how-can-flightagencyhub-help',
    question: 'How can {{SITE_NAME}} help with my travel plans?',
    answer:
      '{{SITE_NAME}} can help you review route information, compare destination details, and research general travel planning resources before booking with a travel provider.'
  },
  {
    id: 'flight-information',
    question: 'Can I research flights and routes through {{SITE_NAME}}?',
    answer:
      'Yes. You can use {{SITE_NAME}} to research route information, destination details, and general travel planning resources. Flight schedules, fares, and availability may change, so details should be checked directly with the relevant provider before booking.'
  },
  {
    id: 'airline-affiliation',
    question: 'Is {{SITE_NAME}} affiliated with an airline?',
    answer:
      '{{SITE_NAME}} operates independently and is not an airline. Unless specifically stated, we are not owned, operated, or officially endorsed by any airline or carrier.'
  },
  {
    id: 'airline-brands',
    question: 'Why do I see airline names or logos on the website?',
    answer:
      'Airline names, trademarks, logos, and other brand elements belong to their respective owners. They may be referenced on our website to identify airlines, routes, or travel-related information and do not necessarily indicate an affiliation or endorsement.'
  },
  {
    id: 'prices-change',
    question: 'Can flight prices and availability change?',
    answer:
      'Yes. Flight prices, schedules, seat availability, taxes, fees, and other travel details may change at any time based on airline or travel-provider updates. The information displayed during research may therefore differ from information available later.'
  },
  {
    id: 'booking-process',
    question: 'Does {{SITE_NAME}} handle airline bookings directly?',
    answer:
      'No. {{SITE_NAME}} provides general travel information and planning resources. Travel arrangements, booking terms, and provider services are managed by the relevant airline or travel provider. Please review the applicable details before completing a purchase.'
  },
  {
    id: 'booking-details',
    question: 'What should I check before completing a flight booking?',
    answer:
      'Before completing a booking, review the passenger names, travel dates, departure and arrival airports, baggage conditions, fare rules, applicable taxes or fees, cancellation terms, and any other conditions shown during the booking process.'
  },
  {
    id: 'cancellation-refund',
    question: 'What happens if I need to cancel or change my trip?',
    answer:
      'Cancellation and change conditions depend on the fare, airline, travel provider, and applicable booking terms. Check the conditions associated with your booking before requesting a change or cancellation. Any applicable fees or refund conditions will depend on those terms.'
  },
  {
    id: 'travel-requirements',
    question: 'Can {{SITE_NAME}} provide information about travel requirements?',
    answer:
      '{{SITE_NAME}} may provide general travel information and planning resources. Entry rules, visa requirements, passport requirements, health requirements, and other regulations can change, so travelers should verify current requirements with the relevant authorities before departure.'
  },
  {
    id: 'business-travel',
    question: 'Is {{SITE_NAME}} useful for business and leisure travelers?',
    answer:
      'Yes. The platform is intended for travelers with different needs, including leisure trips, business travel, family journeys, and other flight-planning purposes.'
  },
  {
    id: 'support',
    question: 'How can I contact {{SITE_NAME}}?',
    answer:
      'If you have a general question about our website, travel information, or planning resources, please use the contact information provided on the {{SITE_NAME}} website. For booking-specific questions, please contact the airline or travel provider involved in your reservation.'
  },
  {
    id: 'information-accuracy',
    question: 'Why might travel information change after I have viewed it?',
    answer:
      'Travel information can change because airlines and travel providers regularly update schedules, fares, routes, availability, baggage conditions, and other booking details. Always review the latest information presented before making a final travel decision.'
  },
  {
    id: 'personal-information',
    question: 'How is my personal information handled?',
    answer:
      'Personal information is handled according to the applicable privacy policy of {{SITE_NAME}}. Please review the Privacy Policy for information about data collection, use, storage, and your available privacy rights.'
  },
  {
    id: 'independent-platform',
    question: 'Is {{SITE_NAME}} an airline or airport?',
    answer:
      'No. {{SITE_NAME}} is a travel platform and is not an airline, airport, or aircraft operator. Airline and airport services remain the responsibility of the respective providers.'
  }
];

