import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectsList = (props) => {
    const singleProject = props.projects.map((project =>{
        return (
            <ProjectItem key={project.id}
            photo={project.photo}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            webUrl={project.webUrl}/>
        )
    }))
    return(
        <section className="projects-section">
            <div className="projects">{singleProject}</div>
        </section>
    )
}

export default ProjectsList;