import React from 'react'
import PropTypes from 'prop-types'


const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor: props.mode==="dark"?"#18323e":"rgb(252 252 252)"}}>
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
      <button type="button" class="btn btn-sm mx-4 text-light" style={{backgroundColor: "#0d5408"}}>Green</button>
      <button type="button" class="btn btn-sm text-light" style={{backgroundColor: "#220154"}}>Purple</button>
      <button type="button" class="btn btn-sm mx-4 text-light" style={{backgroundColor: "#3d0047"}}>Magenta</button>
      <div className="form-check form-switch">
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
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
