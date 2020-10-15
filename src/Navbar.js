import React from 'react'
import UserProfile from './UserProfile'
import { Link }  from 'react-router-dom'

let home = 'http://localhost:3001/home'

export const Navbar = (props) => {
    // console.log(props)

    let logout = () => {
        window.localStorage.clear();
        window.location.href = home
    }
    return(
        <div>
            
            <Link to="/my-projects" Users={props.users}> My Projects </Link><br></br>
            <Link to="/new" projects={props.projects}> Add Your Project </Link><br></br> 
            <Link to="/find-supplies" trash={props.trash}> Search for Supplies </Link><br></br> 
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Navbar