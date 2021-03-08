import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects-data.json';
import ProjectsList from './ProjectsList';
import '../styles/Portfolio.scss';
import '../styles/downloadBtn.scss';

import Curriculum from '../download/Resume.pdf';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);

const Portfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData);
      }, []);
    return(
    <>  
        <h3>Portfolio</h3>
        <h4>Technologies I work with</h4>
        <section className="technologies-section">
            <div>
                <span>HTML |</span>
                <span> Css3 |</span>
                <span> SaSS |</span>
                <span> Flexbox |</span>
                <span> Grid |</span>
                <span> Bootstrap</span>
            </div>
            <div>
                <span>Javascript (ES6) |</span>
                <span> servicios API |</span>
                <span> Git |</span>
                <span> Github</span>
            </div>
            <div>
                <span>React |</span>
                <span> NodeJS |</span>
                <span> ExpressJS</span>
            </div>
            <div>
                <span>Slack |</span>
                <span> Trello |</span>
                <span> Zeplin</span>
            </div>
            <div>
                <span>Agile |</span>
                <span> Scrum</span>
            </div>
        </section>
        <h4>Projects</h4>
        <ProjectsList projects={projects}/>
        <nav className="social-media">
            <ul>
              <li><a href="https://github.com/corimb" title="Go to github"target="_blank" rel="noopener noreferrer"><strong>See more projects</strong></a></li>
            </ul>
        </nav>
        <hr className="border-see-more"></hr>
        <section>
                <a href={Curriculum} download="cv_corina_borcoci.pdf" className="download-btn">Cv Corina Borcoci
                    <span className="text--download">Text</span>
                    <span className="flip-front">Download CV</span>
                    <span className="flip-back">Nice to meet U!</span>
                </a>
        </section>
    </>
    
    
    )
}

export default Portfolio;