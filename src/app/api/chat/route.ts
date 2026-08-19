import { NextRequest, NextResponse } from 'next/server';
import { COUNTRY_PHONE_NUMBERS } from '../../../config';

const CHAT_API_URL = 'http://52.22.184.19:8000/chat';

// Keywords related to the travel industry (flights, bookings, refunds, cancellations) & countries
const TRAVEL_AND_COUNTRY_KEYWORDS = [
  'flight',
  'fly',
  'book',
  'booking',
  'refund',
  'cancel',
  'cancellation',
  'ticket',
  'airline',
  'travel',
  'reservation',
  'agent',
  'support',
  'customer service',
  'help',
  'contact',
  'call',
  'change',
  'reschedule',
  'fare',
  'deal',
  'destination',
  'airport',
  'visa',
  'passport',
  'international',
  'domestic',
  'usa',
  'us',
  'america',
  'united states',
  'uk',
  'united kingdom',
  'britain',
  'england',
  'canada',
  'australia',
  'sydney',
  'london',
  'new york',
  'country',
];

/**
 * Detects the specific country referenced in the user inquiry or bot response.
 */
function detectCountryPhone(userMessage: string, botText: string) {
  const combined = ` ${userMessage || ''} ${botText || ''} `.toLowerCase();

  // Check UK
  if (
    combined.includes('uk') ||
    combined.includes('united kingdom') ||
    combined.includes('britain') ||
    combined.includes('england') ||
    combined.includes('london') ||
    combined.includes('manchester') ||
    combined.includes('birmingham')
  ) {
    return COUNTRY_PHONE_NUMBERS.UK;
  }

  // Check Australia
  if (
    combined.includes('australia') ||
    combined.includes('sydney') ||
    combined.includes('melbourne') ||
    combined.includes('brisbane') ||
    combined.includes('perth') ||
    combined.includes('adelaide')
  ) {
    return COUNTRY_PHONE_NUMBERS.AUSTRALIA;
  }

  // Check USA
  if (
    combined.includes('usa') ||
    combined.includes('united states') ||
    combined.includes('america') ||
    combined.includes('new york') ||
    combined.includes('los angeles') ||
    combined.includes('chicago') ||
    combined.includes(' miami ') ||
    combined.includes(' us ')
  ) {
    return COUNTRY_PHONE_NUMBERS.USA;
  }

  // Default fallback
  return COUNTRY_PHONE_NUMBERS.DEFAULT;
}

/**
 * Removes any external phone numbers present in the text and appends the country-specific support phone number.
 */
function sanitizeAndAppendPhoneNumber(text: string, userMessage: string): string {
  if (!text) return text;

  const queryLower = (userMessage || '').toLowerCase();
  const textLower = text.toLowerCase();

  const isTravelOrCountryRelated = TRAVEL_AND_COUNTRY_KEYWORDS.some(
    (keyword) => queryLower.includes(keyword) || textLower.includes(keyword)
  );

  if (!isTravelOrCountryRelated) {
    return text;
  }

  // Select country-specific phone number object
  const countryObj = detectCountryPhone(userMessage, text);

  // Regex to detect and remove phone numbers from external response
  const phoneRegex = /(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\+?\d{9,13}/g;

  // Remove existing phone numbers
  let cleanedText = text.replace(phoneRegex, '').trim();

  // Clean up remaining dangling words/punctuation like "call at ." or extra whitespace
  cleanedText = cleanedText
    .replace(/call\s+(at|on|us at)?\s*([.,!?]|\s*$)/gi, '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?])/g, '$1')
    .trim();

  // Append country-specific phone number if not already present (formatted in bold)
  if (!cleanedText.includes(countryObj.display)) {
    const regionName = countryObj.name === 'Support' ? '' : ` in ${countryObj.name}`;
    cleanedText += `\n\n📞 **For assistance with flights, bookings, cancellations, or refunds${regionName}, please call our team at ${countryObj.display}.**`;
  }

  return cleanedText;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userMessage = body.message || '';

    const response = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { response: 'Sorry, the chat service is temporarily unavailable. Please try again.' },
        { status: 502 }
      );
    }

    const data = await response.json();

    // Extract original bot response text
    const rawReply = data.response || data.reply || data.message || (typeof data === 'string' ? data : '');

    // Sanitize external phone numbers & append country-specific phone number
    const finalReply = sanitizeAndAppendPhoneNumber(rawReply, userMessage);

    return NextResponse.json({
      ...data,
      response: finalReply,
      reply: finalReply,
    });
  } catch (error) {
    console.error('Chat API proxy error:', error);
    return NextResponse.json(
      { response: 'Sorry, could not reach the chat service. Please try again later.' },
      { status: 500 }
    );
  }
}
