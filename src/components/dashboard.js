import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { redirectTo } from '@reach/router';

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        if(!this.props.user.name)
        redirectTo('/')
    }

    render(){
        return(
            <div>
                <div>Hello dashboard.. Welcome {this.props.user.name}</div>
                <div>Current Location: {this.props.dashboard.currentCity}</div>
            </div>
        )
    }
}

const mapSateToProps = ({user, dashboard}) => {
    return{
        user,
        dashboard
    }
}

export default connect(mapSateToProps, null)(Dashboard)