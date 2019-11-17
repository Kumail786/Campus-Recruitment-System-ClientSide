import React, { Component } from 'react'
import './starting.css'

import Mid from '../startingpage/midbodycomponents/mid'

import {connect} from 'react-redux'
// import jwt_decode from 'jwt-decode'
// import {signUserInJWT} from '../../store/actions/authActions/authActions'



export class Starting extends Component {
    // componentDidMount(){
    //     var token = window.localStorage.getItem('jwt')

    //     var decoded = jwt_decode(token);
    //     const id = decoded.student._id
    //     this.props.signUserInJWT(id)
    // }
    
    render() {
        console.log(this.props.auth)
        return (
            <React.Fragment>
                
                <Mid/>
                
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        // signUserInJWT : (id)=>{dispatch(signUserInJWT(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Starting)