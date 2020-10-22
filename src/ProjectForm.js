import React, { Fragment } from 'react'
import { Link }  from 'react-router-dom'
import { Form, TextArea, Container, Button, Input } from 'semantic-ui-react'

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
               <Form.Field><Input type="text" value={supply.name} onChange={props.changeSuppliesNew.bind(this, i)}></Input></Form.Field><br></br>
               <Form.Field><Button basic color='red' circular icon = 'remove' type='button' value='remove' onClick={props.removeClick.bind(this, i)}></Button></Form.Field>
            </div>          
        )
     }

    return(
        <div className='projectFormDiv'>
        <div className='gridForm'>
            <Container className='projectForm'>
                <div className='pName'>'
                <h1>Add Your Project</h1><br></br>
                </div>
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
                   <TextArea type='text' placeholder='Directions'name='directions'  /><br></br><br></br>
                   {createUI()}
                   </Form.Field> 
                  </Form.Group>
                   <div className='btnAlign'>
                    <div className='supplyBtn'>
                   <Form.Input><Button basic color='red' size= 'mini' floated= 'right' type='button' value='Add Supply' onClick={props.addClickNew.bind(this)}>Add Supply</Button></Form.Input><br></br><br></br>
                   </div>
                  <Form.Input><Button basic color='red' size= 'large' type='submit' value='Add Project'>Add My Project</Button></Form.Input><br></br>
                  </div>
              </Form> 
              {/* <Link to="/projects"> Show All Projects </Link> */}

             
              </Container>
              </div>
              </div>
       
    )
}

export default ProjectForm;