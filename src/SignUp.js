import React, {Component} from 'react'

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
                password: this.state.password
            //    }
            })
        })
        .then(res => res.json())
        .then(console.log)
    }
   
    render(){
        return(
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={(e) => { 
                this.signUp(e) 
                this.handleSubmit() }}>

            <label>Username</label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="text" />
            <label>Password</label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
            <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default SignUp


