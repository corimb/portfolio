import React from 'react';
import '../styles/Home.scss';
import scrollDownButton from '../images/ico-scroll-down.svg';
import corina_home from '../images/corina_home.jpg';

const Home = () => {
    return(
    <>
        <img src={corina_home} alt="Corina" className="photo"></img>
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