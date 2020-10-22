import React from 'react'
import ProjectDetails from './ProjectDetails'
import './App.css';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Container } from 'semantic-ui-react'


class ProjectCard extends React.Component { 

    handleClick = () =>{
        this.props.history.push({
            pathname:`/projects/${this.props.project.id}`,
            project: this.props.project})
    }
   
render(){

    let{name, ImageUrl} = this.props.project

    return(

        
        <Container className='PCard'>
        <div className="gridProjectCard">
            
            <div className="grid-item2">
            <div>
            {/* <Card.Header>{name}</Card.Header> */}
            <Image onClick={this.handleClick} src={ImageUrl} alt='' height="340px" width="265px"></Image>
            {/* <div className = 'ui buttons'>
                <Button onClick={this.handleClick} basic color = 'black'>
                    Project Details
                </Button>
            </div> */}
            
            </div>
            </div>
        </div>
        </Container>
    )
}
}

export default ProjectCard