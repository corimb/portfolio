import React from 'react';
import '../styles/Home.scss';
import scrollDownButton from '../images/ico-scroll-down.svg';
import corina_home from '../images/corina_home.jpg';
import right_picture from '../images/right-picture.jpg';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);

const Home = () => {

    return(
    <>
    <div className="container-left">
        <img src={corina_home} alt="Corina" className="photo"></img>
        <h2>Hi, my name is Corina Borcoci.</h2>
        <span><em>Front end developer</em></span>
        <div className="home-button">
            <a href="#about" title="Go to About section">
                <img className="scroll--down--button" src={scrollDownButton} alt="scroll down button"></img>
            </a>
        </div>
        <nav className="social-media">
            <ul>
              <li><a href="https://www.linkedin.com/in/corina-mihaela-borcoci/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} size='lg'></FontAwesomeIcon></a></li>
              <li><a href="https://github.com/corimb" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a></li>
            </ul>
        </nav>
    </div>
    <div className="container-right">
        <img src={right_picture} alt="" className="right-picture"></img>
    </div>
    </>)
}

export default Home;