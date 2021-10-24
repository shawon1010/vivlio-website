import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Sidebar from "./Sidebar";

function History() {
  return (
   <>
   <div className="wrapper">
<Header />
</div>
<Row  >
    <Col sm={3}><Sidebar/></Col>

    <Col sm={8}>
    <br />
          <h2>American History: Advanced Concepts</h2>
          <p>Content sourced from <a href="https://openstax.org/details/books/us-history">OpenStax US History</a>.</p>
          <br />
    <h5>U.S. History is designed to meet the scope and sequence requirements of most introductory 
      courses. The text provides a balanced approach to U.S. history, considering the people, 
      events, and ideas that have shaped the United States from both the top down (politics, 
      economics, diplomacy) and bottom up (eyewitness accounts, lived experience). U.S. History 
      covers key forces that form the American experience, with particular attention to issues of 
      race, class, and gender.</h5>
      <br/>
      <h5>Capitol Dome (Washington DC)</h5>
      <iframe width="100%" height="400px" src="https://sketchfab.com/models/0c84ca004b034553a6841051ffabf662/embed"> </iframe>
      <br/><br/><br/>
      <h3>America's War for Independence (1775-1783)</h3>
      <h5>By the 1770s, Great Britain ruled a vast empire, with its American colonies producing 
        useful raw materials and profitably consuming British goods. From Britain’s perspective, 
        it was inconceivable that the colonies would wage a successful war for independence; in 
        1776, they appeared weak and disorganized, no match for the Empire. Yet, although the 
        Revolutionary War did indeed drag on for eight years, in 1783, the thirteen colonies, 
        now the United States, ultimately prevailed against the British.</h5><br/>
        <h5>The Revolution succeeded because colonists from diverse economic and social 
          backgrounds united in their opposition to Great Britain. Although thousands of 
          colonists remained loyal to the crown and many others preferred to remain neutral, 
          a sense of community against a common enemy prevailed among Patriots. The signing 
          of the Declaration of Independence exemplifies the spirit of that common 
          cause. Representatives asserted: “That these United Colonies are, and of Right ought 
          to be Free and Independent States; that they are Absolved from all Allegiance to the British 
          Crown, and for the support of this Declaration, we mutually pledge to each other 
          our Lives, our Fortunes and our sacred Honor.”</h5>
</Col>
  </Row>
</>
           
  );
}

export default History;
