'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Chatbot.module.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  showContinue?: boolean;
}

interface HistoryItem {
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_REPLIES = [
  '✈️ Book a flight',
  '🌍 Top destinations',
  '💰 Best deals',
  '📞 Talk to agent',
];

const isRefusalResponse = (text: string): boolean => {
  const lower = text.toLowerCase();
  return (
    lower.includes("can't provide") ||
    lower.includes("cannot provide") ||
    lower.includes("visiting their official website") ||
    lower.includes("official website") ||
    lower.includes("customer support form") ||
    lower.includes("expedia's phone number") ||
    lower.includes("expedia number")
  );
};

const renderFormattedMessage = (text: string) => {
  if (!text) return null;

  // Format inline lists (e.g., " 1. ", " 2. ") onto new paragraph breaks
  const normalizedText = text.replace(/ (\d+\.\s+)/g, '\n\n$1');
  const paragraphs = normalizedText.split(/\n+/);

  return paragraphs.map((paragraph, pIdx) => {
    const trimmed = paragraph.trim();
    if (!trimmed) return null;

    // Parse **bold** tags cleanly without leaving raw asterisks
    const parts: (string | React.ReactNode)[] = [];
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = boldRegex.exec(trimmed)) !== null) {
      if (match.index > lastIndex) {
        parts.push(trimmed.slice(lastIndex, match.index));
      }
      parts.push(<strong key={match.index}>{match[1]}</strong>);
      lastIndex = boldRegex.lastIndex;
    }

    if (lastIndex < trimmed.length) {
      parts.push(trimmed.slice(lastIndex));
    }

    return (
      <p key={pIdx} className={styles.messageText}>
        {parts}
      </p>
    );
  });
};

const Chatbot = () => {
  const router = useRouter();
  const isSpanishAssistancePage = usePathname() === '/asistencia-reserva-vuelos-espana';
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Restore conversation history from localStorage on component mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('chat_messages');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const formatted = parsed.map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp),
          }));
          setMessages(formatted);
          setShowQuickReplies(false);
        }
      }
    } catch (e) {
      console.error('Failed to load chat history from localStorage', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Persist conversation history to localStorage on message updates
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('chat_messages', JSON.stringify(messages));
      } catch (e) {
        console.error('Failed to save chat history to localStorage', e);
      }
    }
  }, [messages, isLoaded]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const clearHistory = () => {
    setMessages([]);
    setShowQuickReplies(true);
    try {
      localStorage.removeItem('chat_messages');
    } catch (e) {
      console.error('Failed to clear chat history', e);
    }
  };

  const sendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText || isLoading) return;

    setShowQuickReplies(false);

    // 1. Build conversation history from existing valid messages prior to current turn
    const history: HistoryItem[] = messages
      .filter((m) => m.text.trim() !== '' && !m.text.startsWith("Sorry, I couldn't"))
      .map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));

    // 2. Append current user message to conversation state
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // 3. Send current message AND full prior history to API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.text,
          history: history,
        }),
      });

      if (!response.ok) {
        let errorText = "Sorry, I couldn't process that response. Please try again.";
        try {
          const errJson = await response.json();
          if (errJson.response) errorText = errJson.response;
        } catch {
          // ignore
        }
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            text: errorText,
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        return;
      }

      if (!response.body) {
        throw new Error('No response stream');
      }

      const botMessageId = (Date.now() + 1).toString();
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumText = '';
      let isFirstChunk = true;

      // 4. Stream response and update assistant message in state in real-time
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumText += chunk;

        if (isFirstChunk) {
          isFirstChunk = false;
          setIsLoading(false);
          setMessages((prev) => [
            ...prev,
            {
              id: botMessageId,
              text: accumText,
              sender: 'bot',
              timestamp: new Date(),
            },
          ]);
        } else {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId ? { ...msg, text: accumText } : msg
            )
          );
        }
      }

      if (!accumText) {
        setMessages((prev) => [
          ...prev,
          {
            id: botMessageId,
            text: "Sorry, I couldn't process that response. Please try again.",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
      } else if (isRefusalResponse(accumText)) {
        // If AI refused to give phone number / suggested official website, replace with expert confirmation & continue button
        const transformedText = "We have informed our experts regarding that.";
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId
              ? { ...msg, text: transformedText, showContinue: true }
              : msg
          )
        );
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Sorry, I couldn't connect to the chat service. Please try again later.",
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesArea}>
        {/* Welcome card (always visible at top) */}
        <div className={styles.welcomeCard}>
          <div className={styles.welcomeEmoji}>👋</div>
          <p className={styles.welcomeTitle}>{isSpanishAssistancePage ? '¡Hola! Bienvenido a FlightAgencyHub' : 'Hi there! Welcome to FlightAgencyHub'}</p>
          <p className={styles.welcomeSubtitle}>
            {isSpanishAssistancePage
              ? 'Pregúntame sobre vuelos, destinos o planificación de viajes. ¡Estoy aquí para ayudarte!'
              : 'Ask me about flights, destinations, or travel planning. I&apos;m here to help!'}
          </p>
          {messages.length > 0 && (
            <button
              onClick={clearHistory}
              style={{
                marginTop: '8px',
                fontSize: '0.8rem',
                opacity: 0.8,
                cursor: 'pointer',
                background: 'transparent',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '2px 8px',
              }}
            >
              Clear Chat History
            </button>
          )}
        </div>

        {/* Quick reply chips */}
        {showQuickReplies && (
          <div className={styles.quickReplies}>
              {(isSpanishAssistancePage
                ? ['✈️ Reservar un vuelo', '🌍 Mejores destinos', '💰 Mejores ofertas', '📞 Hablar con un asesor']
                : QUICK_REPLIES).map((text) => (
              <button
                key={text}
                className={styles.quickReplyBtn}
                onClick={() => sendMessage(text)}
              >
                {text}
              </button>
            ))}
          </div>
        )}

        {/* Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${message.sender === 'user' ? styles.userMessage : styles.botMessage
              }`}
          >
            {message.sender === 'bot' && (
              <div className={styles.botAvatar}>
                <i className="bi bi-headset" />
              </div>
            )}
            <div className={styles.messageBubble}>
              {renderFormattedMessage(message.text)}
              {message.showContinue && (
                <div>
                  <button
                    className={styles.continueButton}
                    onClick={() => router.push('/contact-us')}
                  >
                    {isSpanishAssistancePage ? 'Continuar' : 'Continue'} &rarr;
                  </button>
                </div>
              )}
              <small className={styles.timestamp}>
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </small>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className={`${styles.message} ${styles.botMessage}`}>
            <div className={styles.botAvatar}>
              <i className="bi bi-headset" />
            </div>
            <div className={styles.messageBubble}>
              <div className={styles.typingIndicator}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className={styles.inputArea}>
        <div className={styles.inputGroup}>
          <textarea
            id="chat-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isSpanishAssistancePage ? 'Escribe tu mensaje…' : 'Type your message…'}
            className={styles.input}
            disabled={isLoading}
            rows={1}
          />
          <button
            id="chat-send-btn"
            onClick={() => sendMessage()}
            disabled={isLoading || !inputValue.trim()}
            className={styles.sendButton}
            aria-label={isSpanishAssistancePage ? 'Enviar mensaje' : 'Send message'}
          >
            <i className="bi bi-send-fill" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
