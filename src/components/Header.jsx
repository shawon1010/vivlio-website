import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Header() {
  return (
   
   <>
   
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand style = {{fontSize: '34px'}} href="/">[Vιvλίο]</Navbar.Brand>
    <Nav className="me-auto">
     
    <Link to="/cs"  style={{
                color: `white`,
                textDecoration: `none`, marginRight: `10px`
              }}>
             Computer Science
             </Link>
             <Link to="/neuroscience"  style={{
                color: `white`,
                textDecoration: `none`, marginRight: `10px`
              }}>
             Neuroscience
             </Link>
             <Link to="/history"  style={{
                color: `white`,
                textDecoration: `none`,marginRight: `10px`
              }}>
             History
             </Link>
     
    
    </Nav>
    </Container>
  </Navbar>
 
</>
    
           
  );
}

export default Header;
