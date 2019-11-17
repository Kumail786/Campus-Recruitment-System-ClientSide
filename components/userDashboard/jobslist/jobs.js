import React, { Component } from 'react'
import './jobs.css'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteJob} from '../../../store/actions/companyActions/companyActions'
import {specificCompanyJobs} from '../../../store/actions/studentActions/studentActions'
class Jobs extends Component{
  render(){
    const {job} = this.props
    
const jobid = job._id


this.handleDelete = async()=>{
 this.props.deleteJob(jobid)
await this.props.specificCompanyJobs(this.props.auth.company._id)
console.log(this.props.specificjobs)
}



console.log("aa to gya hai")
    
    const style = {
      
      
      
      marginTop : "2%",
     


    }
   
        return(
          
<div key = {job._id} id="data">
 
        <div id="job">
     <div className="data" style={style}>
     
       <div className="data-details" style={{color:"black"}}>
         <h5 className="data" style={{textTransform:"capitalize"}}>Job Title:<br></br> {(job.jobtitle)}</h5>
         <p className="data" style={{textTransform:"capitalize"}}>Experience:{job.experience}</p>
        <p className="data" style={{textTransform:"capitalize"}}>Qualification:{job.qualification}</p>
        
         
       </div>
       
       
       <div>{this.props.auth.student ?<div><Link to={"/job/view/" + job._id}><Button color="success" style={{width:"100%"}}>View Job</Button> </Link></div> :<div><Link to={"/job/applications/" + job._id}><Button color="success" style={{width:"100%"}}>View Applicants</Button></Link><br></br><Button color="danger" style={{width:"100%"}} onClick={this.handleDelete}>Delete</Button></div> 
        }</div>
   
     </div>
    

     </div>
     </div>
        )
}

}
const mapStateToProps =(state)=>{
  return{
  auth : state.auth,
  specificjobs : state.alljobs
  
}
  
}

const mapDispatchToProps = (dispatch)=>{
  return{
    deleteJob : (id)=>(dispatch(deleteJob(id))),
    specificCompanyJobs :(id)=>(dispatch(specificCompanyJobs(id)))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Jobs)
