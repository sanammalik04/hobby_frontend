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
            <h1>Supplies Needed</h1>
            <ul><li>{props.location.project.supplies.map(supplies => supplies.name)}</li></ul>
            <button onClick={() => props.adoptProject(props.location.project)}>Add to My Projects</button><br></br><br></br>
            <Link to="/projects"> All Projects </Link><br></br> 
        </div>
    )
}

export default ProjectDetails