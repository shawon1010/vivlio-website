import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import summarize from "../apis/summarize";
import translate from "../apis/translate";

function Paragraph(props) {
    const { h3, h5 } = props;
    const [show, setShow] = useState(false);
    const [language, setLanguage] = useState("es");

    let posth3 = "";
    let posth5 = "";

    // function showText() {
    //     setCategories(true);
    // }

    // function hideText() {
    //     setCategories(false);
    // }

    function translateText() {
        posth3 = translate(h3, language);
        posth5 = translate(h5, language);
    }

    function summarizeText() {
        posth3 = h3;
        posth5 = summarize(h5, 30);
    }

    return (
        <div>
            <h3>{h3}</h3>
            <h5>{h5}</h5>

            <Stack direction="horizontal" gap={3}>
            <Button variant="outline-primary">Summarize</Button>
            <Button variant="outline-secondary">Translate</Button>
            <Dropdown>

{/* Dropdown start from here */}
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Select Language
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Spanish</Dropdown.Item>
    <Dropdown.Item href="#/action-2">French</Dropdown.Item>
    <Dropdown.Item href="#/action-3">German</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Dutch action</Dropdown.Item>
   
  </Dropdown.Menu>
</Dropdown>

</Stack>            


            <button onClick></button>
            {show && <div></div>}
        </div>
    );
}

export default Paragraph;
