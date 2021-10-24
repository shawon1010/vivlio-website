import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
   
   <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand style = {{fontSize: '34px'}} href="/">[Vιvλίο]</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/cs">Computer Science</Nav.Link>
      <Nav.Link href="/neuroscience">Neuroscience</Nav.Link>
      <Nav.Link href="/history">History</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    
           
  );
}

export default Header;
