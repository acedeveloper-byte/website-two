'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 120,
    });
  }, []);

  return null;
};

export default AOSProvider;
