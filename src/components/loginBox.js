import React from 'react'
import ReactDOM from 'react-dom'
import { navigate } from '@reach/router'
import userLogin from './../action/userAction'
import { connect } from 'react-redux'
import { getCurrentCity } from './../action/dashboardAction'
// import { connect } from 'redux'

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
        getLatLong().then(resp => {
            return resp
        }).then(({latitude, longitude})=>{
            
            console.log(latitude, longitude)
        if(this.state.username === "admin" && this.state.password == "admin"){
            this.props.userLogin({
                id:1,
                name: 'admin',
                role: 'admin'
            })
            this.props.getCurrentCity(latitude,longitude)
            navigate(`/dashboard`)
        }
        else if(this.state.username === "guest" && this.state.password == "guest"){
            this.props.userLogin({
                id:1,
                name:admin,
                role:admin
            })
            navigate(`/dashboard`)
        }
        })

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


const getLatLong = () => {
    return new Promise((resolve, reject)=>{
        if ("geolocation" in navigator) {
             let processCoords = (position) => {
                 let latitude = position.coords.latitude;
                 let longitude = position.coords.longitude;
                 resolve({latitude,longitude})
        }
        navigator.geolocation.getCurrentPosition(processCoords);
    }else{
        reject("geo location not available")
    }
    })
}

const mapDispatchToProps = (dispatch) => {
 return{
     userLogin : (user) => dispatch(userLogin(user)),
     getCurrentCity: (lat, long) => dispatch(getCurrentCity(lat, long))
 }
}

export default connect(null, mapDispatchToProps)(LoginBox)