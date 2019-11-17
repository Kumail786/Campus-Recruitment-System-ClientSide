import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div style={{margin:"10% auto",padding:"5%"}}>
                <h1 style={{textAlign:"center",color:"white"}}>Get a Job in 3 Steps</h1>
                <hr></hr>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div style={{margin:"0 auto",border:"2px solid white",padding:"3%",width:"350px"}}><h3 style={{color:"white"}}>Identify Company</h3>
                    <div><h5 style={{color:"white"}}>Identify the Best Companies around<br></br> the Globe and Reach them Out</h5></div>
                    </div>
                    <div style={{margin:"0 auto",border:"2px solid white",padding:"3%",width:"350px"}}><h3 style={{color:"white"}}>Search Job</h3>
                    <div><h5 style={{color:"white"}}>Find Best Jobs<br></br>According to Your Qualifications</h5></div>
                    </div>
                    <div style={{margin:"0 auto",border:"2px solid white",padding:"3%",width:"350px"}}><h3 style={{color:"white"}}>Apply</h3>
                    <div><h5 style={{color:"white"}}>Apply For your Job by sending<br></br>application requests and other Details</h5></div>
                    </div>
                </div>
            </div>
        )
    }
}
