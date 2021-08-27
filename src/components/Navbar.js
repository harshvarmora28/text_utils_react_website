import React from 'react'
import PropTypes from 'prop-types'


const Navbar = (props) => {
  function setNavbarBcg(mode, theme){
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
        color="rgb(252 252 252)"
    }
    return color;
}
    return (
        // <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor: props.mode==="dark"?"#18323e":"rgb(252 252 252)"}}>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor: setNavbarBcg(props.mode, props.theme)}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
      </ul>
      {/* <button type="button" className="btn btn-sm mx-2 my-1 text-light" style={{backgroundColor: "#0d5408", display: props.mode==="light"?"none":"block"}}>Green</button>
      <button type="button" className="btn btn-sm mx-2 my-1 text-light" style={{backgroundColor: "#220154", display: props.mode==="light"?"none":"block"}}>Purple</button>
      <button type="button" className="btn btn-sm mx-2 my-1 text-light" style={{backgroundColor: "#3d0047", display: props.mode==="light"?"none":"block"}}>Magenta</button> */}
      <div className="form-check form-switch mx-3 my-1" onClick={props.toggleGreenTheme} >
        <input className="form-check-input" style={{backgroundColor: "#138a1b", display: props.mode==="light"?"none":"block"}} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" style={{color: "rgb(235 235 235)", display: props.mode==="light"?"none":"block"}} htmlFor="flexSwitchCheckDefault">Green Theme</label>
      </div>
      <div className="form-check form-switch mx-3 my-1" onClick={props.togglePurpleTheme} >
        <input className="form-check-input" style={{backgroundColor: "#6600eb", display: props.mode==="light"?"none":"block"}} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" style={{color: "rgb(235 235 235)", display: props.mode==="light"?"none":"block"}} htmlFor="flexSwitchCheckDefault" >Purple Theme</label>
      </div>
      <div className="form-check form-switch mx-3 my-1" onClick={props.toggleMagnetaTheme} >
        <input className="form-check-input" style={{backgroundColor: "#b700d4", display: props.mode==="light"?"none":"block"}} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" style={{color: "rgb(235 235 235)", display: props.mode==="light"?"none":"block"}} htmlFor="flexSwitchCheckDefault">Magenta Theme</label>
      </div>
      <div className="form-check form-switch">
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"Dark":"Light"} mode</label>
      </div>
    </div>
  </div>
</nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title here",
    aboutText: "Set About text here"
}

export default Navbar;
