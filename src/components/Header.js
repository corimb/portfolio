import React from 'react';

import '../styles/Header.scss';

const Header = () => {
return( 
<>
<a href="#home" className="home-icon" >CB</a>
<nav className="menu" >
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