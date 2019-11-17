import React, { Component } from 'react'
import Header from '../startingpage/header/title'

import Jobs from './jobslist/jobs'
import {connect} from 'react-redux'
import {specificCompanyJobs} from '../../store/actions/studentActions/studentActions'
 class Viewcompanyjob extends Component {

    constructor(){
        super()
        this.state  = [];
        




    }
    
    componentDidMount(){
const companyid = window.location.pathname.split('/')[2]
this.props.specificCompanyJobs(companyid)
    }
    
    render() {
        const companyjobs = this.props.companyjobs
        
      

        
        return (
            <div>
                
                <div style={{backgroundColor:"grey"}}><Header/></div>
                <div><h3 style={{textAlign:"center"}}>Jobs You can Apply</h3></div>
                {companyjobs && companyjobs.map(job=>{
                    
                    return <Jobs job={job}/>
                })}
                
              
               
            </div>
        )
    }
}



const mapStateToProps = (state)=>{
    return{
companyjobs : state.job.specificjobs,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
specificCompanyJobs : (id) => dispatch(specificCompanyJobs(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Viewcompanyjob)
