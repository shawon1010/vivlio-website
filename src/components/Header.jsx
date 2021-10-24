import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
   
   <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand style = {{fontSize: '34px'}} href="#home">[Βιβλίο]</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Coding</Nav.Link>
      <Nav.Link href="#features">Biology</Nav.Link>
      <Nav.Link href="#pricing">History</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    
           
  );
}

export default Header;
