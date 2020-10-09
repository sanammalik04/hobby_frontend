import React from 'react'
import { Link } from 'react-router-dom';

const ProjectDetails = (props) => {

    

    return(
        <div>
            <h1>{props.location.project.name}</h1>
            <img src={props.location.project.ImageUrl} height="455px" width="390px"></img>
            <p>{props.location.project.description}</p>
        </div>
    )
}

export default ProjectDetails