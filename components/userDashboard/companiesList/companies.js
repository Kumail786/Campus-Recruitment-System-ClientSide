import React from 'react'
import '../jobslist/jobs.css'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
const Company = ({company}) => {
 
    const stylecard = {
        
        
        marginTop : "3%",
       border : "1px solid black",
        padding: "1% 3%",
       
       
    }
    const style = {
      
      
      
      marginTop : "2%",
     


    }
    return (
      <div>
        <div id="job" style={stylecard}>
     <div className="data" style={style}>
     
       <div className="data-details" style={{color:"black"}}>
         <h5 className="data" style={{textTransform:"capitalize"}}>Company Name:<br></br><br></br> <b>{(company.companyname)}</b></h5>
         <hr></hr>
         <p className="data">Email : {company.companyemail}</p>
        
        
         
       </div>
      
     </div>
     <div style={{padding : "1% 5%"}}>     <Link to={"/company/" + company._id }><Button color="primary" style={{width:"50%"}}>View Jobs</Button></Link></div>

     </div>
     </div>
     
    )
}

export default Company;