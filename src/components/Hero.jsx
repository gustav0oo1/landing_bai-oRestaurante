import React from 'react';
import './Hero.css';

const Hero = ({ openReservationModal }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content fade-in">
        <div className="hero-text">
          <span className="hero-tag">BEM-VINDO AO</span>
          <h1 className="hero-title">
            BAIÃO COZINHA NORDESTINA
          </h1>
          <h2 className="hero-subtitle-high">
            O Sabor Autêntico do Nordeste, <span className="text-secondary">Elevado à Perfeição.</span>
          </h2>
          <p className="hero-subtitle">
            Esqueça os clichês. Mergulhe em uma autêntica viagem pelo sertão sem sair de São Paulo. Do bar acolhedor de pau-a-pique aos garçons vestidos à moda de Lampião, cada detalhe reflete nossa cultura.
          </p>
          <div className="hero-ctas">
            <a href="#unidades" className="btn-primary">Reserve sua mesa</a>
            <a href="#cardapio" className="btn-secondary">Ver cardápio</a>
          </div>
        </div>
      </div>
      <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">Unidades</span>
          </div>
        <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">2015</span>
            <span className="stat-label">Desde</span>
          </div>
        <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">SP</span>
            <span className="stat-label">São Paulo</span>
          </div>
        </div>
    </section>
  );
};

export default Hero;
