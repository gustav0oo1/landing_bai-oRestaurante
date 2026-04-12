import React from 'react';
import './ReservationModal.css';

const ReservationModal = ({ isOpen, onClose }) => {
  const units = [
    {
      id: 'pacaembu',
      name: 'Pacaembú',
      address: 'R. Traipu, 91',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5511989404431&text&type=phone_number&app_absent=0'
    },
    {
      id: 'limao',
      name: 'Limão @ctnsp',
      address: 'R. Jacofer, 615',
      whatsapp: 'https://api.whatsapp.com/send?phone=5511952190277&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva!'
    },
    {
      id: 'vilamadalena',
      name: 'Vila Madalena',
      address: 'R. Fradique Coutinho, 888',
      whatsapp: 'https://api.whatsapp.com/send?phone=5511978765102&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h3>Fazer Reserva</h3>
        <p>Selecione a unidade para a qual deseja fazer a reserva:</p>
        <div className="units-list">
          {units.map(unit => (
            <div key={unit.id} className="unit-option">
              <div className="unit-info">
                <h4>{unit.name}</h4>
                <p>{unit.address}</p>
              </div>
              <a
                href={unit.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="reserve-btn"
                onClick={onClose}
              >
                Reservar
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;