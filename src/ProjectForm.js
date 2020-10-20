import React, { Fragment } from 'react'
import { Link }  from 'react-router-dom'
import { Form, TextArea, Container, Button } from 'semantic-ui-react'

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
        <div className='gridForm'>
            <Container>
                <h1>Add Your Project</h1>
            <Form  onSubmit={(e) => {
                  props.createProject(e)
                //   props.createProject(createdProject)
                  handleSubmit()
                }
              }>
                  <Form.Group widths='equal'>
                      <Form.Field>
                   <Form.Input type='text' placeholder='Project Name' name='name'  /><br></br>
                   <TextArea type='text' placeholder='Description'name='description'  /><br></br><br></br>
                   {/* <textarea type='text' placeholder='Supplies Needed' name="supplies"  /><br></br><br></br>  */}
                   <Form.Input type='text' placeholder='Finished Project Photo' name='ImageUrl'  /><br></br>
                   <TextArea type='text' placeholder='Directions'name='directions'  /><br></br>
                   {createUI()}
                   </Form.Field> 
                   
                   <Form.Input type='button' value='Add Supply' onClick={props.addClickNew.bind(this)}/><br></br>
                  <Form.Input type='submit' value='Add Project' /><br></br><br></br>
                
                  </Form.Group>
              </Form> 
              {/* <Link to="/projects"> Show All Projects </Link> */}

             
              </Container>
              </div>
       
    )
}

export default ProjectForm;