import React from 'react';
import anonymousProxy from '../images/anonymous-proxy.png'
import rickAndMorty from '../images/rick and morty.png'
const Portfolio = () => {
    return(
    <section className="portfolio-section">
        <article className="anonymousProxy-project">
            <a href="https://github.com/Adalab/modulo-1-evaluacion-final-corimb" title="Go to Anonymous proxy project on GitHub" rel="noopener noreferrer" target="_blank" className="anonymous-proxy-url">
            <span className="text">HTML & CSS</span>
            <img src={anonymousProxy} alt="anonymous proxy project" className="anonymous-proxy-photo"></img>
            </a>
        </article>
        <article className="rickAndMorty-project">
            <a href="https://github.com/Adalab/modulo-3-evaluacion-final-corimb" title="Go to Rick and Morty project on GitHub"rel="noopener noreferrer" target="_blank" className="rickAndMorty-url">
            <span className="text">React Js</span>
            <img src={rickAndMorty} alt="Rick and Morty project" className="rickAndMorty-photo"></img>
            </a>
        </article>
    </section>
    
    
    )
}

export default Portfolio;