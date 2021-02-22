import React from 'react-router-dom';

import './styles/App.scss';

import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'
import Contact from './views/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header" id="js-header">
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
