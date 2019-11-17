import React, { Component } from 'react'
import Header from '../startingpage/header/title'
import Allcompanies from './companiesList/allcompanies'
import './userdashboard.css'
import {connect} from 'react-redux'
import Content from './content'
import {gettingCompanies} from '../../store/actions/companyActions/companyActions'
import {Redirect,Link} from 'react-router-dom'


 class Userdashboard extends Component {
componentDidMount() {
    this.props.gettingCompanies()
  } 

    render() {
       
    console.log(this.props)
    const companies = this.props.companies
    console.log(companies)
    console.log(this.props)
     const id = this.props.auth.student._id
   
  
     if(!this.props.auth.student) return <Redirect to="/"></Redirect>
        
        return (
            <div>
                <div id="background">
                <Header/>
              
                
               <Content/>
                </div>
               
                <div style={{textAlign:"center",marginTop:"2%",}}>
          <span><h3>Here is the List of All Companies Hiring Students. Make Sure to Complete Your Profile Before Applying</h3></span>
          <div style={{textAlign:"center",margin:"2% 0"}}><Link to={'/student/profile/' + id}><h4 style={{color:"red"}}>Update Your Profile</h4></Link></div>
           </div>
           <hr></hr>
             <Allcompanies companies = {companies}/>
               
               <hr></hr>
                
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        gettingCompanies : () => dispatch(gettingCompanies())
    }
}

const mapStateToProps = (state) =>{
    return{
       
        companies : state.data.companies,
        auth : state.auth
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Userdashboard)