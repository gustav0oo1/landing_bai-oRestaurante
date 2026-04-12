import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="sobre" className="about-section container fade-in">
      <div className="about-grid">
        <div className="about-image">
          <img src="img/baiao1.jpg" alt="Ambiente do restaurante Baiao Cozinha Nordestina" />
          <div className="about-image-decoration"></div>
        </div>
        <div className="about-content">
          <h2 className="about-title">A Verdadeira <span className="text-primary">Experiência</span></h2>
          <p className="about-text">
            O <strong>Baiao Cozinha Nordestina</strong> nasceu para ser mais do que um restaurante — somos uma embaixada do Nordeste no formato mais autêntico de São Paulo.
          </p>
          <p className="about-text">
            Nossa estrutura rústica em pau-a-pique foi minuciosamente desenhada para te transportar para o sertão, enquanto nossos garçons, vestidos à moda típica do cangaço, garantem um atendimento com aquela hospitalidade e alegria que só o nordestino tem.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>3</h3>
              <p>Unidades</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Sabor Raiz</p>
            </div>
            <div className="stat-item">
              <h3>+10k</h3>
              <p>Amigos Feitos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
