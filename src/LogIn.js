import React, {Component} from 'react'
import { Button, Form, Divider, Grid, Segment, Container } from 'semantic-ui-react'


class LogIn extends Component{

    

    handleSubmit = () => {
    
        this.props.history.push("/projects") 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(userInfo => {
            // debugger
            localStorage.token = userInfo.token
            localStorage.currentUser = userInfo.user_id
            this.props.currentUser(userInfo.user_id)
            this.props.userProjects()
           
        
        })
    }
    
    render(){
        return(
            <Container className='loginPage'>
            <div className="Login"><br></br>

            
             <h2 className='loginTitle'>Login</h2><br></br><br></br>
             <Form onSubmit={(e) => {
                this.login(e)
                this.handleSubmit()}}>

            <Form.Field className='username'>
            {<label>Username</label>}
            <Form.Input placeholder= "Username" onChange={(e) => this.handleChange(e)} name="username" type="text" /><br></br>
            </Form.Field>

            <Form.Field className='password'>
            <label>Password</label>
            <Form.Input placeholder= "password" onChange={(e) => this.handleChange(e)} name="password" type="password" /><br></br>
            </Form.Field>

            <Form.Field className='signInBtn'>
            <Form.Input><Button color= 'red' size= 'large' type="submit">Sign In</Button></Form.Input>
            </Form.Field>


            </Form> 

           
    
        </div>
        </Container>
        )
    }
}

export default LogIn

