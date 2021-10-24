import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import bookImage from "../data/book.png"; 
import jsReact from "../data/react.png"; 
import jsNode from "../data/node.png";
import html from "../data/html5.png";
import rapid from "../data/rapidapi.png";
import octo from "../data/octo.png";

function Footer(){
  return (
    <div style={{backgroundColor: "#E9E9E9", marginTop: "100px", paddingTop: "10px", paddingBottom: "1px", position: "absolute", left: '0', right: '0'}}>
 
  
        
    <Stack gap={2} className="col-md-3 mx-auto">
    <img src = {bookImage} style={{width:'80px', height:'80px', marginLeft:'auto', marginRight:'auto'}}></img>
    <h4 style = {{marginLeft:'auto', marginRight:'auto'}}>Made with ❤️ at <a href="https://2021.hackduke.org/">HackDuke</a></h4>
</Stack>
<Row>
<Col></Col>
<Col xs={7}>
    <p style = {{textAlign: 'center'}}>As our group's first hackathon, HackDuke2021 was an unforgettable experience. The past 36 hours have been incredible fun as well as an invaluable learning expereince. We would like to thank the organizers and sponsors of this event for making this experience possible. </p>
    </Col>
    <Col></Col>
    </Row>
    <Row>
<Col></Col>
<Col xs={7}><p style = {{textAlign: 'center'}}><i>Emily Yagoda, Ritvik Janamsetty, Shawon Chowdhury, and Rebecca Combs</i></p></Col>
<Col></Col>
</Row>
<br/>
<Row style={{textAlign: 'center'}}>
<Col><a href="https://reactjs.org/"><img src={jsReact} style={{width:'140px', height:'100px'}}></img></a></Col>
<Col><a href="https://nodejs.org/en/"><img src={jsNode} style={{width:'140px', height:'85px'}}></img></a></Col>
<Col><a href="https://github.com/rjanamsetty/vivlio.techoct"><img src={octo} style={{width:'90px', height:'90px'}}></img></a></Col>
<Col><a href="https://en.wikipedia.org/wiki/HTML5"><img src={html} style={{width:'100px', height:'90px'}}></img></a></Col>
<Col><a href="https://rapidapi.com/"><img src={rapid} style={{width:'100px', height:'100px'}}></img></a></Col>
</Row>
<br/>
<p style = {{textAlign: 'center'}}><i>HackDuke 2021, All Rights Reserved.</i></p> 

  
</div>
  );
}

export default Footer;