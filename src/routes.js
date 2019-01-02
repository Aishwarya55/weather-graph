import { Router } from '@reach/router'
import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './dashboard'
import LoginBox from './loginBox'
const RouterContainer = () =>{
    return(
        <Router>
            <LoginBox path="/"/>
            <Dashboard path="/dashboard" />
        </Router>
    )
}

export default RouterContainer