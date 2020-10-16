import React from 'react';
import UserProjectDetails from './UserProjectDetails'
import { Link } from 'react-router-dom';
import { Card, Button, Grid } from 'semantic-ui-react'


class UserCard extends React.Component {


   

    handleClick = () =>{
        this.props.history.push({
            pathname:`/my-projects/${this.props.userProject.id}`,
            userProject: this.props.userProject})   
    }

  
   
render(){

    

    return(

        <div>
            <Grid verticalAlign='middle'columns={5} centered>
            <Grid.Row divided={true}>
                <Grid.Column>
            <Card>
            <h3>{this.props.userProject.name}</h3>
            <div>
            <img onClick={this.handleClick} src={this.props.userProject.ImageUrl} alt='' height="340px" width="265px"></img>
            </div><br></br>
            <div>
            <Button onClick={() => this.props.deleteMyProject(this.props.userProject.id)}>Delete My Project</Button>
            </div><br></br>
            </Card>
            </Grid.Column>
            </Grid.Row>
            </Grid>





        </div>
    )
}
}

export default UserCard