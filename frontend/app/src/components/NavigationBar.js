import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const NavigationBar = () => (
    
    <Navbar bg="dark" variant="dark" className="mb-5">
      <Navbar.Brand href="/">Jobly</Navbar.Brand>
        <Nav className="nav navbar-nav">
        <Nav.Link href="/companies">Companies</Nav.Link>
        <Nav.Link href="/jobs">Jobs</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/logout">Logout</Nav.Link>
        <Nav.Link href="/profile">Register</Nav.Link>
      </Nav>

    </Navbar>



);

export default NavigationBar;