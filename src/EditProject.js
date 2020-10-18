import React from 'react'
import { Checkbox, Button } from 'semantic-ui-react'

let projectsUrl = 'http://localhost:3000/projects/'
let suppliesUrl = 'http://localhost:3000/supplies/'


const EditProject = (props) => {

    let handleSubmit = () => {
        console.log(props)
        props.history.push('/my-projects')
    }


    return(
        <div>
           

            <div>

            <form onSubmit={() => {
                props.patchProject()
                handleSubmit()
            
            }}>
                <input disabled="disabled" type='text' placeholder= 'Project Name' name="name" value={props.project.name} onChange={(e) => props.handleChange(e)}/>
                <textarea type='text' placeholder='Description'name='description' value={props.project.description} onChange={(e) => props.handleChange(e)}/>
                <input type='text' placeholder= 'Image URL' name="Image URL" value={props.project.ImageUrl} onChange={(e) => props.handleChange(e)}/>
                
                {/* {props.supplies.map(supply =>
                <div>
                
                </div>

                )}  */}
                 <input type='submit' value='Update Project' /><br></br><br></br>
                </form>

        </div>
      
        </div>
    )
}


export default EditProject