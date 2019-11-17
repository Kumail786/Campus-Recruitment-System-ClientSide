import React, {Component} from 'react'
import './searchForm.css'
import Header from '../startingpage/header/title'
import {signCompanyUp} from '../../store/actions/authActions/authActions'
import {Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
class SignUpComp extends Component{
constructor(){
    super()
    
    this.handleChage=(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })

    }

    this.handleSubmitcompany=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.id] : e.target.value
        })
        const companyname = this.state.username;
        const companyemail = this.state.email;
       const companypassword = this.state.password
       console.log(companypassword)

        const companydata  = {
            companyname,
            companyemail,
            companypassword
        }
    this.props.signCompanyUp(companydata)
    console.log(companydata)
    }
}



   
    render(){
        if(this.props.auth.message){
            document.querySelector('#error').innerHTML = this.props.auth.message
            console.log(this.props.auth.message)
        }
        const iscompany = this.props.auth.company
        
        if(iscompany) return <Redirect to='/companydashboard'></Redirect>
        
        return(
            <div>
           <div style={{backgroundColor:"grey"}}><Header/></div>
            <div className="SearchForm">
            <div><h2>SignUp Now and Start Hiring Professionals</h2></div>
                <form onSubmit={this.handleSubmitcompany}>
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                    <td colSpan="2">
                                        <label htmlFor="username">Name</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="text" id="username" placeholder="Enter Your Name" onChange={this.handleChage} required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <label htmlFor="email">Email</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="email" id="email" placeholder="Enter Your Email" onChange={this.handleChage} required/>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td colSpan="2">
                                        <label htmlFor="password">Password</label>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td colSpan="2">
                                        <input type="password" id="password" placeholder="Password" onChange={this.handleChage} required/>
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
        auth : state.auth
    }
}

 const mapDispatchToProps = (dispatch) =>{
     return{
     
     signCompanyUp : (cred) => dispatch(signCompanyUp(cred))
   }
   }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SignUpComp)