import React, {Component} from 'react'
import { Grid, Form, Button, Container } from 'semantic-ui-react'

class SignUp extends Component{

    handleSubmit = () => {

        this.props.history.push("/login") 
    }


    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            //    user:{
                username: this.state.username,
                password: this.state.password,
                address: this.state.address
            //    }
            })
        })
        .then(res => res.json())
        .then(console.log)
    }
   
    render(){
        return(
         <Container className='loginPage'>
        <div className="Login">
            <div>
            <h2 className='loginTitle'>Sign Up</h2>
            <Form onSubmit={(e) => { 
                this.signUp(e) 
                this.handleSubmit() }}>

            <Form.Field className='password'>
            <label>Create Username</label>
            <Form.Input onChange={(e) => this.handleChange(e)} name="username" type="text" />
            </Form.Field>

            <Form.Field className='password'>
            <label>Your Address</label>
            <Form.Input onChange={(e) => this.handleChange(e)} name="address" type="text" />
            </Form.Field>

            <Form.Field className='password'>
            <label>Create Password</label>
            <Form.Input onChange={(e) => this.handleChange(e)} name="password" type="password" />
            </Form.Field>

            <Form.Field className='signInBtn'>
            <Form.Input><Button color= 'red' type="submit">Sign Up</Button></Form.Input>
            </Form.Field>
            
            </Form>
            </div>   
        </div>
        </Container>
        )
    }
}

export default SignUp


