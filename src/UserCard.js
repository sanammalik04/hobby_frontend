import React from 'react';
import UserProjectDetails from './UserProjectDetails'
import { Link } from 'react-router-dom';


class UserCard extends React.Component {



    handleClick = () =>{
        this.props.history.push({
            pathname:`/my-projects/${this.props.userProject.id}`,
            userProject: this.props.userProject})
           
    }



  
  
   
render(){

    

    return(

        <div>

            <h3>{this.props.userProject.name}</h3>
            <div>
                <img onClick={this.handleClick} src={this.props.userProject.ImageUrl} alt='' height="340px" width="265px"></img>
            </div>
            
            <button onClick={() => this.props.deleteMyProject(this.props.userProject.id)}>Delete My Project</button>




        </div>
    )
}
}

export default UserCard