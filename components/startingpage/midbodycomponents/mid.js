import React, { Component } from 'react'
import './mid.css'
import Header from '../header/title'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
 class Mid extends Component {
    render() {
        return (

            <div>
                <div className="mid">
                <Header/>
                
                <div style={{padding:"16%"}}>
                <div style={{textAlign:"center"}}><h1 className="content-heading">Welcome To WorkNow</h1></div>
                
                <div style={{textAlign:"center"}}>
                    <h2 className="content">The Talent You Need The Flexiblity You Want </h2>
                    <h4 className="content">WorkNow matches company and highly professional workers  </h4>
                    </div>
                </div>
                </div>
                <div id="mid-content">
                    <h1 className="mid-item mid-item-heading">A Recruitment Plateform</h1>
                    <h3 className="mid-item">Everday Hundreds Of Companies Hires Thousands Of Professionals</h3>
                </div>
                <div id="container">
                    <div className="container-item">Do You Own a Business or Are you a Company Owner and Looking for some Professionals For Your Company? Hire Some Highly Educated Professionals Now<br></br><br></br> <Link to="/signincompany"><Button color="info" style={{width:"100%",height:"8vh"}}>Get Started As a Company</Button></Link></div>
                    <div className="container-item">Have you Completed your Education? Are you skilled Enough to work in a professional Environment? Then WorkNow is the finest Platform to fullfil your needs <br></br><br></br><Link to="/signinstudent"><Button color="success" style={{width:"100%",height:"8vh"}}>Get Started As a Professional</Button></Link>  </div>
                   
                    
               
                    </div>
            </div>
            
            
        )
    }
}
export default Mid;
