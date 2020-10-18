import React from 'react'
import UserCard from './UserCard'
import ProjectDetails from './ProjectDetails'
import { Link } from 'react-router-dom';
let usersUrl = 'http://localhost:3000/users/'

const UserProfile = (props) => {

    

    return(
        <div>

         
            
         {props.users ? 
         <div>

          {props.users.map(userProject => 
          <UserCard 
          key={userProject.id} 
          userProject={userProject} 
          loggedUser={props.loggedUser} 
          history={props.history} 
          adoptProject={() => props.adoptProject(props.clickedProject)}
          deleteMyProject={() => props.deleteMyProject(userProject)}
          project={props.project}
          currentProject = {() => props.currentProject(userProject.id)}
          
          />)}
          </div>
          : null }

        </div>
    )
}
    // componentDidMount(){
    //     fetch(usersUrl + localStorage.currentUser, {
    //       method: 'GET',
    //       headers: {
    //         Authorization:  `Bearer ${localStorage.token}`,
    //       'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //       }
    //     })
    //     .then(res => res.json())
    //     .then(projectArray => this.setState({
    //         userProjects: projectArray
    //       }))

    
    
            
           // UserArray => {
        //     UserArray.projects.map(function(project){
        //     myProjects = [...myProjects, project]
        // })
        // console.log(myProjects)
        // })
        // .then(function(myProjects){
        //     that.setState({
        //         userProjects: myProjects
        //     })
      //  })
            // let myProjects = []
            // UserArray.projects.map(function(project){
            //     myProjects = [...myProjects, project]
            // })
            // console.log(myProjects)
            //const userProjects = [...this.state.userProjects]
            
        
        // .then(UserArray => {
        //     UserArray.projects.map(function(project){
        //         let myProjects = [...this.state.userProjects, project]

        //     })
        //     console.log(myProjects)
        //   })
    

   

//     return(
//         <div>

        

//          userProjects={this.state.userProjects}
  

//         {/* {props.userProject.map(userProject => 
//               <ProjectCard 
//               key={userProject.id} 
//               userProject={userProject}
//               loggedUser={props.loggedUser}
//               history={props.history}
//               adoptProject={() => props.adoptProject(props.clickedProject)}
      
//               />)} */}
             
      
               
      
//           </div>

//     )
// }
   
// }


export default UserProfile