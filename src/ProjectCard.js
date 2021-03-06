import React from 'react'
import ProjectDetails from './ProjectDetails'
import './App.css';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Container, Grid } from 'semantic-ui-react'


class ProjectCard extends React.Component { 

    handleClick = () =>{
        this.props.history.push({
            pathname:`/projects/${this.props.project.id}`,
            project: this.props.project})
    }
   
render(){

    let{name, ImageUrl} = this.props.project

    return(



        
        <div>
          
        <div className="gridProjectCard">
            
            <Container className='PCard'>
            <div className="grid-item2">
            
            {/* <Card.Header>{name}</Card.Header> */}
            <Image onClick={this.handleClick} src={ImageUrl} alt='' height="340px" width="265px"></Image>
            {/* <div className = 'ui buttons'>
                <Button onClick={this.handleClick} basic color = 'black'>
                    Project Details
                </Button>
            </div> */}
            
            
            </div>
        </Container>
        </div>
     
        </div>
    )
}
}

export default ProjectCard