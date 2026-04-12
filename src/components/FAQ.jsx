import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "Preciso fazer reserva para ir?",
    answer: "Trabalhamos por ordem de chegada na maior parte do tempo. No entanto, para grupos grandes ou em datas comemorativas, recomendamos que entre em contato conosco antecipadamente."
  },
  {
    question: "Como funciona a experiência temática da casa?",
    answer: "Nossa casa é uma verdadeira imersão. Nossa estrutura lembra um bar de pau-a-pique típico do sertão, os garçons são caracterizados à moda de Lampião, proporcionando um ambiente acolhedor e familiar com o que há de melhor no Nordeste."
  },
  {
    question: "Têm estacionamento no local?",
    answer: "Verifique a disponibilidade de estacionamento conveniado entrando em contato direto com a unidade de interesse. Recomendamos sempre checar antes da sua visita."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section container">
      <div className="faq-header">
        <h2 className="faq-title text-primary">Dúvidas Frequentes</h2>
        <p className="faq-subtitle">Tudo o que você precisa saber antes de nos visitar.</p>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div 
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? '200px' : '0',
                opacity: activeIndex === index ? 1 : 0
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
