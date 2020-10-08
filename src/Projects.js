import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = (props) => {

    return(
        <div>
            <h1>Projects</h1>
            {
                props.projects.map(project => 
                <ProjectCard 
                key={project.id} 
                project={props.projects}
             
                />)
            }
        </div>
    )
}

export default Projects