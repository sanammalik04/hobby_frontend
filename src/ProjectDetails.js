import React from 'react'
import { Link } from 'react-router-dom';
import { Checkbox } from 'semantic-ui-react';

const ProjectDetails = (props) => {

    return(
        <div>
        {props.location.project?
        <div>
            <h1>{props.location.project.name}</h1>
            <img src={props.location.project.ImageUrl} alt="" height="455px" width="390px"></img>
            <p>{props.location.project.description}</p>
            <p>{props.location.project.directions}</p>
            <h1>Supplies Needed:</h1>
            <ul>{props.location.project.supplies.map(supplies => <li>{supplies.name}</li>)} </ul><br></br><br></br>
            {/* <ul>{props.projectShowpage.supplies.map(supplies => <li>{supplies.name}</li>)}</ul> */}
            <button onClick={() => props.adoptProject(props.location.project)}>Add to My Projects</button><br></br><br></br>
            <Link to="/projects" projects={props.projects}> All Projects </Link><br></br> 
            </div>
            : null}
        </div>
    )
}

export default ProjectDetails