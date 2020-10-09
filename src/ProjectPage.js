import React from 'react'
import ProjectCard from './ProjectCard'
import { Link }  from 'react-router-dom'

const ProjectPage = (props) => {
    


return(

    <div>

        {props.projects.map(project => 
        <ProjectCard 
        key={project.id} 
        project={project}
        loggedUser={props.loggedUser}
        history={props.history} 
    
        />)}
        <Link to="/new"> Add Your Project </Link> 


    </div>


)
}



export default ProjectPage