import { NextRequest, NextResponse } from 'next/server';

const CHAT_API_URL = process.env.CHAT_API_URL || 'http://bot.suamglobalventures.com/chat';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userMessage = body.message || '';
    const history = body.history || [];

    const response = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage, history }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { response: 'Sorry, the chat service is temporarily unavailable. Please try again.' },
        { status: 502 }
      );
    }

    // Read response text (handles both streaming chunks & full text responses from upstream)
    let rawReply = '';
    if (response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          rawReply += decoder.decode(value, { stream: !done });
        }
      }
    } else {
      rawReply = await response.text();
    }

    try {
      const parsed = JSON.parse(rawReply);
      if (typeof parsed === 'string') {
        rawReply = parsed;
      } else if (typeof parsed === 'object' && parsed !== null) {
        const data = parsed as Record<string, unknown>;
        rawReply =
          (data.response as string) ||
          (data.reply as string) ||
          (data.message as string) ||
          (data.text as string) ||
          rawReply;
      }
    } catch {
      // Keep rawReply as is if it's plain text
    }

    const finalReply = rawReply;

    // Return a ReadableStream so the client receives the response streamed letter-by-letter (ChatGPT style)
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const chunkSize = 2; // Stream 2 characters per tick for smooth typing effect
        for (let i = 0; i < finalReply.length; i += chunkSize) {
          const chunk = finalReply.slice(i, i + chunkSize);
          controller.enqueue(encoder.encode(chunk));
          await new Promise((resolve) => setTimeout(resolve, 10)); // 10ms micro-delay
        }
        controller.close();
      },
    });

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API proxy error:', error);
    return NextResponse.json(
      { response: 'Sorry, could not reach the chat service. Please try again later.' },
      { status: 500 }
    );
  }
}
