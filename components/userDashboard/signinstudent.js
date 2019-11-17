import React, { Component } from 'react'
import './searchForm.css'
import Header from '../startingpage/header/title'
import './Authcomponent.css'
import {Redirect,Link} from 'react-router-dom'
import {signUserIn} from '../../store/actions/authActions/authActions'
import {connect} from 'react-redux'

class SignInUser extends Component {

constructor(){
    super()
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
        const email = this.state.email;
        const password = this.state.password;
    
    this.props.signUserIn({email,password})
    }

}



    render() {
        const isstudent = this.props.auth.student
        if(this.props.auth.message){
            document.querySelector('#error').innerHTML = this.props.auth.message
            console.log(this.props.auth.message)
        }


        if(isstudent) return <Redirect to='/userdashboard'></Redirect>

        return (
            <div>
                <div style={{backgroundColor:"grey"}}><Header/></div>
                <br></br>
                <div className="SearchForm">
                                <div><h2>Login Now As a Professional</h2></div>

                

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <table>
                            <tbody>
                           
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
                                        <input type="password" id="password" placeholder="Enter Your Password" onChange={this.handleChage} required/>
                                    </td>
                                </tr>
                                </tbody>
                                </table>
                                <p style={{color:"red"}} id="error"></p>
                                <div><button id="submit">LOGIN</button></div>
                                <div>
                                  <Link to="/signupstudent">
                                  <button id="submit" style={{marginRight:"5%"}}>New ? Create Account </button>
                                      </Link> 
                                      <Link to="/signincompany">
                                  <button id="submit" style={{marginRight:"5%"}}>Company Login </button>
                                      </Link>  
                                      </div>
                                
                    </div>
                </form>
            </div>
               
               <br></br>
               
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
    signUserIn : (cred) => dispatch(signUserIn(cred)),
    

  }
   }
   const mapStateToProps = (state) =>{
       return{
           auth : state.auth
       }
   }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SignInUser)
