import React from 'react';
import '../styles/Footer.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);

const Footer = () => {
    return( 
    <>
        <span>Find me on</span>
        <nav className="social-media">
            <ul>
              <li><a href="https://www.linkedin.com/in/corina-mihaela-borcoci/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} size='lg'></FontAwesomeIcon></a></li>
              <li><a href="https://github.com/corimb" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a></li>
            </ul>
        </nav>
        <span className="footer-copy">Made with ❤️ by <a href="https://github.com/corimb" target="_blank" rel="noopener noreferrer">Corina</a></span>
    </>
    )
}

export default Footer;


