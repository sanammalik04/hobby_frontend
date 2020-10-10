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

class App extends Component {

  constructor(){
    super()
    this.state = {
      projects: [],
      userProjects: [],
      loggedUser_id: '',
      projectForm: false,
      project: {}
     
    }
  }

  componentDidMount(){
    fetch(projectsUrl)
    .then(res => res.json())
    .then(projectArray => this.setState({
      projects : projectArray
    }))
  }

  adoptProject = (clickedProject) => {
    let newProjectArray = this.state.projects.filter(project => project !== clickedProject )
    this.setState({
      projects: newProjectArray,
      userProjects: [...this.state.userProjects, clickedProject]
    })
  }

  createProject = (e) => {
    debugger

    e.preventDefault()
    // console.log(e)

    // let newProject = {
    //   user_id: this.state.loggedUser.id,
    //   name: e.target[0].value,
    //   ImageUrl: e.target[1].value
    // }
    fetch(projectsUrl, {
      method: "POST",
      headers: {
          Authorization:  `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      user_id: this.state.loggedUser_id,
     
      name: e.target[0].value,
      ImageUrl: e.target[1].value
      
      })
    })
    .then(res => res.json())
    .then(newProject => {
      console.log(newProject)
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
  

  



  render() {

    return (

      <BrowserRouter>

    <div>
           <Header />
           <Navbar />
           <UserProfile />
        
          

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
   
          />}
          />

          

          

          



      </Switch>




     
    </div>
    </BrowserRouter>

    );
  }
}

export default App;
