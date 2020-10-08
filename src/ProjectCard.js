import React from 'react'
// import { Link } from 'react-router-dom';


const ProjectCard = (props) => {
   
    // let  {title, genre, review, image, video_link, movie_info, likes, dislikes } = props.location.movie

    return(

     <div>
         <div>

             <h5>{props.name}</h5>

                <p>{props.user_id}</p>

               <div>

                   <img src={props.ImageUrl} alt=""></img>

                </div> 
         </div>


    </div>
    )
}


export default ProjectCard