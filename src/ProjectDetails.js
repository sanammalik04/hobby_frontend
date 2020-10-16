import React from 'react'
import { Link } from 'react-router-dom';
import { Checkbox } from 'semantic-ui-react';

const ProjectDetails = (props) => {

    return(
        <div>
        {props.projectShowpage?
        <div>
            <h1>{props.projectShowpage.name}</h1>
            <img src={props.projectShowpage.ImageUrl} alt="" height="455px" width="390px"></img>
            <p>{props.projectShowpage.description}</p>
            <h1>Supplies Needed:</h1>
            <Checkbox label={props.projectShowpage.supplies.map(supplies => <h5>{supplies.name}</h5>)} /><br></br><br></br>
            {/* <ul>{props.projectShowpage.supplies.map(supplies => <li>{supplies.name}</li>)}</ul> */}
            <button onClick={() => props.adoptProject(props.projectShowpage)}>Add to My Projects</button><br></br><br></br>
            <Link to="/projects" projects={props.projects}> All Projects </Link><br></br> 
            </div>
            : null}
        </div>
    )
}

export default ProjectDetails