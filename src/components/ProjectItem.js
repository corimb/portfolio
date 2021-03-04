import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);

const ProjectItem = (props) =>{
    const { photo, title, description, technologies, githubUrl, webUrl } = props;
    return(
        <article className="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img src={photo} alt={title} className="project-photo"></img>
                </div>
                <div class="flip-box-back">
                    <div className="project-details">
                        <h5>{title}</h5>
                        <p className="project-description">{description}</p>
                        <p className="project-technologies
                        ">{technologies}</p>
                        <nav className="social-media">
                            <ul>
                                <li><a href={githubUrl} alt={title} target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a>
                                </li>
                                <li><a href={webUrl} alt={title} target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectItem;