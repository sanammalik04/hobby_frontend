import React from 'react'
import { Link } from 'react-router-dom';
import { Checkbox, Button, Container, Image } from 'semantic-ui-react'
import './App.css';


let projectsUrl = 'http://localhost:3000/projects/'
let suppliesUrl = 'http://localhost:3000/supplies/'

class UserProjectDetails extends React.Component {

    state = { 

        updatedSupplies: true

    }

    hasSupplies = (supply) => {
    // console.log(supply.has_item )
       
    // let checked = true
    // {supply.has_item == true ? checked = false : checked = true}
    supply.has_item = !supply.has_item

    console.log(supply.has_item )
       fetch(suppliesUrl + supply.id, {
           method: "PATCH",
           headers: {
            Authorization:  `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              has_item: supply.has_item
          })
       })
       .then(res => res.json())
       .then(this.setState({
           updatedSupplies: !this.state.updatedSupplies
       }))
    //    .then(this.props.currentProject(this.props.location.userProject.id))

       
   }

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
            <div className='userProject'>
                <Container>
                <div>

                {this.props.project ?
                <div>

                <div className='projectTitle'>

                <h1>{JSON.parse(localStorage.currentProject).name}</h1>

                </div>
               
                <Image src={JSON.parse(localStorage.currentProject).ImageUrl} alt="" height="340px" width="265px"></Image>
 
                <p>{JSON.parse(localStorage.currentProject).description}</p>
                <p>{JSON.parse(localStorage.currentProject).directions}</p>
                {/* <h1>{this.props.project.name}</h1>
                <img src={this.props.project.ImageUrl} alt="" height="340px" width="265px"></img>
                <p>{this.props.project.description}</p> */}
                {/* <p>{this.props.project.directions}</p> */}
                {/* <Checkbox label='Make my supplies visible' /> */}
                <h2>Supplies Needed:</h2>

               
                {this.props.supplies.map(supply =>
                <div className='checkbox'>
                <Checkbox onClick={() => this.hasSupplies(supply)} 
                checked={supply.has_item}
                label={supply.name}
                />
                {this.props.searchItem(supply.name)?
                 <Button basic color='red'><Link to="/find-supplies"> Supply Exists Near You</Link></Button> :
                null}
                <br></br><br></br>
                </div>

                )}

                <Button basic color= 'red'><Link to="/my-projects" users={this.props.users}> My Projects</Link></Button> 

                {/* <div>
                    <p onClick= {() => {this.props.updateProjects(this.props.updateProject)}, this.handleClick()}>Update Project</p>
                </div> */}
                
            </div>
            : null}
            </div>
            </Container>
            </div>
        )

      }
    
    }   
    
    
    
    



export default UserProjectDetails