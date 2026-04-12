import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Observador para o scroll e background da Header
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Observador para descobrir qual section está ativa na tela
    const sections = document.querySelectorAll('section, footer');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -70% 0px'
    });

    sections.forEach(section => {
      if (section.id) observer.observe(section);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        if (section.id) observer.unobserve(section);
      });
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`main-header fade-in ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#hero" className="header-logo" style={{ textDecoration: 'none' }}>
            BAIÃO <span style={{ color: '#E8B84B' }}>COZINHA NORDESTINA</span>
          </a>
          <nav className="header-nav">
            <a href="#sobre" className={activeSection === 'sobre' ? 'active' : ''}>Sobre Nós</a>
            <a href="#cardapio" className={activeSection === 'cardapio' ? 'active' : ''}>Cardápio</a>
            <a href="#unidades" className={activeSection === 'unidades' ? 'active' : ''}>Unidades</a>
            <a href="#faq" className={activeSection === 'faq' ? 'active' : ''}>FAQ</a>
          </nav>
          <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
        <nav className={`nav-mobile ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#sobre" onClick={closeMobileMenu} className={activeSection === 'sobre' ? 'active' : ''}>Sobre Nós</a>
          <a href="#cardapio" onClick={closeMobileMenu} className={activeSection === 'cardapio' ? 'active' : ''}>Cardápio</a>
          <a href="#unidades" onClick={closeMobileMenu} className={activeSection === 'unidades' ? 'active' : ''}>Unidades</a>
          <a href="#faq" onClick={closeMobileMenu} className={activeSection === 'faq' ? 'active' : ''}>FAQ</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
