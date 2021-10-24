import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import biologyBookCover from "../data/biology-book-cover.png";
import cPlusPlusBookCover from "../data/cplusplus-book-cover.svg";
import historyBookCover from "../data/history-book-cover.png";
import Footer from "./Footer";
import Header from "./Header"

function Homepage() {
  return (
    <div>
      <div className="wrapper">
<Header />
</div>
  <Container> 
  <br/>
<Row>
  <Col><h1 style={{fontSize: '60px'}}>
  <br/>
  <br/>
    Learn <mark style={{backgroundColor: "#FFFC78"}}>Better</mark> <br/>
    Understand <i>Faster</i>
    </h1></Col>
  <Col>
<iframe width="100%"
height = "400px"
src="https://widgets.judge0.com?widgetId=kxw3&theme=dark&language=optional">
</iframe>

</Col>
</Row>
<Row style={{   marginTop: '60px'}}>
  <Col>
  
  <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={cPlusPlusBookCover} />
<Card.Body>
  <Card.Title>Computer Science 250</Card.Title>
  <Card.Text>
    Textbook covering the material in CS250. 
  </Card.Text>
  <a href= "/cs"><Button variant="primary">Click here</Button></a>
</Card.Body>
</Card>  
  </Col>
  <Col> <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={biologyBookCover} />
<Card.Body>
  <Card.Title>Neuroscience 101</Card.Title>
  <Card.Text>
    Textbook covering the content in Neuro101 Spring. 
  </Card.Text>
  <a href= "/neuroscience"><Button variant="primary">Click here</Button></a>
</Card.Body>
</Card></Col>
  <Col> <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={historyBookCover} />
<Card.Body>
  <Card.Title>American History 202</Card.Title>
  <Card.Text>
    Textbook covering the content in AH202. 
  </Card.Text>
  <a href= "/history"><Button variant="primary">Click here</Button></a>
</Card.Body>
</Card></Col>
</Row>
<Footer/>
</Container>

  
  </div>   
    
           
  );
}

export default Homepage;
