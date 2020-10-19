import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'


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
            <div>

            
             <h2>Login</h2>
        
           
            <Form onSubmit={(e) => {
                this.login(e)
                this.handleSubmit()}}>

            <Form.Field>
            {<label>Username</label>}
            <input placeholder= "Username" onChange={(e) => this.handleChange(e)} name="username" type="text" /><br></br>
            </Form.Field>
            
            <Form.Field>
            <label>Password</label>
            <input placeholder= "password" onChange={(e) => this.handleChange(e)} name="password" type="password" /><br></br>
            </Form.Field>

            <Form.Field>
            <input type="submit"/>
            </Form.Field>
           
          
            </Form>

    
        </div>
        )
    }
}

export default LogIn


