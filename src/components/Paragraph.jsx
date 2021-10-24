import React, { useState } from "react";
import summarize from "../apis/summarize";
import translate from "../apis/translate";

function Paragraph(props) {
    const { h3, h5 } = props;
    const [show, setShow] = useState(false);
    const [language, setLanguage] = useState("es");
    const [ph3, setph3] = useState("");

    let posth3 = "";
    let posth5 = "";

    function showText() {
        setShow(true);
    }

    function hideText() {
        setShow(false);
    }

    const translateText = () => {
        setph3(translate(h3, language));
        posth5 = translate(h5, language).translatedText;
        console.log(ph3);
        showText();
    };

    const summarizeText = () => {
        posth3 = h3;
        posth5 = summarize(h5, 50).summary;
        showText();
    };

    const clear = () => {
        posth3 = "";
        posth5 = "";
        hideText();
    };
    const ConsoleLog = ({ children }) => {
        console.log(children);
        return false;
      };

    return (
        <div>
            <h3>{h3}</h3>
            <h5>{h5}</h5>
            <button onClick={summarizeText}>Summarize</button>
            <button onClick={translateText}>Translate</button>
            
              
          

            {show && (
                <div>
                    {ph3.translatedText && <h3>{ph3.translatedText}</h3>}
                    <h5>{posth5}</h5>
                    <button onClick={clear}>Clear</button>
                </div>
            )} 
            {/* <button onClick></button>
            {show && <div></div>} */}
        </div>
    );
}

export default Paragraph;
