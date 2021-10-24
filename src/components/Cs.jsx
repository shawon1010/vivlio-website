import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Sidebar from "./Sidebar";



function Cs() {
  return (
   <>
<Row  >
    <Col sm={3}><Sidebar/></Col>


    <Col sm={8}>
        <h3> Intro to Computer Science</h3>
    <h5>The field of knowledge described in this book is
neuroscience, the multidisciplinary sciences that analyze
the nervous system to understand the biological basis
for behavior. Modern studies of the nervous system
have been ongoing since the middle of the nineteenth
century. Neuroanatomists studied the brain’s shape,
its cellular structure, and its circuitry; neurochemists
studied the brain’s chemical composition, its lipids
and proteins; neurophysiologists studied the brain’s
bioelectric properties; and psychologists and neuropsychologists 
investigated the organization and
neural substrates of behavior and cognition.</h5>


<Stack gap={1} >          
<h3> Brain Anatomy</h3>
    <h5>The field of knowledge described in this book is
neuroscience, the multidisciplinary sciences that analyze
the nervous system to understand the biological basis
for behavior. Modern studies of the nervous system
have been ongoing since the middle of the nineteenth
century. Neuroanatomists studied the brain’s shape,
its cellular structure, and its circuitry; neurochemists
studied the brain’s chemical composition, its lipids
and proteins; neurophysiologists studied the brain’s
bioelectric properties; and psychologists and neuropsychologists 
investigated the organization and
neural substrates of behavior and cognition.</h5>
</Stack>

</Col>




  </Row>
 



</>
           
  );
}

export default Cs;
