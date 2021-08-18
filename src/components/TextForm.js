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
        alert("Copied the text: " + newText.value);
    }
    const handelOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const[text, setText] = useState("");
    return (
        <>
        <div className="container my-4">
            <h3>{props.heading}</h3>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} id="textArea" rows="8"></textarea>
            <button type="button" className="btn btn-dark my-3" onClick={handelUpClick} >Convert to Uppercase</button>
            <button type="button" className="btn btn-dark my-3 mx-3" onClick={handelLoClick} >Convert to Lowercase</button>
            <button type="button" className="btn btn-dark my-3" onClick={handelCopyClick} >Copy to Clipboard</button>
            </div>
        </div>
        <div className="container">
            <h4>Text Summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h4>Estimated Reading time</h4>
            <p>{0.004 * text.split(" ").length} minutes</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm;
