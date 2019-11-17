import React, { Component } from 'react'
import Jobs from '../userDashboard/jobslist/jobs'
import {connect} from  'react-redux'
import {specificCompanyJobs} from '../../store/actions/studentActions/studentActions'

 class CompanyJobs extends Component {
    
componentDidMount(){
    const id = this.props.auth.company._id
    this.props.specificCompanyJobs(id)
}
       
    render() {
        const jobs = this.props.specificjobs
        console.log(jobs)
        return(
            <div>
                {jobs && jobs.map(job=>{
                    return(
                        <Jobs job={job}/>
                    )
                })}
            </div>
        )
    }
}
    
   
  const mapDispatchToProps =(dispatch)=>{
      return{
    specificCompanyJobs : (id) =>(dispatch(specificCompanyJobs(id))) 
}
  }  

const mapStateToProps = (state)=>{
    return{
        specificjobs : state.job.specificjobs,
        auth : state.auth,
        deletedjob : state.data.deletedjob
        
        

}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyJobs)
