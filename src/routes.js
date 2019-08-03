import { Router } from '@reach/router'
import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/dashboard'
import LoginBox from './components/loginBox'
const RouterContainer = () =>{
    return(
        <Router>
            <LoginBox path="/"/>
            <Dashboard path="/dashboard">
            </Dashboard>
        </Router>
    )
}

export default RouterContainer