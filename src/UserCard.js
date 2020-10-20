import React from 'react';
import UserProjectDetails from './UserProjectDetails'
import { Link } from 'react-router-dom';
import './App.css';
import { Card, Button, Image, Header } from 'semantic-ui-react'


class UserCard extends React.Component {
   

    handleClick = () =>{
        this.props.currentProject(this.props.userProject.id)
        localStorage.setItem('currentProject', JSON.stringify(this.props.userProject))
        this.props.history.push({
            pathname:`/my-projects/${this.props.userProject.id}`,
            userProject: this.props.userProject}) 
          
    }

    handleEditClick = () =>{
        this.props.currentProject(this.props.userProject.id)
        this.props.history.push({
            pathname:`/edit-my-project`
           })
    }
   
render(){

    

    return(

        <div className="gridUserCard"> 

           <div className='grid-item3'>
            {/* <Card.Header><h1>{this.props.userProject.name}</h1></Card.Header> */}
            <div>
            <Image onClick={this.handleClick} src={this.props.userProject.ImageUrl} alt='' height="340px" width="265px"></Image>
            </div><br></br>
           
            <Button basic color='red' onClick={() => this.props.deleteMyProject(this.props.userProject.id)}>Delete My Project</Button><br></br><br></br>
            <Button basic color='red' onClick={this.handleEditClick}>Edit My Project</Button><br></br><br></br>
        
        
           





        </div>
        </div>
    )
}
}

export default UserCard