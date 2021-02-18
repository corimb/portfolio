import React from 'react';
import anonymousProxy from '../images/anonymous-proxy.png'
import rickAndMorty from '../images/rick and morty.png'
const Portfolio = () => {
    return(
    <>
        <h3>Portfolio</h3>
        <section className="technologies-section">
            <h4>Technologies I work with</h4>
            <p>HTML</p>
            <p>Css</p>
        </section>
        <section className="projects-section">
            <h4>Projects</h4>
            <div className="projects">
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
            </div>
        </section>
        <section className="download-btn">
                <a href="../download/cv-corina-borcoci.pdf" download="cv_corina_borcoci.pdf" className="btn">
                    <span className="text">Text</span>
                    <span className="flip-front">Download CV</span>
                    <span className="flip-back">Nice to meet U!</span>
                </a>
        </section>
    </>
    
    
    )
}

export default Portfolio;