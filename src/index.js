import React from 'react'
import ReactDOM from 'react-dom'
import LoginBox from './loginBox'

const Container = () => {
    return (
        <div>
           <LoginBox />
        </div>)
}

ReactDOM.render(<Container />, document.getElementById("outer-container"))