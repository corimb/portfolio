import React from 'react';

import '../styles/Header.scss';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);

const Header = () => {
    return( 
    <>
    <a href="#home"><FontAwesomeIcon className="home-icon" icon={['fas', 'home']} ></FontAwesomeIcon></a>
        <nav className="menu">
            <ul>
              <li><a href="#about">about</a></li>
              <li><a href="#portfolio">portfolio</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
        </nav>
    </>
    )
}

export default Header;