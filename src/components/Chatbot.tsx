'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const QUICK_REPLIES = [
  '✈️ Book a flight',
  '🌍 Top destinations',
  '💰 Best deals',
  '📞 Talk to agent',
];

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
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    setShowQuickReplies(false);

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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await response.json();
      console.log(data)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "Sorry, I couldn't process that response. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I couldn't connect to the chat service. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
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
          <p className={styles.welcomeTitle}>Hi there! Welcome to FlightAgencyHub</p>
          <p className={styles.welcomeSubtitle}>
            Ask me about flights, destinations, or travel planning. I&apos;m here to help!
          </p>
        </div>

        {/* Quick reply chips */}
        {showQuickReplies && (
          <div className={styles.quickReplies}>
            {QUICK_REPLIES.map((text) => (
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
            placeholder="Type your message…"
            className={styles.input}
            disabled={isLoading}
            rows={1}
          />
          <button
            id="chat-send-btn"
            onClick={() => sendMessage()}
            disabled={isLoading || !inputValue.trim()}
            className={styles.sendButton}
            aria-label="Send message"
          >
            <i className="bi bi-send-fill" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
