import React, { useState, useEffect } from 'react';

import '../styles/Header.scss';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);

const Header = () => {
    const [headerColor, setHeaderColor] = useState("white");


const listenScrollEvent = () => {
    window.scrollY > 750
      ? setHeaderColor("black")
      : setHeaderColor("white")
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })
return( 
<>
<a href="#home"><FontAwesomeIcon className="home-icon" icon={['fas', 'home']} ></FontAwesomeIcon></a>
<nav className="menu" style={{color: headerColor}}>
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