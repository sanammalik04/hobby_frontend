import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import {  Button, Image, Card, Container } from 'semantic-ui-react';

const ProjectDetails = (props) => {

    return(
        <div className='Pdpage'>
            
    {/* <Container> */}
        <div className="grid">
            <div className="grid-item5">
        <div>
        {props.location.project?
        <div className='projectContent'>
            <div className='projectName'>
            <Card.Header><h1>{props.location.project.name}</h1></Card.Header><br></br>
            </div>

            {/* <div className='projectImage'> */}
            <Image src={props.location.project.ImageUrl} alt="" height="455px" width="390px"></Image><br></br>
            {/* </div> */}
            
            {/* <div className='projectContent'> */}
            <h3>{props.location.project.description}</h3>
            <p>{props.location.project.directions}</p>
            <h1>Supplies Needed:</h1>
            <ul>{props.location.project.supplies.map(supplies => <li>{supplies.name}</li>)} </ul><br></br>
            {/* <ul>{props.projectShowpage.supplies.map(supplies => <li>{supplies.name}</li>)}</ul> */}
            <div className='pdBtn'>
            <Button basic color='red' onClick={() => props.adoptProject(props.location.project)}>Add to My Projects</Button><br></br><br></br>
            </div> 
            {/* </div> */}
            </div>
            : null}
        </div>
        </div>
        </div>
    {/* </Container> */}

        </div>
    )
}

export default ProjectDetails