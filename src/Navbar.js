import React from 'react'
import UserProfile from './UserProfile'
import { NavLink }  from 'react-router-dom'
import { Button, Menu, Input } from 'semantic-ui-react'

let home = 'http://localhost:3001/home'

export const Navbar = (props) => {
    // console.log(props)

    let state = {}

    let handleItemClick = (e, {name}) => props.setState({activeItem: name})

    let logout = () => {
        window.localStorage.clear();
        window.location.href = home
    }

    const {activeItem} = state

    return(
           
        <div>

          <Menu pointing secondary>
            <Menu.Item 
            as={NavLink} to="/projects"
            name= 'All Projects'
            active={activeItem === 'All Projects'}
            onClick={props.handleItemClick}
            ></Menu.Item>

              <Menu.Item
              as={NavLink} to="/my-projects"
              name= 'Your Projects'
              active={activeItem === 'My Projects'}
              onClick={props.handleItemClick, props.userProjects}
              Users={props.users}
              ></Menu.Item>
    
              <Menu.Item
              as={NavLink} to="/new"
              name= 'Add Your Project'
              active={activeItem === 'Add Your Project'}
              onClick={props.handleItemClick, props.newSupplies}
              projects={props.projects}
              ></Menu.Item>

              <Menu.Item
              as={NavLink} to="/find-supplies"
              name= 'Search for Supplies'
              active={activeItem === 'Search for Supplies'}
              onClick={props.handleItemClick, () => props.handleSearch("")}
              trash={props.trash}
              ></Menu.Item>


              {/* <Menu.Menu position='right'> */}
              <Menu.Item
              name= 'Logout'
              active={activeItem === 'Logout'}
              onClick={logout}
              ></Menu.Item>
              {/* </Menu.Menu> */}

              <Menu.Menu position = 'right'>
                <Menu.Item>
                  <Input 
                  onChange={(e) => props.handleSearch(e.target.value)} 
                  icon='search' 
                  placeholder='Get Craftsy'
                  />
                  </Menu.Item>

              </Menu.Menu> 

             




          </Menu>

            {/* <Button><Link to="/my-projects" Users={props.users}> My Projects</Link></Button><br></br><br></br>

            <Button><Link to="/new" projects={props.projects}> Add Your Project</Link></Button><br></br><br></br> 

            <Button><Link to="/find-supplies" trash={props.trash}> Search for Supplies</Link></Button><br></br><br></br>

            <Button><Link to="/projects" projects={props.projects}> All Projects </Link></Button><br></br><br></br>

            <Button class="ui button" onClick={logout}>Logout</Button> */}
           

        </div>
    )
}

export default Navbar