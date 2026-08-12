'use client'
import { useState } from 'react';
import { faqs, FAQItem } from '../data/faqs';
import { SITE_NAME } from '../config';

const FAQ = () => {
  const [activeId, setActiveId] = useState<string>(faqs[0]?.id ?? '');

  return (
    <section className="container py-5" data-aos="fade-up">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h2 className="h4 fw-bold mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((item: FAQItem) => {
              const expanded = activeId === item.id;
              return (
                <div className="accordion-item" key={item.id}>
                  <h2 className="accordion-header" id={`heading-${item.id}`}>
                    <button
                      className={`accordion-button ${!expanded ? 'collapsed' : ''}`}
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`collapse-${item.id}`}
                      onClick={() => setActiveId(expanded ? '' : item.id)}
                    >
                      {item.question.replace(/{{SITE_NAME}}/g, SITE_NAME)}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${item.id}`}
                    className={`accordion-collapse collapse ${expanded ? 'show' : ''}`}
                    aria-labelledby={`heading-${item.id}`}
                  >
                    <div className="accordion-body faq-answer">{item.answer.replace(/{{SITE_NAME}}/g, SITE_NAME)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
