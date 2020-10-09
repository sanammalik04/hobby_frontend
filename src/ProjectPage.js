import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectPage = (props) => {


return(

    <div>

        {props.projects.map(project => 
        <ProjectCard 
        key={project.id} 
        project={project}
        />)}


    </div>


)
}



export default ProjectPage