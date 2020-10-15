import React from 'react'
import { Link } from 'react-router-dom';

const UserProjectDetails = (props) => {

   
    return(
        <div>
            <h1>{props.location.userProject.name}</h1>
            <img src={props.location.userProject.ImageUrl} alt="" height="455px" width="390px"></img>
            <p>{props.location.userProject.description}</p>
            <ul>{props.location.userProject.supplies.map(supplies => <li>{supplies.name}</li>)}</ul>
            <Link to="/my-projects"> My Projects </Link> 
        </div>
    )
}

export default UserProjectDetails