import React from 'react'
import { Link } from 'react-router-dom';
import { Checkbox, Button } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'


let suppliesUrl = 'http://localhost:3000/supplies/'

class UserProjectDetails extends React.Component {

    hasSupplies = (supply) => {
    console.log(supply[0].has_item )
       
    let checked = true
    {supply[0].has_item == true ? checked = false : checked = true}
    
       fetch(suppliesUrl + supply[0].id, {
           method: "PATCH",
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

               

                <div>
                <Checkbox onClick={() => this.hasSupplies(this.props.location.userProject.supplies.map(supply => {return supply}))} checked={this.props.location.userProject.supplies.map(supply => {return supply.has_item})} allSupplies={this.props.allSupplies} label={this.props.location.userProject.supplies.map(supplies => <h5>{supplies.name}</h5>)}/><br></br><br></br>
                </div>

               

                <Button><Link to="/my-projects" users={this.props.users}> My Projects</Link></Button> 
            </div>
            : null}
            </Card>
            </div>
        )

      }
    
    }   
    
    
    
    



export default UserProjectDetails