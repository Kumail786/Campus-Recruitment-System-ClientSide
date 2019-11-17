import React, { Component } from 'react'
import Header from '../startingpage/header/title'
import {Button} from 'reactstrap'

import './userdashboard.css'
import {connect} from 'react-redux'
import {applyJob} from '../../store/actions/studentActions/studentActions'
class Viewjob extends Component {

constructor(){
  super()
  



  this.state  = {
    currentuser : null
  };
         


         

         
     }
     
  componentDidMount(){
    if(!this.props.auth.student.profile.experience || !this.props.auth.student.profile.marks || !this.props.auth.student.profile.qualification){
      document.querySelector('#apply').innerHTML = "Update Your Profile First"
      document.querySelector('#apply').style.backgroundColor = "orange"
      document.querySelector('#apply').setAttribute('disabled','disabled')
    }
  }  
   
render(){
  const jobid = window.location.pathname.split('/')[3]
  console.log(jobid)
  this.handleapply = (e)=>{
    e.preventDefault()
    console.log("aa")
    console.log(this.props.auth.student)
    const id = this.props.auth.student._id
    const username = this.props.auth.student.username
    const email = this.props.auth.student.email

    const applicant = {
      _id : id,
      username,
      email
    }
    if((this.props.auth.student.profile.experience || this.props.profile.experience) && (this.props.auth.student.profile.marks || this.props.profile.marks) && (this.props.auth.student.profile.qualification || this.props.profile.qualification)){
this.props.applyJob(jobid,applicant)
document.querySelector('#apply').innerHTML = "Applied Successfully"
}



  }
    
  console.log(this.props.companyjobs)
  const specificjobs = this.props.companyjobs
  console.log(specificjobs)
                return(
                 <div>
                  <div style={{background:"grey"}}><Header/></div>
                  <div style={{width:"auto",margin:"2% 2% 2% 2%"} } id="view">
                    
                    
                    {specificjobs && specificjobs.map(job=>{
                      console.log(job._id)
                      if(job._id == jobid){
                        console.log("hi")
                        return(
                          <div>
                      <div style={{textAlign:"center",padding:"2%"}}>
                      <h5>Job Title : {job.jobtitle}</h5>
                      <p>Minimum Experience : {job.experience}</p>
                      <p>Minimum Qualification : {job.qualification}</p>
                      <p>Salary Range : {job.salaryrange}</p>
                      <p>Company Name : {job.companyname}</p>
                      </div>
                      <Button color="success" style={{width:"50%",margin:"0% 25%"}} onClick={this.handleapply} id="apply">Apply Now</Button></div>)

                                          }
                                           })}</div></div>)}
                

}

const mapStateToProps = (state)=>{
  return{
  companyjobs : state.job.specificjobs,
  auth : state.auth,
  profile : state.auth.profile,
  appliedjob : state.data.appliedjob
}
}

const mapDispatchToProps = (dispatch)=>{
  return{


    applyJob : (id,student) => (dispatch(applyJob(id,student)))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Viewjob)
