import React, { Fragment } from 'react'
import { Link }  from 'react-router-dom'

const ProjectForm = (props) => {

    const handleSubmit = () => {
        alert('Your project has been created!' + 
        props.history.push({
            pathname: `/projects`
        })
    )}

    let createUI = () => {
        return props.supplies.map((supply, i) => 
            <div key={i}>
               <input type="text" value={supply.name} onChange={props.changeSuppliesNew.bind(this, i)} />
               <input type='button' value='remove' onClick={props.removeClick.bind(this, i)}/>
            </div>          
        )
     }

    return(
        <div>
            <h1>Add Your Project</h1>
            <form  onSubmit={(e) => {
                  props.createProject(e)
                //   props.createProject(createdProject)
                  handleSubmit()
                }
              }>
                   <input type='text' placeholder='Project Name' name='name'  /><br></br><br></br>
                   <textarea type='text' placeholder='Description'name='description'  /><br></br><br></br>
                   {/* <textarea type='text' placeholder='Supplies Needed' name="supplies"  /><br></br><br></br>  */}
                   <input type='text' placeholder='Finished Project Photo' name='ImageUrl'  /><br></br><br></br>
                   {createUI()} 
                   <input type='button' value='Add Supply' onClick={props.addClickNew.bind(this)}/>
                  <input type='submit' value='Add Project' /><br></br><br></br>
              </form> 
              <Link to="/projects"> Show All Projects </Link> 

              </div>
       
    )
}

export default ProjectForm;