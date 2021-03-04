import React from 'react';
import '../styles/About.scss';
import '../styles/separator.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

const About = () => {
    return(
    <>
	    <article>
            <h3 className="about-title">About</h3>
            <p className="description">Born in Bucharest, Romania and currently living in Spain. Graduated in Tourism🌍 worked in Customer service 🎧 - administration and now programming 💻. Positive and curious. In the bootcamp that I finished on Adalab I have found the opportunity to reinvent myself and start this new adventure. Today I keep expanding my knowledge thanks to Free Code Camp, Medium articles and the savior Stack Overflow. In my free time I love traveling and photograph the special moments 📷, go to museums and expos 🎨, playing board games 🎲 with my friends, exercising and healthcare. I am currently looking for a job, so if you are interested in hiring a junior profile, don´t hesitate to contact me ;)
            </p>
        </article>
        <h4 className="experience-skills-title">Experience and soft skills</h4>
        <section className="history">
            <article className="experience-skills">
                <div className="icon-container">
                    <FontAwesomeIcon className="experience-icon" icon={['fas', 'globe-africa']} ></FontAwesomeIcon>
                    <p>Traveling</p>
                </div>
                <div className="skills">
                    <p>languages</p>
                    <p>communication</p>
                </div>
            </article>
            <article className="experience-skills">
                <div className="icon-container">
                    <FontAwesomeIcon className="experience-icon" icon={['fas', 'graduation-cap']} ></FontAwesomeIcon>
                    <p>College</p>
                </div>
                <div className="skills">
                    <p>teamwork</p>
                    <p>research</p>
                </div>
            </article>
            <article className="experience-skills">
                <div className="icon-container">
                    <FontAwesomeIcon className="experience-icon" icon={['fas', 'bed']} ></FontAwesomeIcon>
                    <p>Reception</p>
                </div>
                <div className="skills">
                    <p>multitasking</p>
                    <p>manage conflicts</p>
                </div>
            </article>
            <article className="experience-skills">
                <div className="icon-container">
                    <FontAwesomeIcon className="experience-icon" icon={['fas', 'headset']} ></FontAwesomeIcon>
                    <p>Tele-operator</p>
                </div>
                <div className="skills">
                    <p>patience</p>
                    <p>leadership</p>
                </div>
            </article>
            <article className="experience-skills">
                <div className="icon-container">
                    <FontAwesomeIcon className="experience-icon" icon={['fas', 'building']} ></FontAwesomeIcon>
                    <p>Administration</p>
                </div>
                <div className="skills">
                    <p>organization</p>
                    <p>responsability</p>
                </div>
            </article>
            <article className="experience-skills">
                <div className="icon-container">
                    <FontAwesomeIcon className="experience-icon" icon={['fas', 'laptop-code']} ></FontAwesomeIcon>
                    <p>Adalab</p>
                </div>
                <div className="skills">
                    <p>manage time</p>
                    <p>adaptability</p>
                </div>
            </article>
        </section>
    </>
    )
    
    
}

export default About;