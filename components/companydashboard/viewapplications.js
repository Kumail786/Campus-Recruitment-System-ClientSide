import React, { Component } from 'react'
import {connect} from  'react-redux'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import Header from '../startingpage/header/title'
import {applicants} from '../../store/actions/companyActions/companyActions'


 class ViewApplications extends Component {
    
    componentDidMount(){
        const id = window.location.pathname.split('/')[3]
        console.log(id)
        this.props.applicants(id)
        

    }

       
    render() {
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
        console.log(this.props.applications)
        const applicants = this.props.applications
       
         return(<div>
             
            <div style={{background:"grey"}}><Header/></div>
            <h3 style={{textAlign:"center"}}>List Of Applicants For The Job</h3>
            <div style={stylecard}>
            {applicants && applicants.map(applicant=>{
                return(
                    
                    <div  id={applicant._id} style={style}>
                       
                       <p>Name : {applicant.username}</p>
                       <p>Email : {applicant.email}</p>
                        <Link to={"/student/view/" + applicant._id}><Button style={{background:"orange"}}>View Student Profile</Button></Link>
                    </div>
                )
            })}
            </div>
        </div>)
        }
    }

    
   
  const mapDispatchToProps =(dispatch)=>{
      return{
    applicants : (id)=>(dispatch(applicants(id)))
}
  }  

const mapStateToProps = (state)=>{
    return{
        
        auth : state.auth,
        applications : state.data.applicants

}
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewApplications)