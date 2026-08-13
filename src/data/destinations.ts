export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: string;
  description: string;
  origin: string;
  destination: string;
  originAirport: string;
  destinationAirport: string;
  flightDuration: string;
  routeOverview: string;
  planningTips: string[];
  airlines: string[];
}

export const destinations: Destination[] = [
  {
    id: 'dallas-to-new-york',
    name: 'Dallas to New York',
    slug: 'dallas-to-new-york',
    country: 'Dallas to New York',
    description: 'Research route information for flights between Dallas and New York, including airport details, travel timing, and planning considerations.',
    origin: 'Dallas',
    destination: 'New York',
    originAirport: 'Dallas/Fort Worth International Airport (DFW)',
    destinationAirport: 'John F. Kennedy International Airport (JFK)',
    flightDuration: 'Approx. 3 to 4 hours nonstop, depending on routing and weather conditions.',
    routeOverview: 'This route is commonly used for both business and personal travel between Texas and the Northeast. Travelers often compare airport convenience, nonstops, and arrival location when planning a trip.',
    planningTips: [
      'Check airport arrival times and connections before finalizing a trip.',
      'Compare flight times to match business schedules or weekend travel plans.',
      'Review baggage, change, and fare rules with the airline or travel provider before booking.'
    ],
    airlines: ['American Airlines', 'Delta Air Lines', 'United Airlines']
  },
  {
    id: 'los-angeles-to-new-york',
    name: 'Los Angeles to New York',
    slug: 'los-angeles-to-new-york',
    country: 'Los Angeles to New York',
    description: 'Research long-haul route information between Los Angeles and New York, including airport choices and travel planning notes.',
    origin: 'Los Angeles',
    destination: 'New York',
    originAirport: 'Los Angeles International Airport (LAX)',
    destinationAirport: 'John F. Kennedy International Airport (JFK)',
    flightDuration: 'Approx. 5 to 7 hours nonstop, depending on route and wind conditions.',
    routeOverview: 'This route is one of the busiest domestic transcontinental corridors in the United States. It often attracts travelers balancing cost, schedule, and airport convenience.',
    planningTips: [
      'Check whether a nonstop or one-stop itinerary works better for your trip timing.',
      'Review which airport is best for your destination in New York before booking.',
      'Confirm current schedule updates and travel requirements with the airline before departure.'
    ],
    airlines: ['American Airlines', 'JetBlue', 'Delta Air Lines', 'United Airlines']
  },
  {
    id: 'chicago-to-miami',
    name: 'Chicago to Miami',
    slug: 'chicago-to-miami',
    country: 'Chicago to Miami',
    description: 'Explore travel information for the Chicago to Miami route, including airport and seasonal planning details.',
    origin: 'Chicago',
    destination: 'Miami',
    originAirport: 'Chicago O’Hare International Airport (ORD)',
    destinationAirport: 'Miami International Airport (MIA)',
    flightDuration: 'Approx. 3 hours nonstop, though schedules and connection times vary.',
    routeOverview: 'This route connects a major Midwest hub with a popular warm-weather destination. It is commonly used for leisure travel, business trips, and quick seasonal escapes.',
    planningTips: [
      'Check seasonality because travel demand can fluctuate significantly in winter and summer.',
      'Review airport-to-hotel transfer planning if arriving for a short trip.',
      'Verify baggage and fare rules before making final travel choices.'
    ],
    airlines: ['American Airlines', 'United Airlines', 'Delta Air Lines']
  },
  {
    id: 'miami-to-new-york',
    name: 'Miami to New York',
    slug: 'miami-to-new-york',
    country: 'Miami to New York',
    description: 'Research the Miami to New York route for airport comparisons, connection choices, and trip-planning considerations.',
    origin: 'Miami',
    destination: 'New York',
    originAirport: 'Miami International Airport (MIA)',
    destinationAirport: 'LaGuardia Airport (LGA)',
    flightDuration: 'Approx. 3 to 4 hours nonstop, depending on route and weather conditions.',
    routeOverview: 'This corridor is heavily used for both leisure and business travel. Timing, airport choice, and connecting routes can vary widely across the year.',
    planningTips: [
      'Compare arrival airports in the New York area before finalizing your travel plans.',
      'Review if a midday or evening departure better matches your schedule.',
      'Check destination transit options for the final leg of the trip.'
    ],
    airlines: ['American Airlines', 'Delta Air Lines', 'JetBlue']
  },
  {
    id: 'atlanta-to-orlando',
    name: 'Atlanta to Orlando',
    slug: 'atlanta-to-orlando',
    country: 'Atlanta to Orlando',
    description: 'Study the Atlanta to Orlando route for quick getaway planning, airport details, and travel considerations.',
    origin: 'Atlanta',
    destination: 'Orlando',
    originAirport: 'Hartsfield-Jackson Atlanta International Airport (ATL)',
    destinationAirport: 'Orlando International Airport (MCO)',
    flightDuration: 'Approx. 1.5 to 2 hours nonstop.',
    routeOverview: 'This route is tightly linked to leisure travel and weekend trips. It is often chosen for convenience, schedule flexibility, and shorter travel time.',
    planningTips: [
      'Review whether a morning or evening departure works best for your itinerary.',
      'Be aware that travel demand can increase around holidays and school breaks.',
      'Check transportation options from the airport to your final destination.'
    ],
    airlines: ['Delta Air Lines', 'Southwest Airlines', 'American Airlines']
  },
  {
    id: 'los-angeles-to-las-vegas',
    name: 'Los Angeles to Las Vegas',
    slug: 'los-angeles-to-las-vegas',
    country: 'Los Angeles to Las Vegas',
    description: 'Research key route details between Los Angeles and Las Vegas, including airport notes and trip-planning considerations.',
    origin: 'Los Angeles',
    destination: 'Las Vegas',
    originAirport: 'Los Angeles International Airport (LAX)',
    destinationAirport: 'Harry Reid International Airport (LAS)',
    flightDuration: 'Approx. 1 to 2 hours nonstop.',
    routeOverview: 'This route is popular for both quick leisure trips and event-driven travel. Schedule frequency and airport convenience are important factors for travelers.',
    planningTips: [
      'Compare airport and hotel transfer timing for shorter trips.',
      'Check if the route is being used for weekend travel or event traffic.',
      'Confirm baggage rules and timing changes before departure.'
    ],
    airlines: ['Allegiant', 'Delta Air Lines', 'American Airlines', 'United Airlines']
  }
];
