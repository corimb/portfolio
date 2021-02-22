import React from 'react';
import '../styles/Portfolio.scss';
import '../styles/downloadBtn.scss';
import anonymousProxy from '../images/anonymous-proxy.png'
import rickAndMorty from '../images/rick and morty.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);

const Portfolio = () => {
    return(
    <>
        <h3>Portfolio</h3>
        <h4>Technologies I work with</h4>
        <section className="technologies-section">
            <div>
                <span>HTML |</span>
                <span> Css3 |</span>
                <span> SaSS |</span>
                <span> Flexbox |</span>
                <span> Grid |</span>
                <span> Bootstrap</span>
            </div>
            <div>
                <span>Javascript (ES6) |</span>
                <span> servicios API |</span>
                <span> Git |</span>
                <span> Github</span>
            </div>
            <div>
                <span>React |</span>
                <span> NodeJS |</span>
                <span> ExpressJS</span>
            </div>
            <div>
                <span>Slack |</span>
                <span> Trello |</span>
                <span> Zeplin</span>
            </div>
            <div>
                <span>Agile |</span>
                <span> Scrum</span>
            </div>
        </section>
        <h4>Projects</h4>
        <section className="projects-section">
            <div className="projects">
                <article className="anonymousProxy-project">
                    <a href="https://github.com/Adalab/modulo-1-evaluacion-final-corimb" title="Go to Anonymous proxy project on GitHub" rel="noopener noreferrer" target="_blank" className="anonymous-proxy-url">
                    <img src={anonymousProxy} alt="anonymous proxy project" className="anonymous-proxy-photo"></img>
                    </a>
                </article>
                <article className="rickAndMorty-project">
                    <a href="https://github.com/Adalab/modulo-3-evaluacion-final-corimb" title="Go to Rick and Morty project on GitHub"rel="noopener noreferrer" target="_blank" className="rickAndMorty-url">
                    <img src={rickAndMorty} alt="Rick and Morty project" className="rickAndMorty-photo"></img>
                    </a>
                </article>
            </div>
        </section>
        <section>
                <a href="../download/cv-corina-borcoci.pdf" download="cv_corina_borcoci.pdf" className="download-btn">
                    <span className="text--download">Text</span>
                    <span className="flip-front">Download CV</span>
                    <span className="flip-back">Nice to meet U!</span>
                </a>
        </section>
        <nav className="social-media">
            <ul>
              <li><a href="https://www.linkedin.com/in/corina-mihaela-borcoci/"><FontAwesomeIcon icon={['fab', 'linkedin']} size='lg'></FontAwesomeIcon></a></li>
              <li><a href="https://github.com/corimb"><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a></li>
            </ul>
        </nav>
    </>
    
    
    )
}

export default Portfolio;