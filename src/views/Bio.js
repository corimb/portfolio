import React from 'react';
import photo from '../images/corina.jpg'
import '../App.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

const Bio = () => {
    return(
    <>
    <section>
	    <article>
			<img src={photo} alt="corina" className="photo"></img> 
	    </article>
        <article className="description">
            <p>Esto es bio Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </article>
    </section>
    <div className="separator01"></div>
    <section className="history">
        <div className="experience-skills-title">
            <div className="experience-title">Experience</div>
            <div className="skills-title">Skills</div>
        </div>
        <article className="experience-skills">
            <div className="icon-container">
                <FontAwesomeIcon className="experience-icon" icon={['fas', 'globe-africa']} ></FontAwesomeIcon>
                <p>Traveling</p>
            </div>
            <div className="skills">
                <p>communication</p>
                <p>languages</p>
            </div>
            <div class="flip-card-back">
                <p>Text</p>
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
            <div class="flip-card-back">
                <p>Text</p>
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
            <div class="flip-card-back">
                <p>Text</p>
            </div>
        </article>
        <article className="experience-skills">
            <div className="icon-container">
                <FontAwesomeIcon className="experience-icon" icon={['fas', 'headset']} ></FontAwesomeIcon>
                <p>Tele-operator</p>
            </div>
            <div className="skills">
                <p>adaptability</p>
                <p>patience</p>
                <p>leadership</p>
            </div>
            <div class="flip-card-back">
                <p>Text</p>
            </div>
        </article>
        <article className="experience-skills">
            <div className="icon-container">
                <FontAwesomeIcon className="experience-icon" icon={['fas', 'building']} ></FontAwesomeIcon>
                <p>Administration</p>
            </div>
            <div className="skills">
                <p>responsability</p>
                <p>organization</p>
            </div>
            <div class="flip-card-back">
                <p>Text</p>
            </div>
        </article>
        <article className="experience-skills">
            <div className="icon-container">
                <FontAwesomeIcon className="experience-icon" icon={['fas', 'laptop-code']} ></FontAwesomeIcon>
                <p>Adalab</p>
            </div>
            <div className="skills">
                <p>focus</p>
                <p>manage time</p>
                <p>ambition</p>
                <p>self control</p>
            </div>
            <div class="flip-card-back">
                <p>Text</p>
            </div>
        </article>
    </section>
    <section className="download-btn">
            <a href="../download/cv-corina-borcoci.pdf" download="cv_corina_borcoci.pdf" class="btn">
                <span class="text">Text</span>
                <span class="flip-front">Download CV</span>
                <span class="flip-back">Hi there!</span>
            </a>
    </section>
    </>
    )
    
    
}

export default Bio;