import React from 'react';
import '../styles/Home.scss';
import scrollDownButton from '../images/ico-scroll-down.svg';

const Home = () => {
    return(
    <>
        <h2>Hi, I'm Corina</h2>
        <span>Front end developer</span>
        <div class="home-button">
            <a href="#about" title="Go to About section">
                <img class="scroll--down--button" src={scrollDownButton} alt="scroll down button"></img>
            </a>
        </div>
    </>)
}

export default Home;