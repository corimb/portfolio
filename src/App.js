import React, { useState, useEffect } from 'react';

import './styles/App.scss';

import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'
import Contact from './views/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState("black");

  const listenScrollEvent = () => {
    window.scrollY > 750
      ? setHeaderBackgroundColor ("rgba(255, 255, 255, 0.98)")
      : setHeaderBackgroundColor ("black")
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <div className="App">
      <header className="App-header" id="js-header" style={{backgroundColor: headerBackgroundColor}}>
        <Header/>
      </header>
      <main className="main-content">
        <section id="home" className="home">
          <Home/>
        </section>
        <section id="about" className="about">
        <About />
        </section>
        <section id="portfolio" className="portfolio">
        <Portfolio />
        </section>
        <section id="contact" className="contact">
        <Contact />
        </section>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}
export default App;
