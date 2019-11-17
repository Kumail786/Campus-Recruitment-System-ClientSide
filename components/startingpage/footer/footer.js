import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const style = {
            width:"100%",
            fontSize : "2em",
            textAlign : "center",
            padding : "0.75%",
            color: "white"
  
        }
        const footer = {
            width: "100%",
            height : "3em",
            marginTop: "2%",
            
            
        }
        return (
            <div className="footer-main" style = {footer}>
        
            <div className="footer" style= {style}>Recruite-Now &copy; 2019 <br></br>Created By: Kumail Rawjani</div>
            
          </div>
        )
    }
}
