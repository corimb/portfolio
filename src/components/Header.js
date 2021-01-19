import { Link } from 'react-router-dom';
import React from 'react';

import '../App.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);

const Header = () => {
    return( 
    <>
    <Link to="/"><FontAwesomeIcon className="home-icon" icon={['fas', 'home']} ></FontAwesomeIcon></Link>
        <nav className="menu">
            <ul>
              <li><Link to="/" className="bio-link">Bio</Link></li>
              <li><Link to="/portfolio" className="portfolio-link">Portfolio</Link></li>
              <li><Link to="/contact" className="contact-link">Contact</Link></li>
            </ul>
        </nav>
    </>
    )
}

export default Header;