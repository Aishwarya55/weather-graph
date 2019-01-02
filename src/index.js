import React from 'react'
import ReactDOM from 'react-dom'
import LoginBox from './loginBox'
import RouterContainer from './routes'

const Container = () => {
    return (
        <div>
           
           <RouterContainer />
        </div>)
}

ReactDOM.render(<Container />, document.getElementById("outer-container"))