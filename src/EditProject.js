import React from 'react'
import { Checkbox, Button, Form, Input, Container, TextArea } from 'semantic-ui-react'

let projectsUrl = 'http://localhost:3000/projects/'
let suppliesUrl = 'http://localhost:3000/supplies/'


const EditProject = (props) => {

    let handleSubmit = () => {
        console.log(props)
        props.history.push('/my-projects')
    }

    let createUI = () => {
        return props.supplies.map((supply, i) => 
            <div key={i}>
               <Form.Field><Input type="text" value={supply.name} onChange={props.changeSupplies.bind(this, i)}></Input></Form.Field><br></br>
               <Form.Field><Button type='button' value='remove'  color='red'  size='mini' onClick={props.removeClick.bind(this, i)}>X</Button></Form.Field><br></br>
            </div>          
        )
     }

    return(
        <div className='editDiv'>
           

            <div className='gridEditForm'>
                <Container className='editForm'>

            <Form onSubmit={() => {
                props.patchProject()
                handleSubmit()
            
            }}>
                 <Form.Group widths='equal'>
                     <Form.Field>
                <Form.Input type='text' placeholder= 'Project Name' name="name" value={props.project.name} onChange={(e) => props.handleChange(e)}/><br></br>
                <TextArea type='text' placeholder='Description'name='description' value={props.project.description} onChange={(e) => props.handleChange(e)}/><br></br><br></br>
                <Form.Input type='text' placeholder= 'Image URL' name="Image URL" value={props.project.ImageUrl} onChange={(e) => props.handleChange(e)}/><br></br>
                <TextArea type='text' placeholder='Directions'name='directions' value={props.project.directions} onChange={(e) => props.handleChange(e)}/><br></br><br></br>
                {createUI()} 
                </Form.Field>
                </Form.Group>
                <div className='editBtn'>
                    <div className='editSupplyBtn'>
                <Form.Input><Button color= 'red' size='mini' type='button' value='Add Supply' onClick={props.addClick.bind(this)}>Add Supply</Button></Form.Input> 
                    </div>
                <Form.Input><Button color= 'red' size='large' type='submit' value='Update Project'>Update My Project</Button></Form.Input><br></br><br></br>
                </div>
                </Form>

        </Container>
        </div>
      
        </div>
    )
}


export default EditProject