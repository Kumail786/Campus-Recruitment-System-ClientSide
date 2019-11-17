import React, { Component } from 'react'
import Company from './companies'

export default class Allcompanies extends Component {
    render() {
        const {companies} = this.props;
        return (
            
            <div>
                <div>
                
             {companies && companies.map(company =>{
                return(
                    
                   
                    
        <div id="data"> <Company company = {company} key={company._id}/></div>
       
                )
            })} 
               
                
            </div>
            </div>
        
        )
    }
}
