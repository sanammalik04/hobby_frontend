import React from 'react'
import ProjectDetails from './ProjectDetails'
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react'


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
            
            

            <h3>{name}</h3>
            <div>
            <img onClick={this.handleClick} src={ImageUrl} alt='' height="340px" width="265px"></img>
            </div>

            
    


        </div>
    )
}
}

export default ProjectCard