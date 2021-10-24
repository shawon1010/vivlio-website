import React, { useState } from "react";
import summarize from "../apis/summarize";
import translate from "../apis/translate";

function Paragraph(props) {
    const { h3, h5 } = props;
    const [show, setShow] = useState(false);
    const [language, setLanguage] = useState("es");

    let posth3 = "";
    let posth5 = "";

    function showText() {
        setCategories(true);
    }

    function hideText() {
        setCategories(false);
    }

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
            <button onClick></button>
            {show && <div></div>}
        </div>
    );
}

export default Paragraph;
