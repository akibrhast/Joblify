import React from 'react';
import isLogin from './isLogin'

function NavigationBar(){
  const navStyle =     {boxShadow: "0 0 12px #288e68"}


  function logout(){
    localStorage.clear();
    console.debug("Should Redirect to homepage")
  }

    return (
    
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={navStyle}>
    <a className="navbar-brand" href="/">Jobly</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
    </div>

  </nav>
    
    )



  };

export default NavigationBar;