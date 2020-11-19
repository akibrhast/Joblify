import React from 'react';
import Home from './Home';
import Jobs from './Job/Jobs';
import Companies from './Company/Companies';
import Company from './Company/CompanyJob';
import Profile from './Profile/Profile'
import RegistrationForm from './Forms/RegistrationForm';
import LoginForm from './Forms/Loginform';
import PrivateRoute from './PrivateRoute';

function NavigationBar(){
  const TOKEN_KEY = '_token';

  const isLogin = () => {
      if (localStorage.getItem(TOKEN_KEY)) {
          return true;
      }}
  function logout(){
    localStorage.clear();
    console.debug("Should Redirect to homepage")
  }
  const loggedInComponents=``
  const loggedOutComponents = ``
    return (
    
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
    <a className="navbar-brand" href="/">Jobly</a>
    
      <ul className="nav navbar-nav ml-auto">

            {isLogin()? 
              <React.Fragment>
                <li className="nav-item mr-4">  <a class=" nav-link" href="/jobs">Jobs</a></li>
                <li className="nav-item mr-4">  <a class=" nav-link" href="/companies">Companies</a></li>
                <li className="nav-item mr-4">  <a class=" nav-link" href="/profile">Profile</a></li>
                <li className="nav-item mr-4">  <a class=" nav-link" href="/" onClick={logout}>Logout</a></li>
              </React.Fragment>
            :
              <React.Fragment>
              <li className="nav-item mr-4">  <a class=" nav-link" href="/login">Login</a></li>
              <li className="nav-item mr-4">  <a class=" nav-link" href="/register">Register</a></li>
              </React.Fragment>

            }


      </ul>

  </nav>
    
    )



  };

export default NavigationBar;