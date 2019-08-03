import React from 'react'
import ReactDOM from 'react-dom'
import LoginBox from './components/loginBox'
import RouterContainer from './routes'
import store from './store/configureStore'
import { Provider } from 'react-redux'

const Container = () => {
    return (
        <Provider store = {store}>
           
           <RouterContainer />
        </Provider>)
}

ReactDOM.render(<Container />, document.getElementById("outer-container"))