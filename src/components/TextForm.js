import React, { useState } from 'react'

const TextForm = (props) => {

    const handelUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handelCopyClick = () => {
        let newText = document.getElementById("textArea");
        newText.select();
        document.execCommand('copy')
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handelOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    function wordCounter(text) {
        let wordNumber = text.split(' ').filter(
            function (n) { return n !== ''}
        ).length;
        return wordNumber;
    }
    const[text, setText] = useState("");
    return (
        <>
        <div className="container my-4" style={{color: props.mode==="dark"?"rgb(235 235 235)":"#091921"}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">

            {/* , backgroundColor: props.theme==="purple"?"#091921":"#160821"     */}
            <textarea className="form-control" onChange={handelOnChange} value={text} style={{backgroundColor: props.mode==="dark"?"#091921":"rgb(252 252 252)", color: props.mode==="dark"?"rgb(235 235 235)":"#091921", border: props.mode==="dark"?"1.4px solid #18323e":"1px solid rgb(36 40 44)"}} id="textArea" rows="8"></textarea>
            
            
            <button type="button" className="btn my-3 mx-1" style={{backgroundColor: props.mode==="dark"?"#18323e":"rgb(36 40 44)", color: props.mode==="dark"?"rgb(235 235 235)":"rgb(252 252 252)"}} onClick={handelUpClick} >Convert to Uppercase</button>
            <button type="button" className="btn my-3 mx-1" style={{backgroundColor: props.mode==="dark"?"#18323e":"rgb(36 40 44)", color: props.mode==="dark"?"rgb(235 235 235)":"rgb(252 252 252)"}} onClick={handelLoClick} >Convert to Lowercase</button>
            <button type="button" className="btn my-3 mx-1" style={{backgroundColor: props.mode==="dark"?"#18323e":"rgb(36 40 44)", color: props.mode==="dark"?"rgb(235 235 235)":"rgb(252 252 252)"}} onClick={handelCopyClick} >Copy to Clipboard</button>
            </div>
        </div>
        <div className="container" style={{color: props.mode==="dark"?"rgb(235 235 235)":"#091921"}}>
            <h4>Text Summary</h4>
            <p>{wordCounter(text)} words and {text.length} characters</p>
            <h4>Estimated Reading time</h4>
            <p>{(0.004 * wordCounter(text)).toPrecision(2)} minutes</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm;
