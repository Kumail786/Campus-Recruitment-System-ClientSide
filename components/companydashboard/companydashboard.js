import React, { Component } from 'react'
import Header from '../startingpage/header/title'
import CompanyJobs from './companyjobs'
import './companydashboard.css'
import Viewallusers from './viewallusers'
import CreateJobs from './createJob'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
 class Companydashboard extends Component {
    render() {
      
         if(!this.props.auth.company) return <Redirect to="/"></Redirect>
        const companyname = this.props.auth.company.companyname
        return (
            
            <div >
                <div id="back">
                <Header/>
                 <div style={{padding:"10%"}}><h1 style={{textAlign:"center",color:"white",fontSize:"6vmin"}}>Welcome {companyname} To Company Dashboard.<br></br> Create Your New Job To Hire Experts</h1></div>
                </div>
                <hr></hr>
                <CreateJobs/>
                <h2 style={{textAlign:"center"}}>Jobs Posted By You</h2>
                 <CompanyJobs/>
                <hr></hr>
                <h2 style={{textAlign:"center"}}>List Of All Students</h2>
                <div style={{paddingBottom:"2%"}}><Viewallusers/></div>
                
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        auth : state.auth
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Companydashboard)
