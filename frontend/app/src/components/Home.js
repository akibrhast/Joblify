import React from 'react';
import NavigationBar from './NavigationBar'
import isLogin from './isLogin'

function Home(){

  return(

    <React.Fragment>
      <NavigationBar/>
      <div className="container pt-5">
        <div class="Home">
          <div class="container text-center">
            <h1 class="mb-4 font-weight-bold">Jobly</h1>
            <p class="lead">All the jobs in one, convenient place.</p>
            {isLogin()?<h2>Welcome Back!</h2>: <a class="btn btn-primary font-weight-bold" href="/login">Log in</a>}
          </div>
        </div>     
    </div>
    </React.Fragment>
  )
}

export default Home;

