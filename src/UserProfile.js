import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'
import { Link } from 'react-router-dom';


const UserProfile = (props) => {
   
   

    return(

     <div>


            <p>{props.userProjects}</p>
            <p>{props.adoptProject}</p>
            <p>{props.createProject}</p>

         

    </div>
    )
}


export default UserProfile