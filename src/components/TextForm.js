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
    function setTextAreaBcg(mode, theme){
        if(mode ==="dark" && theme==="green"){
            var color="#08210b"
        }
        else if(mode ==="dark" && theme==="purple"){
            color="#160821"
        }
        else if(mode ==="dark" && theme==="magenta"){
            color="#21081c"
        }
        else if(mode ==="dark" && theme==="default"){
            color="#091921"
        }
        else if(mode ==="light"){
            color="rgb(252 252 252)"
        }
        return color;
    }
    function setBtnBcg(mode, theme){
        if(mode ==="dark" && theme==="green"){
            var color="#0d3b12"
        }
        else if(mode ==="dark" && theme==="purple"){
            color="#33124d"
        }
        else if(mode ==="dark" && theme==="magenta"){
            color="#4a123f"
        }
        else if(mode ==="dark" && theme==="default"){
            color="#18323e"
        }
        else if(mode ==="light"){
            color="rgb(36 40 44)"
        }
        return color;
    }
    function setTextAreaBorder(mode, theme){
        if(mode ==="dark" && theme==="green"){
            var color="1px solid #0d3b12"
        }
        else if(mode ==="dark" && theme==="purple"){
            color="1px solid #33124d"
        }
        else if(mode ==="dark" && theme==="magenta"){
            color="1px solid #4a123f"
        }
        else if(mode ==="dark" && theme==="default"){
            color="1px solid #18323e"
        }
        else if(mode ==="light"){
            color="1px solid rgb(36 40 44)"
        }
        return color;
    }
    const[text, setText] = useState("");
    return (
        <>
        <div className="container my-4" style={{color: props.mode==="dark"?"rgb(235 235 235)":"#091921"}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">

            {/* , backgroundColor: props.theme==="purple"?"#091921":"#160821"     */}
            {/* <textarea className="form-control" onChange={handelOnChange} value={text} style={{backgroundColor: props.mode==="dark"?"#091921":"rgb(252 252 252)", color: props.mode==="dark"?"rgb(235 235 235)":"#091921", border: props.mode==="dark"?"1.4px solid #18323e":"1px solid rgb(36 40 44)"}} id="textArea" rows="8"></textarea> */}
            <textarea className="form-control" onChange={handelOnChange} value={text} style={{backgroundColor: setTextAreaBcg(props.mode, props.theme), color: props.mode==="dark"?"rgb(235 235 235)":"#091921", border: setTextAreaBorder(props.mode, props.theme)}} id="textArea" rows="8"></textarea>
            
            
            {/* <button type="button" className="btn my-3 mx-1" style={{backgroundColor: props.mode==="dark"?"#18323e":"rgb(36 40 44)", color: props.mode==="dark"?"rgb(235 235 235)":"rgb(252 252 252)"}} onClick={handelUpClick} >Convert to Uppercase</button> */}
            <button type="button" className="btn my-3 mx-1" style={{backgroundColor: setBtnBcg(props.mode, props.theme), color: props.mode==="dark"?"rgb(235 235 235)":"rgb(252 252 252)"}} onClick={handelUpClick} >Convert to Uppercase</button>
            {/* <button type="button" className="btn my-3 mx-1" style={{backgroundColor: props.mode==="dark"?"#18323e":"rgb(36 40 44)", color: props.mode==="dark"?"rgb(235 235 235)":"rgb(252 252 252)"}} onClick={handelLoClick} >Convert to Lowercase</button> */}
            <button type="button" className="btn my-3 mx-1" style={{backgroundColor: setBtnBcg(props.mode, props.theme), color: props.mode==="dark"?"rgb(235 235 235)":"rgb(252 252 252)"}} onClick={handelLoClick} >Convert to Lowercase</button>
            {/* <button type="button" className="btn my-3 mx-1" style={{backgroundColor: props.mode==="dark"?"#18323e":"rgb(36 40 44)", color: props.mode==="dark"?"rgb(235 235 235)":"rgb(252 252 252)"}} onClick={handelCopyClick} >Copy to Clipboard</button> */}
            <button type="button" className="btn my-3 mx-1" style={{backgroundColor: setBtnBcg(props.mode, props.theme), color: props.mode==="dark"?"rgb(235 235 235)":"rgb(252 252 252)"}} onClick={handelCopyClick} >Copy to Clipboard</button>
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
