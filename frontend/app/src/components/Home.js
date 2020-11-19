import React from 'react';
import NavigationBar from './NavigationBar'


function Home(){
  return(
    <React.Fragment>
      <NavigationBar/>
      <div className="container">
      <h1>This is the homepage with just home message</h1>
    </div>
    </React.Fragment>
  )
}

export default Home;