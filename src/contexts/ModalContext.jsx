import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider = ({ children }) => {
  const [showReservationModal, setShowReservationModal] = useState(false);

  const openReservationModal = () => {
    setShowReservationModal(true);
  };

  const closeReservationModal = () => {
    setShowReservationModal(false);
  };

  return (
    <ModalContext.Provider value={{
      showReservationModal,
      openReservationModal,
      closeReservationModal
    }}>
      {children}
    </ModalContext.Provider>
  );
};