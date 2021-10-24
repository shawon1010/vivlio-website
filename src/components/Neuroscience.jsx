import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Row from 'react-bootstrap/Row';
import Sidebar from "./Sidebar";


const popover1 = (
    <Popover id="popover-basic-1">
      <Popover.Header as="h3">Neuron</Popover.Header>
      <Popover.Body>
        Neurons, also known as nerve cells, send and receive signals from your brain.
      </Popover.Body>
    </Popover>
  );
  
  const Example1 = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
      <Button style={{margin: "20px"}} variant="danger">Neuron</Button>
    </OverlayTrigger>
  );

  const popover2 = (
    <Popover id="popover-basic-2">
      <Popover.Header as="h3">Synapse</Popover.Header>
      <Popover.Body>
        A structure that permits a neuron (or nerve cell) to pass an electrical or chemical signal to another neuron or to the target effector cell.
      </Popover.Body>
    </Popover>
  );
  
  const Example2 = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
      <Button style={{margin: "20px"}} variant="success">Synapse</Button>
    </OverlayTrigger>
  );

  const popover3 = (
    <Popover id="popover-basic-3">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  
  const Example3 = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
      <Button style={{margin: "20px"}} variant="warning">Axon</Button>
    </OverlayTrigger>
  );




function Neuroscience() {
  return (
   <>

<Row  >
    <Col sm={4}><Sidebar/></Col>
    <Col className="justify-content-md-center" sm={8}><Example1 />
<Example2 />
<Example3 />
<iframe width="525" height="420" src="https://sketchfab.com/models/f201c8699b7f4f1dad569783d86ec41f/embed?autostart=1&amp;camera=0&amp;preload=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></Col>
  </Row>
 



</>
           
  );
}

export default Neuroscience;
