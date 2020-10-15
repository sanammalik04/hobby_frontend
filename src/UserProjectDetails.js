import React from 'react'
import { Link } from 'react-router-dom';

const UserProjectDetails = (props) => {

   
    return(
        <div>
            {props.location.userProject ?
            <div>
            <h1>{props.location.userProject.name}</h1>
            <img src={props.location.userProject.ImageUrl} alt="" height="455px" width="390px"></img>
            <p>{props.location.userProject.description}</p>
            <ul>{props.location.userProject.supplies.map(supplies => <li>{supplies.name}</li>)}</ul>
            <Link to="/my-projects" users={props.users}> My Projects </Link> 
        </div>
        : null}
        </div>
    )
}

export default UserProjectDetails