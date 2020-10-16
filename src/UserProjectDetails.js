import React from 'react'
import { Link } from 'react-router-dom';
import { Checkbox, Button } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'


let suppliesUrl = 'http://localhost:3000/supplies/'

class UserProjectDetails extends React.Component {


    updateSupplies = (supply) => {
        console.log(supply)
        let checked = !false
        {supply.has_item === true ? checked = true : checked = false}
       
        fetch(suppliesUrl + supply.id, {
          method: 'POST',
          headers: {
            Authorization:  `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          has_item: checked
    
        })
        })
        .then(res => res.json())
        .then(console.log)
      }
    
      
      

      render(){
        return(
            <div>
                <Card className="User-Project" >
                {this.props.location.userProject ?
                <div>
                <h1>{this.props.location.userProject.name}</h1>
                <img src={this.props.location.userProject.ImageUrl} alt="" height="340px" width="265px"></img>
                <p>{this.props.location.userProject.description}</p>
                {/* <Checkbox label='Make my supplies visible' /> */}
                <h2>Supplies Needed:</h2>
               
                <Checkbox onClick={() => this.updateSupplies(this.supply)} label={this.props.location.userProject.supplies.map(supplies => <h5>{supplies.name}</h5>)}/><br></br><br></br>

                <Button><Link to="/my-projects" users={this.props.users}> My Projects</Link></Button> 
            </div>
            : null}
            </Card>
            </div>
        )

      }
    

    
}

export default UserProjectDetails