import { NextRequest, NextResponse } from 'next/server';

const CHAT_API_URL = 'http://52.22.184.19:8000/chat';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: body.message }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { reply: 'Sorry, the chat service is temporarily unavailable. Please try again.' },
        { status: 502 }
      );
    }

    const data = await response.json();

    // External API returns { response: "..." }, map to { reply: "..." } for frontend
    return NextResponse.json({ reply: data.response || data.reply || data.message });
  } catch (error) {
    console.error('Chat API proxy error:', error);
    return NextResponse.json(
      { reply: 'Sorry, could not reach the chat service. Please try again later.' },
      { status: 500 }
    );
  }
}
