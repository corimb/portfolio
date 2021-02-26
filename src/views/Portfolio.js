import React from 'react';
import '../styles/Portfolio.scss';
import '../styles/downloadBtn.scss';
import anonymousProxy from '../images/laptop/anonymous-proxy.png';
import rickAndMorty from '../images/laptop/rick-and-morty.png';
import guessTheNumber from '../images/laptop/adivina-el-numero.png';
import searchSerials from '../images/laptop/buscador-de-series.png';
import kardmaCards from '../images/laptop/kardma-cards.png';
import quintetoDeSudo from '../images/laptop/quinteto-de-sudo.png';

import Curriculum from '../download/cv-corina-borcoci.pdf';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);

const Portfolio = () => {
    return(
    <>  
        <hr className="solid"></hr>
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
                <article className="rickAndMorty-project">
                    <img src={rickAndMorty} alt="Rick and Morty project" className="rickAndMorty-photo"></img>
                    <div>
                        <h5>Rick and Morty Character finder</h5>
                        <p>In the main page you can see the list of 20 characters sorted by name and if you click on a character card you will get more details of it. What's your favourite?</p>
                        <p className="tech">ReactJS | React Router | hooks | Api | Javascript</p>
                        <nav className="social-media">
                            <ul>
                                <li><a href="https://github.com/corimb/modulo-3-evaluacion-final-RickandMorty" alt="Rick and Mory github project" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a>
                                </li>
                                <li><a href="https://corimb.github.io/modulo-3-evaluacion-final-RickandMorty/#/" alt="Rick and Morty website" target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </article>
                <article className="searchSerials-project">
                    <img src={searchSerials} alt="Search serials project" className="searchSerials-photo"></img>
                    <div>
                        <h5>Search Serials</h5>
                        <p>This project is a series searcher which allows you to add series to a favorite list, remove them and use the local storage to remeber your preferences.</p>
                        <p className="tech">HTML | SCSS | Flexbox | Grid | Api | Javascript | localStorage</p>
                        <nav className="social-media">
                            <ul>
                                <li><a href="https://github.com/corimb/modulo-2-evaluacion-final-Buscador-de-series" alt="Search Serials github project" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a>
                                </li>
                                <li><a href="https://corimb.github.io/modulo-2-evaluacion-final-Buscador-de-series/" alt="Search Serials website"target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </article>
                <article className="guessTheNumber-project">
                    <img src={guessTheNumber} alt="Guess the number project" className="guessTheNumber-photo"></img>
                    <div>
                        <h5>Guess the number</h5>
                        <p>Random number generator between 1 and 100 with different clues and an attempts counter.</p>
                        <p className="tech">Javascript | Api</p>
                        <nav className="social-media">
                            <ul>
                                <li><a href="https://github.com/corimb/modulo-2-evaluacion-intermedia-Adivina-el-numero" alt="Guess the number github project" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a>
                                </li>
                                <li><a href="https://corimb.github.io/modulo-2-evaluacion-intermedia-Adivina-el-numero/" alt="Guess the number website"target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </article>
                <article className="anonymousProxy-project">
                    <img src={anonymousProxy} alt="anonymous proxy project" className="anonymous-proxy-photo"></img>
                    <div>
                        <h5>Anonymous proxy</h5>
                        <p>The exercise consists of developing a web page according to a design given in Zeplin.</p>
                        <p className="tech">HTML | SCSS | Flexbox | Grid | Zeplin</p>
                        <nav className="social-media">
                            <ul>
                                <li><a href="https://github.com/corimb/modulo-1-evaluacion-final-AnonymousProxy" alt="Anonymous proxy github project" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a>
                                </li>
                                <li><a href="https://corimb.github.io/modulo-1-evaluacion-final-AnonymousProxy/" alt="Anonymous proxy website"target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </article>
                <article className="quintetoDeSudo-project">
                    <img src={quintetoDeSudo} alt="Quinteto de sudo project" className="quintetoDeSudo-photo"></img>
                    <div>
                        <h5>Quinteto de $sudo</h5>
                        <p>In this group website project we present the members of our $ sudo Quintet group to potential clients.</p>
                        <p className="tech">HTML | Sass | Flexbox | Grid | mobile first | transitions | git</p>
                        <nav className="social-media">
                            <ul>
                                <li><a href="https://github.com/corimb/Quinteto-de-sudo" alt="Quinteto de $sudo github project" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a>
                                </li>
                                <li><a href="https://corimb.github.io/Quinteto-de-sudo/" alt="Quinteto de $sudo website"target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </article>
                <article className="kardmaCards-project">
                    <img src={kardmaCards} alt="Kardma Cards project" className="kardmaCards-photo"></img>
                    <div>
                        <h5>KardMA - Card Maker App</h5>
                        <p>Group project. This web application can be used to create business cards interactively and share them on Twitter.</p>
                        <p className="tech">HTML | Sass | Flexbox | Grid | mobile first | git | Javascript | localStorage</p>
                        <nav className="social-media">
                            <ul>
                                <li><a href="https://github.com/corimb/KardMA-Card-Maker-App" alt="KardMA-Card-Maker-App github project" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a>
                                </li>
                                <li><a href="https://corimb.github.io/KardMA-Card-Maker-App/" alt="KardMA - Card Maker App website"target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </article>
            </div>
        </section>
        <nav className="social-media">
            <ul>
              <li><a href="https://github.com/corimb" title="Go to github"target="_blank" rel="noopener noreferrer"><strong>See more projects</strong></a></li>
            </ul>
        </nav>
        <hr className="border-see-more"></hr>
        <section>
                <a href={Curriculum} download="cv_corina_borcoci.pdf" className="download-btn">Cv Corina Borcoci
                    <span className="text--download">Text</span>
                    <span className="flip-front">Download CV</span>
                    <span className="flip-back">Nice to meet U!</span>
                </a>
        </section>
    </>
    
    
    )
}

export default Portfolio;