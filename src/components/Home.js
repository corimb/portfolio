import React from 'react';
import '../styles/Home.scss';
import scrollDownButton from '../images/ico-scroll-down.svg';
import corina_home from '../images/corina_home.jpg';

const Home = () => {
    return(
    <>
        <img src={corina_home} alt="Corina" className="photo"></img>
        <h2>Hi, My name is Corina Borcoci.</h2>
        <span>Front end developer</span>
        <div className="home-button">
            <a href="#about" title="Go to About section">
                <img className="scroll--down--button" src={scrollDownButton} alt="scroll down button"></img>
            </a>
        </div>
    </>)
}

export default Home;