export interface TravelGuide {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

export const travelGuides: TravelGuide[] = [
  {
    id: 'plan-next-flight',
    slug: 'plan-next-flight',
    category: 'Planning',
    title: 'How to Plan Your Next Flight',
    description: 'A modern guide to preparing for your upcoming trip with clarity and confidence.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'international-travel',
    slug: 'international-travel',
    category: 'International',
    title: 'International Travel Planning Guide',
    description: 'Practical steps for planning international travel and staying prepared for every stage of your journey.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'flight-tips',
    slug: 'flight-tips',
    category: 'Tips',
    title: 'Things to Know Before Your Flight',
    description: 'Key considerations to help make your departure and arrival experience smoother.',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'stress-free-trip',
    slug: 'stress-free-trip',
    category: 'Wellness',
    title: 'How to Plan a Stress-Free Trip',
    description: 'A resource for thoughtful travel preparation and calmer journey planning.',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
  },
];
