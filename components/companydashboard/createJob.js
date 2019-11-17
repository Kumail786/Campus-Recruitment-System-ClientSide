import React, { Component } from 'react'
import '../userDashboard/searchForm.css'
import {connect} from 'react-redux'
import {CreateJob} from '../../store/actions/companyActions/companyActions'
import {specificCompanyJobs} from '../../store/actions/studentActions/studentActions'
 class CreateJobs extends Component {
    constructor(){
        super()
        this.state={}  
    }
   
       
    
       

      
    render() {
        console.log(this.props.auth.company._id)
        console.log(this.props.auth.company.companyemail)
        const companyid = this.props.auth.company._id
       const companyname =  this.props.auth.company.companyemail
        this.handleChange=(e)=>{
            this.setState({
                companyid,companyname,
                [e.target.id] : e.target.value})
   
        }
        
        this.handleSubmit = async(e)=>{
            e.preventDefault();
            this.setState({
                companyid,companyname,
                [e.target.id] : e.target.value
            })
            console.log(this.state)
            this.props.CreateJob(this.state)
            const id = this.props.auth.company._id
           await this.props.specificCompanyJobs(id)
            
           
            
         
        }
        return(
            <div>
            <div className="SearchForm">
                                <div><h2>Create A Job For Student</h2></div>

                

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <table>
                            <tbody>
                           
                                <tr>
                                    <td colSpan="2">
                                        <label htmlFor="jobtitle">Job Title</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="text" id="jobtitle" placeholder="Enter Job Title" onChange={this.handleChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <label htmlFor="experience">Required Experience :</label>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td colSpan="2">
                                        <input onChange={this.handleChange} type="text" id="experience"  placeholder="Enter Required Experience" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <label htmlFor="salaryrange">Salary Range:</label>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td colSpan="2">
                                        <input onChange={this.handleChange} type="text" id="salaryrange"placeholder="Enter Salary Range" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <label htmlFor="qualification">Qualification Required:</label>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <input onChange={this.handleChange} type="text" id="qualification"placeholder="Enter Required Qualification" />
                                    </td>
                                </tr>
                                </tbody>
                                </table>
                                
                                <div><button id="submit" >Create Now</button></div>
                                
                                
                    </div>
                </form>
            </div>
           
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        auth : state.auth,
        
        
        
    }
}



const mapDispatchToProps = (dispatch)=>{
    return{
        CreateJob : (data) => dispatch(CreateJob(data)),
        specificCompanyJobs : (id)=>dispatch(specificCompanyJobs(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateJobs)
