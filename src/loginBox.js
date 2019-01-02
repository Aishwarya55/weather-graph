import React from 'react'
import ReactDOM from 'react-dom'
import { navigate } from '@reach/router'

class LoginBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {username : '', password: ''}
        
    this.handleChange = (event) => {
        const name = event.target.name
        this.setState({[name]: event.target.value})
    }
    this.handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state, "state")
        if(this.state.username === "admin" && this.state.password == "admin"){
        console.log("login")
        navigate(`/dashboard`)
        }
    }
       
    }


    render(){
        return (
            <form  onSubmit = {this.handleSubmit}>
            <label>
                UserName :  
                <input type="text" name= "username" placeholder="username" value = {this.state.username} onChange={this.handleChange}/>
            </label>
            <label>
                Password :  
                <input type="password" name= "password" placeholder="username" value = {this.state.password} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form> 
        )
    }
}

export default LoginBox