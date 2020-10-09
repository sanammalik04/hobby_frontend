import React from 'react'
import ProjectDetails from './ProjectDetails'
import { Link } from 'react-router-dom';


class ProjectCard extends React.Component { 

    handleClick = () =>{
        this.props.history.push({
            pathname:`/projects/${this.props.project.id}`,
            project: this.props.project})
    }
   
render(){

    let{name, user_id, ImageUrl} = this.props.project

    return(

        <div>

            <h3>{name}</h3>
            <h3>{user_id}</h3>
            <div>
                <img onClick={this.handleClick} src={ImageUrl} alt='' height="340px" width="265px"></img>
            </div>


        </div>
    )
}
}

export default ProjectCard