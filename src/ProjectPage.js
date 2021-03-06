import React from 'react'
import ProjectCard from './ProjectCard'
import UserProfile from './UserProfile'
import { Link }  from 'react-router-dom'


const ProjectPage = (props) => {
    


return(

    <div>

        {props.projects ?

        <div>

        {props.projects.map(project => 
        <ProjectCard 
        key={project.id} 
        project={project}
        loggedUser={props.loggedUser}
        history={props.history}
        adoptProject={() => props.adoptProject(props.clickedProject)}
        userSupplies={props.userSupplies}
        />)}
        {/* <Link to="/new"> Add Your Project </Link><br></br>  */}
        {/* <Link to="/my-projects"> My Projects </Link>  */}

        </div>



        : null}


    </div>
        


)
}



export default ProjectPage