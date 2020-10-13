import React, {Component} from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Navbar from './Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';
import './App.css';
import UserProfile from './UserProfile';
import ProjectPage from './ProjectPage';
import ProjectForm from './ProjectForm';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

let projectsUrl = 'http://localhost:3000/projects/'
let usersUrl = 'http://localhost:3000/users/'

class App extends Component {

  constructor(){
    super()
    this.state = {
      projects: [],
      loggedUser_id: localStorage.currentUser,
      projectForm: false,
      project: {},
      users: []
     
    }
  }

componentDidMount(){
  fetch(projectsUrl, {
    method: "GET",
    headers: {
      Authorization:  `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(projectArray => this.setState({
    projects: projectArray
  }))
  this.userProjects()
}

  adoptProject = (clickedProject) => {
    console.log(clickedProject)
    //let newProjectArray = this.state.projects.filter(project => project !== clickedProject )
    //this.setState({
     // projects: newProjectArray,
      //userProjects: [...this.state.userProjects, clickedProject]
    //})
    fetch(projectsUrl, {
      method: "POST", 
      headers: {
        Authorization:  `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
          user_id: this.state.loggedUser_id,
          name: clickedProject.name,
          description: clickedProject.description,
          ImageUrl: clickedProject.ImageUrl,
          original: false

      })
    })
     .then(resp => resp.json())
  }

     //using clickedProject.id find the relevant supplies and also link to this new project
  

  createProject = (e) => {
    // debugger
    e.preventDefault()
    fetch(projectsUrl, {
      method: "POST",
      headers: {
          Authorization:  `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      user_id: this.state.loggedUser_id,
      name: e.target[0].value,
      description: e.target[1].value,
      ImageUrl: e.target[3].value,
      original: true
      })
    })
    .then(res => res.json())
    .then(newProject => {
      this.setState({
        projects: [...this.state.projects, newProject],
        projectForm: !this.state.projectForm,
        userProjects: [...this.state.userProjects, newProject],
      })
    })
  }

  currentUser = (userId) => {
    this.setState({
      loggedUser_id: userId
    })
  }

  userProjects = () => {
    fetch(usersUrl + localStorage.currentUser, {
        method: "GET",
        headers: {
            Authorization:  `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
    .then(res => res.json())
    .then(userArray => this.setState({
      users: userArray
    }))

}
  // deleteMyProject = (project) => {
  //   let user = this.state.loggedUser_id
  //   let removeProject = project

  // }

  



  render() {

    return (

      <BrowserRouter>

    <div>
           <Header />
           <Navbar />
          

       
      <Switch>

          <Route path="/login" render={(routerProps) => <LogIn {...routerProps} currentUser={this.currentUser}/>}
           
          />

          <Route path="/signup" 
          component={SignUp} 
          />

          <Route path='/home' render={(routerProps) => 
            <Homepage{...routerProps}
            />}
            />

          <Route exact path='/projects' render={(routerProps) => 
            <ProjectPage {...routerProps} 
            projects={this.state.projects}
            adoptProject={this.adoptProject}
   
            />}
            />

          <Route path= '/new' render={(routerProps) => 
          <ProjectForm {...routerProps} 
          createProject={this.createProject} 
          projects={this.state.projects}
          useProjects={this.state.userProjects}

          />}
          />

          <Route exact path= '/projects/:id' render={(routerProps) => 
          <ProjectDetails {...routerProps}
          adoptProject={this.adoptProject}
          />}
          />

          <Route path='/my-projects' render={(routerProps) => 
          <UserProfile {...routerProps} 
          adoptProject={this.adoptProject}
          createProject={this.createProject}
          users={this.state.users}
          />}
          />

          

          

          



      </Switch>




     
    </div>
    </BrowserRouter>

    );
  }
}

export default App;
