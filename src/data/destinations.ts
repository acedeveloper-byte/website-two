export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: string;
  description: string;
}

export const destinations: Destination[] = [
  {
    id: 'new-york',
    name: 'New York',
    slug: 'new-york',
    country: 'USA to New York',
    description: 'City breaks, Broadway nights, and nonstop options from major US hubs.',
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    slug: 'los-angeles',
    country: 'USA to Los Angeles',
    description: 'Sun-soaked travel plans with flexible schedules and easy connections.',
  },
  {
    id: 'miami',
    name: 'Miami',
    slug: 'miami',
    country: 'USA to Miami',
    description: 'Warm-weather escapes and quick coastal routes for short getaways.',
  },
  {
    id: 'chicago',
    name: 'Chicago',
    slug: 'chicago',
    country: 'USA to Chicago',
    description: 'Business-friendly, high-demand routes with strong daily flight coverage.',
  },
  {
    id: 'orlando',
    name: 'Orlando',
    slug: 'orlando',
    country: 'USA to Orlando',
    description: 'Family-focused journeys with frequent departures and easy trip planning.',
  },
  {
    id: 'las-vegas',
    name: 'Las Vegas',
    slug: 'las-vegas',
    country: 'USA to Las Vegas',
    description: 'Weekend escapes, entertainment destinations, and quick flight connections.',
  },
  {
    id: 'seattle',
    name: 'Seattle',
    slug: 'seattle',
    country: 'USA to Seattle',
    description: 'Northwest routes with smooth connections for leisure and business travel.',
  },
  {
    id: 'san-diego',
    name: 'San Diego',
    slug: 'san-diego',
    country: 'USA to San Diego',
    description: 'Coastal city trips with laid-back vibes and strong travel availability.',
  },
];
