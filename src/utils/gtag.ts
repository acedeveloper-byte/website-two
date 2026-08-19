'use client';

export const reportPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-18394602086/M1g-CN2wnOQcEOa0ncNE',
    });
  }
};
