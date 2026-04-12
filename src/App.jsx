import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Units from './components/Units'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Menu />
        <Units />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
