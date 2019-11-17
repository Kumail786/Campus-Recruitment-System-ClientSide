import React,{Component} from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {SignoutAction} from '../../../store/actions/authActions/authActions'
class Header extends Component {

   render(){
const student = this.props.auth.student || this.props.auth.username
const company = this.props.auth.company || this.props.auth.companyname



      return (

         <nav>
             
                 <ul className="menu" style={{height:"auto"}}>
                 <Link to="/"><li className="item">Home</li></Link>
                 {company ? <Link to="/companydashboard"><li className="item">CompanyDasboard</li></Link> : null}
                 {student ? <Link to="/userdashboard"><li className="item">Student Dashboard</li></Link> : null}
                 {!student && !company ? <Link to="/signinstudent"><li className="item">Get Started</li></Link> : null}
                    {student || company ? <Link to="/" onClick={this.props.SignoutAction}><li className="item">LogOut</li></Link> : null}
                    
                    
                 </ul>
             
         </nav>
        );
   }
}

    
const mapStateToProps = (state)=>{
   return{
      auth : state.auth
   }
}
const mapDispatchToProps = (dispatch)=>{
   return{
SignoutAction :  ()=>dispatch(SignoutAction())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
