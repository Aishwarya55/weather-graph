import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>Hello dashboard.. Welcome {this.props.user.name}</div>
        )
    }
}

const mapSateToProps = ({user}) => {
    return{
        user
    }
}

export default connect(mapSateToProps, null)(Dashboard)