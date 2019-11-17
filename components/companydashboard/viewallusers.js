import React, { Component } from 'react'
import {allStudents} from '../../store/actions/companyActions/companyActions'
import {connect} from 'react-redux'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'



 class Viewallusers extends Component {
     
     
     componentDidMount(){
        this.props.allStudents()
     }
    render() {
        const allstudents = this.props.users
console.log(allstudents)
console.log(typeof allstudents)
    const stylecard = {
        
        
        display : "flex",
        flexWrap: "wrap",
        alignContent: "space-between",
        
       
        
       
       
    }
    const style = {
      
      
     width : "340px",
      border : "1px solid black",
      marginLeft : "2%",
      marginTop : "2%",
      padding : "1% 1%"
      
      
     


    }
    
    return(
        
        <div style={stylecard}>
             {allstudents && allstudents.map(student=>{
                return(
                    <div style={style} id={student._id}>
                       <p>Name : {student.username}</p>
                       <p>Email : {student.email}</p>
                        {student.profile.qualification ? <p> Qualification :{student.profile.qualification}</p> : <p> Qualification : Not Updated Yet</p>}
                        <Link to={"/student/view/" + student._id}><Button color="success">View Student Profile</Button></Link>
                    </div>
                )
            })}
        </div>
    )
    



}
}
    

const mapStateToProps = (state) =>{
    return{
       users : state.data.users
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        allStudents : ()=>(dispatch(allStudents()))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Viewallusers)
