import React, {Component} from 'react';
import HeaderOne from './HeaderOne';
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
import UserCard from './UserCard';
import UserProjectDetails from './UserProjectDetails';
import TrashNothing from './TrashNothing';
import TrashDetails from './TrashDetails';
import EditProject from './EditProject';




let projectsUrl = 'http://localhost:3000/projects/'
let usersUrl = 'http://localhost:3000/users/'
let suppliesUrl = 'http://localhost:3000/supplies/'
let projectSuppliesUrl = 'http://localhost:3000/project_supplies/'
let trashUrl = "https://trashnothing.com/api/v1.2/posts/search?search=crafts&sort_by=relevance&types=offer&sources=trashnothing&per_page=20&page=1&device_pixel_ratio=1&latitude=38.8890624&longitude=-76.9785856&radius=160934&api_key=d3rI3vCu9OPCizgN3H6xThrgpAcdg4ZueAbGTVkK"




class App extends Component {

  constructor(){
    super()
    this.state = {
      projects: [],
      loggedUser_id: localStorage.currentUser,
      projectForm: false,
      project: {},
      users: [],
      userSupplies: [],
      trash: [],
      supplies: []
    
     
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
  this.trashItems()
  this.allSupplies()
  
}

trashItems = () => {
  fetch(trashUrl, {
      method: "GET",
      headers: {
          Authorization:  `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }

  })
  .then(res => res.json())
  .then(trashData => this.setState({
    trash: trashData.posts
  }))
  
}




  adoptProject = (clickedProject) => {
    let clickedProjectSupplies = []
    clickedProject.supplies.map(supply => 
      clickedProjectSupplies.push(supply.name))
    fetch(projectsUrl + localStorage.currentUser,  {
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
          supplies: clickedProjectSupplies,
          original: false

      })
    })
     .then(resp => resp.json())
    //  .then(function (data){
    //   console.log(clickedProjectSupplies)
    //   const promises = clickedProjectSupplies.map(supply => {
    //     return fetch(projectSuppliesUrl, {
    //       method: "POST", 
    //       headers: {
    //         Authorization:  `Bearer ${localStorage.token}`,
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //       },
    //       body: JSON.stringify({
    //           supply_id: supply.id,
    //           project_id: data.id
    //       })
    //     })
    //    .then(resp => {return resp.json()})
    //   })
    //   Promise.all(promises).then(results=> {
    //     console.log(results)
    //   })
    //  })
    }
  


  createProject = (e) => {
    // debugger
    let createdProjectSupplies =  this.state.supplies
    console.log(createdProjectSupplies)
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
        supplies: createdProjectSupplies,
        original: true
      })
    })
    .then(res => {return (res.json())})
  }

  currentUser = (userId) => {
    this.setState({
      loggedUser_id: userId
    })
  }

  newSupplies = () => {
    this.setState({
      supplies: []
    })
  }

  addClick = () => {
    this.setState({ 
      supplies: [...this.state.supplies, {name:'', has_item:false}]
    })
  }

  addClickNew = () => {
    this.setState({ 
      supplies: [...this.state.supplies, '']
    })
  }

  removeClick = (i) => {
    let values = [...this.state.supplies]
    values.splice(i,1)
    this.setState({ 
      supplies: values 
    })
 }

 changeSupplies = (i, e)=> {
  let values = [...this.state.supplies]
  values[i].name = e.target.value
  this.setState({ 
    supplies: values 
  })
}

changeSuppliesNew = (i, e)=> {
  let values = [...this.state.supplies]
  values[i] = e.target.value
  this.setState({ 
    supplies: values 
  })
}
  currentProject = (projectId) => {
    fetch(projectsUrl + projectId, {
      method: "GET",
      headers: {
          Authorization:  `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }

  })
  .then(res => res.json())
  .then(res => 
    this.setState({
      supplies: res.supplies,
      project: res
    }))
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
      users: userArray.projects
      //userSupplies: userArray.projects.map(project =>project.supplies)
    }))

}
  deleteMyProject = (project) => {
    // debugger
    console.log(project)
    fetch(projectsUrl + project.id, {
      method: "DELETE",
      headers: {
        Authorization:  `Bearer ${localStorage.token}`,
      }
    })
    let myProject = this.state.projects.filter(projectObj => projectObj !== project)
    this.setState({
      projects: myProject
    })
  }

  // editSupplies = (checkedSupply) => {
  //   console.log(checkedSupply)
  //   let checkedProjectSupplies = []
  //   checkedSupply.supplies.map(supply => 
  //     checkedProjectSupplies.push(supply.has_item))

  //   fetch(projectsUrl, {
  //     method: "POST", 
  //     headers: {
  //       Authorization:  `Bearer ${localStorage.token}`,
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //    .then(resp => resp.json())
  // }

  allSupplies = () => {
    fetch(suppliesUrl, {
        method: "GET",
        headers: {
            Authorization:  `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
    .then(res => res.json())
    .then(supplyArray => this.setState({
      userSupplies: supplyArray
    }))
  }



  updateProjects = (updateProject) => {
    console.log(updateProject)
    this.setState({
      project: updateProject
    })
  }

  handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    let name = e.target.name
    let value = e.target.value

    this.setState({
      project: {...this.state.project, [name]: value}
    })
    console.log(this.state.project)
  }

  patchProject = () => {
    let projectName = this.state.project.name
    let projectDescription = this.state.project.description
    let imageUrl = this.state.project.ImageUrl
    let projectSupplies = this.state.supplies
    let JSONSupplies = JSON.stringify({projectSupplies})


    fetch(projectsUrl + this.state.project.id, {
      method: "PATCH",
      headers:{
        Authorization:  `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: projectName,
      description: projectDescription, 
      ImageUrl: imageUrl,
      supplies: JSONSupplies
    })
    })
    .then(res => res.json())
    .then(singleProject => console.log(singleProject))

  }

  // hasSupplies = (supply) => {
  //   console.log(supply.has_item )
       
  //   let checked = true
  //   {supply.has_item == true ? checked = false : checked = true}
    
  //      fetch(suppliesUrl + supply.id, {
  //          method: "PATCH",
  //          headers: {
  //           Authorization:  `Bearer ${localStorage.token}`,
  //           'Content-Type': 'application/json',
  //             'Accept': 'application/json'
  //         },
  //         body: JSON.stringify({
  //             has_item: checked
  //         })
  //      })
  //      .then(res => res.json())
  //      .then(project => this.setState({
  //           projects: this.state.projects.map(project => {return {...project}})
  //      })
  //      )
       
  //  }





  

  


  

 

  



  render() {

    return (

      <BrowserRouter>

    <div className= "App">
           {this.state.loggedUser_id ?
           <div> 
           <Navbar users={this.state.users} projects={this.state.projects} trash={this.state.trash} newSupplies={this.newSupplies} />
           </div>

          :null}<br></br>
          
          <HeaderOne />




         

       
      <Switch>
        

          <Route path="/login" render={(routerProps) => 
          <LogIn {...routerProps} 
          currentUser={this.currentUser}
          userProjects={this.userProjects}
          />}
           
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
            userSupplies={this.state.userSupplies}
   
            />}
            />

          <Route path= '/new' render={(routerProps) => 
          <ProjectForm {...routerProps} 
          createProject={this.createProject} 
          projects={this.state.projects}
          useProjects={this.state.userProjects}
          userSupplies={this.state.userSupplies}
          supplies={this.state.supplies}
          addClickNew={this.addClickNew}
          removeClick={this.removeClick}
          changeSuppliesNew={this.changeSuppliesNew}
          />}
          />

          <Route exact path= '/projects/:id' render={(routerProps) => {
            let id = parseInt(routerProps.match.params.id)
            let projectShowpage = this.state.projects.find(project => project.id === id)
            return <ProjectDetails {...routerProps} 
            projectShowpage={projectShowpage} 
            adoptProject={this.adoptProject}
            projects={this.state.projects} />
          }}/>
          

          <Route exact path='/my-projects' render={(routerProps) => 
          <UserProfile {...routerProps} 
          adoptProject={this.adoptProject}
          createProject={this.createProject}
          users={this.state.users}
          userSupplies={this.state.userSupplies}
          deleteMyProject={this.deleteMyProject}
          //updateProjects={this.updateProjects}
          userSupplies={this.state.userSupplies}
          project={this.state.project}
          supplies={this.state.supplies}
          currentProject={this.currentProject}
          />}
          />

          <Route exact path="/my-projects/:id" 
          render={(routerProps) => 
            <UserProjectDetails {...routerProps}
            // currentProject={this.currentProject}
            // updateSupplies={this.updateSupplies}
            // hasSupplies={this.hasSupplies}
            project={this.state.project}
            supplies={this.state.supplies}
            currentProject={this.currentProject}
            //updateProjects={this.updateProjects}
            // handleChange={this.handleChange}
           

          />}
          />

          <Route exact path="/find-supplies/:post_id"
          render={(routerProps) => 
          <TrashDetails {...routerProps}

          />}
          />
          <Route exact path="/find-supplies"
          render={(routerProps) => 
          <TrashNothing {...routerProps}
          trash={this.state.trash}

          
          />}
          />

          

          <Route path='/edit-my-project' render={(routerProps) => 
          <EditProject {...routerProps} 
          patchProject={this.patchProject} 
          project={this.state.project}
          handleChange={this.handleChange}
          currentProject={this.currentProject}
          supplies={this.state.supplies}
          addClick={this.addClick}
          removeClick={this.removeClick}
          changeSupplies={this.changeSupplies}
          />}/>

          

          



      </Switch>




     
    </div>
    </BrowserRouter>

    );
  }
}

export default App;
