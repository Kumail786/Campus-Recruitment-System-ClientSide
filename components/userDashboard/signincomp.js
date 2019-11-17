import React, {Component} from 'react'
import './searchForm.css'
import {Link,Redirect} from 'react-router-dom'
import {signCompanyIn} from '../../store/actions/authActions/authActions'
import {connect} from 'react-redux'
import Header from '../startingpage/header/title'
class SignInCompany extends Component{
constructor(){
    super()
    this.state = null
   
   
    this.handlecompChange=(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })

    } 
   
    

    this.handlecompSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.id] : e.target.value
        })
        console.log(this.state)
        const companyemail = this.state.email;
        const companypassword = this.state.password;
        
   
    this.props.signCompanyIn({companyemail,companypassword})
    }


    }






   
    render(){
        if(this.props.auth.message){
            document.querySelector('#error').innerHTML = this.props.auth.message
            console.log(this.props.auth.message)
        }
        
        const iscompany = this.props.auth.company
        console.log(this.props)
        
       
        if(iscompany) return <Redirect to='/companydashboard'></Redirect>
        return(
            
            <div>
              <div style={{backgroundColor:"grey"}}><Header/></div>
            <div className="SearchForm">
                                <div><h2>Login Now As a Company</h2></div>

                

                <form onSubmit={this.handlecompSubmit}>
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
                                        <input type="email" id="email" placeholder="Enter Your Email" onChange={this.handlecompChange} required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <label htmlFor="password">Password</label>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td colSpan="2">
                                        <input type="password" id="password" placeholder="Enter Your Password" onChange={this.handlecompChange} required/>
                                    </td>
                                </tr>
                                </tbody>
                                </table>
                                <p style={{color:"red"}} id="error"></p>
                                <div><button id="submit">LOGIN</button></div>
                                <div>
                                  <Link to="/signupcompany">
                                  <button id="submit" style={{marginRight:"5%"}}>New ? Create Account </button>
                                      </Link>  
                                      </div>
                                   
                                
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
  

const mapDispatchToProps = (dispatch) =>{
    return{
    
    signCompanyIn : (cred) => dispatch(signCompanyIn(cred))

  }
   }
   const mapStateToProps = (state) =>{
       return{
           auth : state.auth
       }
   }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SignInCompany)