'use client';

import { useState } from 'react';
import Chatbot from './Chatbot';
import styles from './ChatWidget.module.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ── Floating Action Button ──────────────────── */}
      {!isOpen && (
        <button
          id="chat-fab"
          onClick={() => setIsOpen(true)}
          className={styles.floatingButton}
          aria-label="Open chat"
          title="Chat with us"
        >
          <i className="bi bi-chat-dots-fill" />
          <span className={styles.badge}>1</span>
        </button>
      )}

      {/* ── Chat Window ─────────────────────────────── */}
      {isOpen && (
        <div className={styles.chatWindow} role="dialog" aria-label="Chat assistant">
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.avatarRing}>
                <i className="bi bi-headset" />
              </div>
              <div className={styles.headerInfo}>
                <span className={styles.title}>Travel Assistant</span>
                <div className={styles.statusRow}>
                  <span className={styles.statusDot} />
                  <span className={styles.statusText}>Online · Typically replies instantly</span>
                </div>
              </div>
            </div>
            <button
              id="chat-close-btn"
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
              aria-label="Close chat"
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>

          {/* Messages area */}
          <div className={styles.chatContent}>
            <Chatbot />
          </div>

          {/* Footer branding */}
          <div className={styles.poweredBy}>
            Powered by <strong>FlightAgencyHub</strong>
          </div>
        </div>
      )}

      {/* ── Mobile backdrop ─────────────────────────── */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default ChatWidget;
