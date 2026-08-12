'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

const FlightSearch = () => {
  const [tripType, setTripType] = useState<'oneWay' | 'twoWay'>('oneWay');
  const [formState, setFormState] = useState({
    from: '',
    to: '',
    departure: '',
    returning: '',
  });
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  const [ticketClass, setTicketClass] = useState('Economy');
  const [passengerPanelOpen, setPassengerPanelOpen] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const updatePassenger = (type: 'adults' | 'children' | 'infants', delta: number) => {
    setPassengers((prev) => {
      const nextValue = Math.max(0, prev[type] + delta);
      if (type === 'adults') {
        return { ...prev, adults: Math.max(1, nextValue) };
      }
      return { ...prev, [type]: nextValue };
    });
  };

  const handleTripType = (type: 'oneWay' | 'twoWay') => {
    setTripType(type);
    if (type === 'oneWay') {
      setFormState((prev) => ({ ...prev, returning: '' }));
    }
  };

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;
  const passengerSummary = `${totalPassengers} Pax${totalPassengers === 1 ? '' : 's'} – ${ticketClass}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: string[] = [];

    if (!formState.from.trim()) {
      newErrors.push('Please enter a departure city or airport.');
    }
    if (!formState.to.trim()) {
      newErrors.push('Please enter a destination city or airport.');
    }
    if (!formState.departure.trim()) {
      newErrors.push('Please select a departure date.');
    }
    if (tripType === 'twoWay' && !formState.returning.trim()) {
      newErrors.push('Please select a return date for a two-way trip.');
    }

    setErrors(newErrors);
    setSubmitted(true);
  };

  return (
    <section className="fare-eazy-search-card-wrapper">
      <div className="fare-eazy-search-card">
        <div className="fare-eazy-trip-type mb-4">
          <button
            type="button"
            className={`fare-eazy-trip-button ${tripType === 'oneWay' ? 'fare-eazy-trip-button-active' : ''}`}
            onClick={() => handleTripType('oneWay')}
          >
            One Way
          </button>
          <button
            type="button"
            className={`fare-eazy-trip-button ${tripType === 'twoWay' ? 'fare-eazy-trip-button-active' : ''}`}
            onClick={() => handleTripType('twoWay')}
          >
            Round Trip
          </button>
        </div>

        <form onSubmit={handleSubmit} className="fare-eazy-search-grid">
          <div className="fare-eazy-field">
            <label htmlFor="from">Leaving From</label>
            <div className="fare-eazy-input-wrap">
              <input
                id="from"
                name="from"
                type="text"
                value={formState.from}
                onChange={handleChange}
                placeholder="From"
              />
            </div>
          </div>

          <div className="fare-eazy-field">
            <label htmlFor="to">Going To</label>
            <div className="fare-eazy-input-wrap">
              <input
                id="to"
                name="to"
                type="text"
                value={formState.to}
                onChange={handleChange}
                placeholder="To"
              />
            </div>
          </div>

          <div className="fare-eazy-field">
            <label htmlFor="departure">Departure Date</label>
            <div className="fare-eazy-input-wrap">
              <input
                id="departure"
                name="departure"
                type="date"
                value={formState.departure}
                onChange={handleChange}
              />
            </div>
          </div>

            <div className="fare-eazy-field">
              <label htmlFor="returning">Return Date</label>
              <div className="fare-eazy-input-wrap">
                <input
                  id="returning"
                  name="returning"
                  type="date"
                  disabled={tripType === 'oneWay' ? true : false}
                  value={formState.returning}
                  onChange={handleChange}
                />
              </div>
            </div>

          <div className="fare-eazy-field fare-eazy-passenger-field">
            <label htmlFor="travelers">Passenger & Class</label>
            <div className="fare-eazy-input-wrap">
              <button
                type="button"
                className="fare-eazy-passenger-toggle"
                onClick={() => setPassengerPanelOpen((prev) => !prev)}
              >
                {passengerSummary}
              </button>
            </div>
            {passengerPanelOpen && (
              <div className="fare-eazy-passenger-panel">
                <div className="fare-eazy-passenger-row">
                  <div>
                    <span className="fare-eazy-passenger-label">Adults</span>
                    <small className="fare-eazy-passenger-hint">(12y +)</small>
                  </div>
                  <div className="fare-eazy-counter">
                    <button type="button" onClick={() => updatePassenger('adults', -1)}>-</button>
                    <span>{passengers.adults}</span>
                    <button type="button" onClick={() => updatePassenger('adults', 1)}>+</button>
                  </div>
                </div>
                <div className="fare-eazy-passenger-row">
                  <div>
                    <span className="fare-eazy-passenger-label">Children</span>
                    <small className="fare-eazy-passenger-hint">(2y - 12y)</small>
                  </div>
                  <div className="fare-eazy-counter">
                    <button type="button" onClick={() => updatePassenger('children', -1)}>-</button>
                    <span>{passengers.children}</span>
                    <button type="button" onClick={() => updatePassenger('children', 1)}>+</button>
                  </div>
                </div>
                <div className="fare-eazy-passenger-row">
                  <div>
                    <span className="fare-eazy-passenger-label">Infants</span>
                    <small className="fare-eazy-passenger-hint">(Below 2y)</small>
                  </div>
                  <div className="fare-eazy-counter">
                    <button type="button" onClick={() => updatePassenger('infants', -1)}>-</button>
                    <span>{passengers.infants}</span>
                    <button type="button" onClick={() => updatePassenger('infants', 1)}>+</button>
                  </div>
                </div>
                <div className="fare-eazy-passenger-row fare-eazy-class-row">
                  <label htmlFor="travel-class">Choose Travel Class</label>
                  <select
                    id="travel-class"
                    value={ticketClass}
                    onChange={(event) => setTicketClass(event.target.value)}
                  >
                    <option value="eco">Economy</option>
                    <option value="prem">Premium Economy</option>
                    <option value="bus">Business</option>
                    <option value="first">First Class</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="fare-eazy-passenger-confirm"
                  onClick={() => setPassengerPanelOpen(false)}
                >
                  Confirm
                </button>
              </div>
            )}
          </div>

          <div className="fare-eazy-field fare-eazy-action-field">
            <button type="submit" className="fare-eazy-submit-button">
              Search flights
            </button>
          </div>
        </form>

        {submitted && errors.length > 0 && (
          <div className="fare-eazy-error-panel">
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default FlightSearch;
