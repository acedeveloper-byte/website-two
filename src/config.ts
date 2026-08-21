export const SITE_NAME = 'FlightAgencyHub';
export const PHONE_NUMBER = '+18445855025';
export const PHONE_NUMBER_DISPLAY = '+1-844-585-5025';
export const SPAIN_PHONE_NUMBER = '+34900680248';
export const SPAIN_PHONE_NUMBER_DISPLAY = '+34 900 680 248';

// Country-specific support phone numbers
export const COUNTRY_PHONE_NUMBERS = {
  USA: {
    name: 'USA',
    display: '+1-844-585-5025',
    raw: '+18445855025',
  },
  SPAIN: {
    name: 'Spain',
    display: '+34 900 680 248',
    raw: '+34900680248',
  },
  UK: {
    name: 'UK',
    display: '+44-808-175-7391', // Replace with your UK phone number
    raw: '+448081757391',
  },
  AUSTRALIA: {
    name: 'Australia',
    display: '+61-1800-231-285', // Replace with your Australia phone number
    raw: '+611800231285',
  },
  DEFAULT: {
    name: 'Support',
    display: '+1-844-585-5025', // Default fallback number
    raw: '+18445855025',
  },
};
