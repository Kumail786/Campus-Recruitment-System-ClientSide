import React, { Component } from 'react'
import {SignUserUp} from '../../store/actions/authActions/authActions'
import './searchForm.css'
import Header from '../startingpage/header/title'
import './Authcomponent.css'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class SignUpStudent extends Component {

    constructor(){
        super()
        this.state = {
            username : '',
            email : '',
            password : '',
        }
    
        this.handleChage=(e)=>{
            this.setState({
                [e.target.id] : e.target.value
            })
    
        }
        this.handleSubmit=(e)=>{
            e.preventDefault();
            this.setState({
                [e.target.id] : e.target.value
            })
        this.props.SignUserUp(this.state)
        }
    }
    render() {
         if(this.props.auth.message){
            document.querySelector('#error').innerHTML = this.props.auth.message
            console.log(this.props.auth.message)
        }

        console.log(this.props.autherror)
        const isstudent = this.props.auth.student
        
        if(isstudent) return <Redirect to='/userdashboard'></Redirect>
        
        return (
            <div>
                <div style={{backgroundColor:"grey"}}><Header/></div>
                <br></br>
               
                <div className="SearchForm">
            <div><h2>Sign Up Now as A Professional</h2></div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                    <td colSpan="2">
                                        <label htmlFor="email">Name</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="text" id="username" placeholder="Enter Your Name" onChange={this.handleChage}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <label htmlFor="email">Email</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="email" id="email" placeholder="Enter Your Email" onChange={this.handleChage}/>
                                    </td>
                                </tr>
                               
                                <tr>
                                    <td colSpan="2">
                                        <label htmlFor="password">Password</label>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td colSpan="2">
                                        <input type="password" id="password"placeholder="Password" onChange={this.handleChage}/>
                                    </td>
                                </tr>
                                <p style={{color:"red"}} id="error"></p>
                                </tbody>
                                </table>
                                
                                <div><button id="submit">SIGNUP</button></div>
                                
                    </div>
                </form>
            </div>
               

               
              
               
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        auth : state.auth,
        
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
    SignUserUp : (cred) => dispatch(SignUserUp(cred)),
    
  }
  }
 
 export default connect(mapStateToProps,mapDispatchToProps)(SignUpStudent)