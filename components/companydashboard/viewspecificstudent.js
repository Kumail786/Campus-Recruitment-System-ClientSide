import React, { Component } from 'react'
import {connect} from 'react-redux'
import {specificStudent} from '../../store/actions/companyActions/companyActions'
import Header from '../startingpage/header/title'

 class Viewspecificstudent extends Component {
     componentDidMount(){
         const id = window.location.pathname.split('/')[3]
         this.props.specificStudent(id)
         
         
     }
    render() {
        const student = this.props.student
        console.log(student)
        
if(student && student.profile){
        return (
            <div>
                <div style={{background:"grey"}}><Header/></div>
                
                <div style={{width:"60%",margin:"0 auto",border:"2px solid black",padding:"3%"}} className="container">
                    
                    <h1 className="container-heading" style={{fontSize:"4vmin"}}>Profile Information Of {student.username}</h1>
                    <hr></hr>
                <h2 className="container-item" style={{fontSize:"4vmin"}}>Name : {student.username}</h2>
                       <h2 className="container-item" style={{fontSize:"4vmin"}}>Email : {student.email}</h2>
                        {student.profile.qualification ? <h2 className="container-item" style={{fontSize:"4vmin"}}> Qualification :{student.profile.qualification}</h2> : <h2 className="container-item"  style={{fontSize:"4vmin"}}> Qualification : Not Updated Yet</h2>}
                        {student.profile.experience ? <h2 className="container-item"  style={{fontSize:"4vmin"}}> Experience :{student.profile.experience}</h2> : <h2 className="container-item"  style={{fontSize:"4vmin"}}> Experience : Not Updated Yet</h2>}
                        {student.profile.marks ? <h2 className="container-item"  style={{fontSize:"4vmin"}}> Marks :{student.profile.marks}</h2> : <h2 className="container-item"  style={{fontSize:"4vmin"}}> Marks : Not Updated Yet</h2>}
                </div>
            </div>
        )
    }
    else{
        return null
    }
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        specificStudent : (id)=>(dispatch(specificStudent(id)))
    }
}
const mapStateToProps = (state)=>{
    return{
        student : state.job.specificuser
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Viewspecificstudent)
