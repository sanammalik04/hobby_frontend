import React from 'react'
import { Link } from 'react-router-dom';

const ProjectDetails = (props) => {

    // const handleClick = () => {
    //     props.history.push({
    //         pathname: '/my-projects'
    //     })
    // }

    return(
        <div>
            <h1>{props.location.project.name}</h1>
            <img src={props.location.project.ImageUrl} alt="" height="455px" width="390px"></img>
            <p>{props.location.project.description}</p>
            <button onClick={() => props.adoptProject(props.location.project)}>Add to My Projects</button>
            <Link to="/projects"> All Projects </Link> 
        </div>
    )
}

export default ProjectDetails