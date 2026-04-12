import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="unidades" className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">Baiao Cozinha Nordestina</h2>
            <p className="footer-description">A verdadeira experiência nordestina, mais perto de você em São Paulo.</p>
          </div>

          <div className="footer-units">
            <h3 className="footer-heading">Nossas Unidades</h3>
            <div className="unit-list">
              <div className="unit-item">
                <h4>Pacaembú</h4>
                <p>R. Traipu, 91</p>
                <a href="https://maps.google.com/?q=R.+Traipu,+91" target="_blank" rel="noopener noreferrer" className="map-link">Ver no mapa</a>
                <a href="https://api.whatsapp.com/send/?phone=5511989404431&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="whatsapp-link">WhatsApp</a>
              </div>
              <div className="unit-item">
                <h4>Limão @ctnsp</h4>
                <p>R. Jacofer, 615</p>
                <a href="https://maps.google.com/?q=R.+Jacofer,+615" target="_blank" rel="noopener noreferrer" className="map-link">Ver no mapa</a>
                <a href="https://api.whatsapp.com/send?phone=5511952190277&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva!" target="_blank" rel="noopener noreferrer" className="whatsapp-link">WhatsApp</a>
              </div>
              <div className="unit-item">
                <h4>Vila Madalena</h4>
                <p>R. Fradique Coutinho, 888</p>
                <a href="https://maps.google.com/?q=R.+Fradique+Coutinho,+888" target="_blank" rel="noopener noreferrer" className="map-link">Ver no mapa</a>
                <a href="https://api.whatsapp.com/send?phone=5511978765102&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva" target="_blank" rel="noopener noreferrer" className="whatsapp-link">WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h3 className="footer-heading">Acompanhe</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/baiaocozinhanordestina/" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Baiao Cozinha Nordestina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
