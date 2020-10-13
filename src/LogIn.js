import React, {Component} from 'react'

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
           
        
        })
    }
    
    render(){
        return(
            <div>
             <h2>Login</h2>
            <form onSubmit={(e) => {
                this.login(e)
                this.handleSubmit()}}>

            <label>UserName</label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="text" />

            <label>Password</label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password" />

            <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default LogIn


