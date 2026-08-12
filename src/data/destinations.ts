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
    description: 'Domestic flight route from the USA to New York.',
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    slug: 'los-angeles',
    country: 'USA to Los Angeles',
    description: 'Domestic flight route from the USA to Los Angeles.',
  },
  {
    id: 'miami',
    name: 'Miami',
    slug: 'miami',
    country: 'USA to Miami',
    description: 'Domestic flight route from the USA to Miami.',
  },
  {
    id: 'chicago',
    name: 'Chicago',
    slug: 'chicago',
    country: 'USA to Chicago',
    description: 'Domestic flight route from the USA to Chicago.',
  },
  {
    id: 'san-francisco',
    name: 'San Francisco',
    slug: 'san-francisco',
    country: 'USA to San Francisco',
    description: 'Domestic flight route from the USA to San Francisco.',
  },
  {
    id: 'atlanta',
    name: 'Atlanta',
    slug: 'atlanta',
    country: 'USA to Atlanta',
    description: 'Domestic flight route from the USA to Atlanta.',
  },
  {
    id: 'seattle',
    name: 'Seattle',
    slug: 'seattle',
    country: 'USA to Seattle',
    description: 'Domestic flight route from the USA to Seattle.',
  },
  {
    id: 'houston',
    name: 'Houston',
    slug: 'houston',
    country: 'USA to Houston',
    description: 'Domestic flight route from the USA to Houston.',
  },
];
