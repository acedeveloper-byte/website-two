# Standalone Chatbot Package for Next.js

A plug-and-play, ChatGPT-style streaming Chatbot component with full conversation history and floating widget UI for Next.js (App Router).

---

## 📁 Package Structure

```text
chatbot-package/
├── components/
│   ├── Chatbot.tsx              # Core chat logic, streaming consumer & state
│   ├── Chatbot.module.css       # Message bubbles, typing indicator & input styling
│   ├── ChatWidget.tsx           # Floating action button (FAB) + popup window wrapper
│   └── ChatWidget.module.css    # Floating button, mobile drawer & animation styles
├── api/
│   └── chat/
│       └── route.ts             # Next.js API Route (FastAPI backend streamer)
└── README.md                    # Setup & migration instructions
```

---

## 🚀 How to Add to Another Next.js Project

### 1. Copy Files
- Copy `components/Chatbot.tsx`, `components/Chatbot.module.css`, `components/ChatWidget.tsx`, and `components/ChatWidget.module.css` into your project's `src/components/`.
- Copy `api/chat/route.ts` into your project's `src/app/api/chat/route.ts`.

### 2. Configure Environment Variable
In your project's `.env.local`:
```bash
CHAT_API_URL=http://bot.suamglobalventures.com/chat
```

### 3. Install Bootstrap Icons (Optional)
If using Bootstrap Icons (`bi bi-*` classes):
```bash
npm install bootstrap-icons
```
And import in `src/app/layout.tsx` or `src/app/globals.css`:
```typescript
import 'bootstrap-icons/font/bootstrap-icons.css';
```

### 4. Mount in Root Layout
In `src/app/layout.tsx`:
```tsx
import ChatWidget from '@/components/ChatWidget';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
```

---

## ✨ Features Included
- **ChatGPT-Style Streaming**: Real-time letter-by-letter typing animation.
- **Full Conversation History**: Automatically maintains and forwards prior user/assistant conversation turns.
- **Local Persistence**: Automatically restores conversations across page reloads via `localStorage`.
- **Refusal Interception**: Replaces AI phone number refusal messages with *"We have informed our experts regarding that."* and provides a **Continue** button linking to `/contact-us`.
- **Responsive Drawer UI**: Floating widget on desktop and sliding bottom drawer on mobile screens.
