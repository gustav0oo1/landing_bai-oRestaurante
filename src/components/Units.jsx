import React from 'react';
import './Units.css';

const unitsData = [
  {
    id: 'vilamadalena',
    name: 'Vila Madalena',
    address: 'R. Fradique Coutinho, 888',
    image: '/img/unidade madalena.jpg', // Esta imagem precisará ser adicionada ao projeto
    mapUrl: 'https://maps.google.com/?q=R.+Fradique+Coutinho,+888',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511978765102&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva'
  },
  {
    id: 'pacaembu',
    name: 'Pacaembú',
    address: 'R. Traipu, 91',
    image: '/img/unidade pacaembu.webp', // Esta imagem precisará ser adicionada ao projeto
    mapUrl: 'https://maps.google.com/?q=R.+Traipu,+91',
    whatsapp: 'https://api.whatsapp.com/send/?phone=5511989404431&text&type=phone_number&app_absent=0'
  },
  {
    id: 'limao',
    name: 'Limão @ctnsp',
    address: 'R. Jacofer, 615',
    image: '/img/unidade ctn.webp', // Esta imagem precisará ser adicionada ao projeto
    mapUrl: 'https://maps.google.com/?q=R.+Jacofer,+615',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511952190277&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva!'
  }
];

const Units = () => {
  return (
    <section id="unidades" className="units-section container">
      <div className="section-header">
        <h2 className="units-title">Nossas Unidades</h2>
        <p className="units-subtitle">Conheça nossos restaurantes espalhados por São Paulo</p>
      </div>
      <div className="units-grid">
        {unitsData.map(unit => (
          <div key={unit.id} className="unit-card">
            <div className="unit-image-container">
              <img
                src={unit.image}
                alt={`Restaurante Baiao Cozinha Nordestina - ${unit.name}`}
                className="unit-image"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(unit.name)}`;
                  e.target.alt = `Localização do restaurante Baiao Cozinha Nordestina - ${unit.name}`;
                }}
              />
            </div>
            <div className="unit-info">
              <h3 className="unit-name">{unit.name}</h3>
              <p className="unit-address">{unit.address}</p>
              <div className="unit-actions">
                <a
                  href={unit.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Ver no mapa
                </a>
                <a
                  href={unit.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  Fazer reserva
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Units;