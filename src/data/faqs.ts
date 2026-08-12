export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'services',
    question: 'What services does {{SITE_NAME}} provide?',
    answer: 'We provide travel information, flight guidance, destination insights and support for trip planning without booking travel directly.',
  },
  {
    id: 'flight-info',
    question: 'Can I find flight information?',
    answer: 'Yes. You can explore flight options, route information and departure guidance to support your planning process.',
  },
  {
    id: 'destination-info',
    question: 'Can I get destination information?',
    answer: 'Absolutely. We offer destination highlights, local insights and travel considerations for popular cities worldwide.',
  },
  {
    id: 'planning-assistance',
    question: 'Do you provide travel planning assistance?',
    answer: 'Yes. Our platform helps you plan smarter by offering itinerary suggestions, planning resources and travel advice.',
  },
  {
    id: 'representative',
    question: 'Can I speak with a travel representative?',
    answer: 'Yes. Our team is available to offer guidance and answer questions about travel options and planning.',
  },
];
