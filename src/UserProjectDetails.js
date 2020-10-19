import React from 'react'
import { Link } from 'react-router-dom';
import { Checkbox, Button } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

let projectsUrl = 'http://localhost:3000/projects/'
let suppliesUrl = 'http://localhost:3000/supplies/'

class UserProjectDetails extends React.Component {

    hasSupplies = (supply) => {
    console.log(supply.has_item )
       
    let checked = true
    {supply.has_item == true ? checked = false : checked = true}
    console.log(supply.has_item )
       fetch(suppliesUrl + supply.id, {
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
       .then(this.props.currentProject(this.props.location.userProject.id))

       
   }




    
    
    
    
    
    render(){
      
        return(
            <div>
                <Card className="User-Project" >

                {this.props.project ?
                <div>

                {/* <h1>{JSON.parse(localStorage.currentProject).name}</h1>
                <img src={JSON.parse(localStorage.currentProject).ImageUrl} alt="" height="340px" width="265px"></img>
                <p>{JSON.parse(localStorage.currentProject).description}</p> */}
                <h1>{this.props.project.name}</h1>
                <img src={this.props.project.ImageUrl} alt="" height="340px" width="265px"></img>
                <p>{this.props.project.description}</p>
                {/* <Checkbox label='Make my supplies visible' /> */}
                <h2>Supplies Needed:</h2>

               
                {this.props.supplies.map(supply =>
                <div>
                <Checkbox onClick={() => this.hasSupplies(supply)} 
                checked={supply.has_item}
                label={supply.name}
                /><br></br><br></br>
                </div>

                )}

                <Button><Link to="/my-projects" users={this.props.users}> My Projects</Link></Button> 

                {/* <div>
                    <p onClick= {() => {this.props.updateProjects(this.props.updateProject)}, this.handleClick()}>Update Project</p>
                </div> */}
            </div>
            : null}
            </Card>
            </div>
        )

      }
    
    }   
    
    
    
    



export default UserProjectDetails