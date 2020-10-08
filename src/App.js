import React, {Component} from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Navbar from './Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'
import './App.css';
import UserProfile from './UserProfile';
import Projects from './Projects';

let projectsUrl = 'http://localhost:3000/projects/'

class App extends Component {

  constructor(){
    super()
    this.state = {
      projects: [],
      // addedProjects: []
    }
  }

  componentDidMount(){
    fetch(projectsUrl)
    .then(res => res.json())
    .then(projectArray => this.setState({
      projects : projectArray
    }))
  }

  // addProject = (id) => {
  //   // debugger
  //   if(!this.state.addedProjects.includes(id)){
  //     this.setState({
  //       addedProjects: [...this.state.addedProjects, id]
  //     })
  //   }
  // }
  

  



  render() {

    return (

      <BrowserRouter>

    <div>
           <Header />
           <Navbar />
           <UserProfile />

      <Switch>

          <Route path="/login" component={LogIn} />

          <Route path="/signup" component={SignUp} />

          <Route path='/home' render={(routerProps) => <Homepage{...routerProps}/>}/>

          <Route path='/projects' render={(routerProps) => <Projects{...routerProps} projects={this.state.projects}/> }/>



      </Switch>




     
    </div>
    </BrowserRouter>

    );
  }
}

export default App;
