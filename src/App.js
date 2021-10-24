import React from 'react';
import Button from 'react-bootstrap/Button';
//bootstrap components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//custom components
import Header from './components/Header';
import biologyBookCover from "./data/biology-book-cover.png";
//images
import cPlusPlusBookCover from "./data/cplusplus-book-cover.svg";
import historyBookCover from "./data/history-book-cover.png";


function App() {
  return (
    <div>
      <Header/>
     
    <Container> 
    <br/>
  <Row>
    <Col><h1>
      
      Learn Better <br/>
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
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


    
    
    
    
    
    </Col>
    <Col> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={biologyBookCover} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
    <Col> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={historyBookCover} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
  </Row>
</Container>
    
    </div>             
  );
}

export default App;
