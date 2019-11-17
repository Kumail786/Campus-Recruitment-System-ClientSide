import React from 'react';
import './App.css';
import Starting from './components/startingpage/starting'
import UserDashboard from './components/userDashboard/userdashboard'
import Viewjob from './components/userDashboard/viewjob'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Companydashboard from './components/companydashboard/companydashboard';
import Viewcompanyjob from './components/userDashboard/viewcompanyjob';
import SignInUser from './components/userDashboard/signinstudent'
import SignInCompany from './components/userDashboard/signincomp'
import SignUpAuth from './components/userDashboard/signupstudent'
import UserProfile from './components/userDashboard/userprofile/userprofile'

import viewspecificstudent from './components/companydashboard/viewspecificstudent';
import viewapplications from './components/companydashboard/viewapplications';
import signupstudent from './components/userDashboard/signupstudent';
import signupcomp from './components/userDashboard/signupcomp';




function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <div>
      <Switch>
        <Route exact path="/" component={Starting}></Route>
        <Route path='/signinstudent' component={SignInUser}></Route>
        <Route path='/signincompany' component={SignInCompany}></Route>
        <Route path='/signupstudent' component={signupstudent}></Route>
        <Route path='/signupcompany' component={signupcomp}></Route>
        <Route path='/signup' component={SignUpAuth}></Route>
     <Route path="/userDashboard" component={UserDashboard}></Route>
     <Route path="/company/:id" component={Viewcompanyjob}></Route>
     <Route path="/job/view/:id" component={Viewjob}></Route>
     <Route path="/student/view/:id" component={viewspecificstudent}></Route>
     <Route path="/job/applications/:id" component={viewapplications}></Route>
      <Route path="/student/profile/:id" component={UserProfile}></Route>
     <Route path="/companydashboard" component={Companydashboard}></Route>
      </Switch>

      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
