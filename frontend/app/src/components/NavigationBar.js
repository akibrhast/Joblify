import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function NavigationBar(){
  function logout(){
    localStorage.clear();
    console.debug("Should Redirect to homepage")
  }

    return (
    <Navbar bg="dark" variant="dark" className="mb-5">
      <Navbar.Brand href="/">Jobly</Navbar.Brand>
        <Nav className="nav navbar-nav">
        <Nav.Link href="/companies">Companies</Nav.Link>
        <Nav.Link href="/jobs">Jobs</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/logout" onClick={logout}>Logout</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav>

    </Navbar>)



  };

export default NavigationBar;