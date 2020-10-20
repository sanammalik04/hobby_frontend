import React from 'react'
import { Link } from 'react-router-dom';
import {  Checkbox, Button, Image, Card } from 'semantic-ui-react';

const ProjectDetails = (props) => {

    return(
        <div className="grid">
            <div className="grid-item5">
        <div>
        {props.location.project?
        <div>
            <div className='project'>
            <Card.Header><h1>{props.location.project.name}</h1></Card.Header>
            </div>

            <div className='projectImage'>
            <Image src={props.location.project.ImageUrl} alt="" height="455px" width="390px"></Image>
            </div>
            
            <div className='projectContent'>
            <p>{props.location.project.description}</p>
            <p>{props.location.project.directions}</p>
            <h1>Supplies Needed:</h1>
            <ul>{props.location.project.supplies.map(supplies => <li>{supplies.name}</li>)} </ul><br></br>
            {/* <ul>{props.projectShowpage.supplies.map(supplies => <li>{supplies.name}</li>)}</ul> */}
            <Button basic color='red' onClick={() => props.adoptProject(props.location.project)}>Add to My Projects</Button><br></br><br></br> 
            </div>
            </div>
            : null}
        </div>
        </div>
        </div>
    )
}

export default ProjectDetails