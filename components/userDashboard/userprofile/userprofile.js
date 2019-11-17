
import React, { Component } from 'react'
import {Button} from "reactstrap"
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {UpdateProfile} from '../../../store/actions/studentActions/studentActions'
import Header from '../../startingpage/header/title'
import './profile.css'


 class UserProfile extends Component {
     constructor(){
         super()
         this.state  = {};
         this.handlechange = (e)=>{
            this.setState({
                ...this.state,
               [e.target.id] : e.target.value,
               
            })
           
        }
    

this.handleUpdate = (e) =>{
    
e.preventDefault()
this.setState({
    ...this.state,
})

document.querySelector('#update').innerHTML = "Profile Updated Successfully"

const id = window.location.pathname.split('/')[3]
console.log(id)
console.log(this.state)
this.props.UpdateProfile(id,this.state)

        }



        
        }
    componentDidMount(){

        const experience = this.props.auth.student.profile.experience
        const qualification = this.props.auth.student.profile.qualification
        const marks = this.props.auth.student.profile.marks
        console.log(marks)
        this.setState({
            experience,qualification,marks
        })
    }
    render() {
        
        console.log(this.state.marks)
       
        if(!this.props.auth.student) return <Redirect to="/"></Redirect>
        const student = this.props.auth.student
        console.log(this.props.profile)
        if(!this.props.profile){
        return (
            <div id="back1">
                <Header/>
                <hr></hr>
            <div style={{fontSize:"3em",color:"white"}}>
            <div key={student._id}style={{width:"60%",margin:"0 auto"}} >
                               <b>Your Profile Information</b>
                               <hr></hr>
                               <div>Name : {student.username}</div>
                               <form onSubmit={this.handleUpdate}>
                               <div>Qualification: <input onChange={this.handlechange} required type="text" id="qualification" style={{width:"50%",background:"transparent",outline:"none",border:"none",borderBottom:"2px solid"}} value={this.state.qualification}></input></div>
                               <div>Email : {student.email}</div>
                               <div>Experience: <input onChange={this.handlechange} required type="text" id="experience" style={{width:"50%",background:"transparent",outline:"none",border:"none",borderBottom:"2px solid"}} value={this.state.experience}></input></div>
                              <div>Marks: <input type="text" id="marks" required onChange={this.handlechange} style={{width:"50%",background:"transparent",outline:"none",border:"none",borderBottom:"2px solid"}} value={this.state.marks}></input></div>
                              
                               <br></br>
                              <div><Button color="primary" style={{width:"30%"}} type="submit" id="update">Update</Button></div>
                               </form>
                           </div>
                      
                
            </div>
            
            </div>
            
        )}
        else{
            return (
                <div id="back1">
                    <Header/>
                    <hr></hr>
                <div style={{fontSize:"3em",color:"white"}}>
                <div key={student._id}style={{width:"60%",margin:"0 auto"}} >
                                   <b>Your Profile Information</b>
                                   <hr></hr>
                                   <div>Name : {student.username}</div>
                                   <form onSubmit={this.handleUpdate}>
                                   <div>Qualification: <input onChange={this.handlechange} required type="text" id="qualification" style={{width:"50%",background:"transparent",outline:"none",border:"none",borderBottom:"2px solid"}} defaultValue={this.props.profile.qualification}></input></div>
                                   <div>Email : {student.email}</div>
                                   <div>Experience: <input onChange={this.handlechange} required type="text" id="experience" style={{width:"50%",background:"transparent",outline:"none",border:"none",borderBottom:"2px solid"}} defaultValue={this.props.profile.experience}></input></div>
                                  <div>Marks: <input type="text" id="marks" required onChange={this.handlechange} style={{width:"50%",background:"transparent",outline:"none",border:"none",borderBottom:"2px solid"}} defaultValue={this.props.profile.marks}></input></div>
                                  
                                   <br></br>
                                  <div><Button color="primary" style={{width:"30%"}} type="submit" id="update">Update</Button></div>
                                   </form>
                               </div>
                          
                    
                </div>
                
                </div>
                
            ) 
        }
    }
}

const mapStateToProps =(state)=>{
    return{
    auth : state.auth,
    profile : state.auth.profile
    
}
    
}

const mapDispatchToProps = (dispatch)=>{
    return{
UpdateProfile : (id,profile)=>(dispatch(UpdateProfile(id,profile)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)
