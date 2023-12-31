import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [homeStatus, setHomeStatus] = useState(true);
    const [aboutStatus, setAboutStatus] = useState(false);

    const pageTitleToAbout = ()=>{
        document.title = "TextUtils - About";
        setHomeStatus(false);
        setAboutStatus(true);
    }

    const pageTitleToHome = ()=>{
        document.title = "TextUtils - Home";
        setHomeStatus(true);
        setAboutStatus(false);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
            <div className="container-fluid">
                <Link className="navbar-brand" onClick={pageTitleToHome} to="/">{props.appName}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${homeStatus?'active':'nothing'}`} aria-current="page" id='home-title' onClick={pageTitleToHome} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${aboutStatus?'active':'nothing'}`} onClick={pageTitleToAbout} to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label className={`form-check-label fw-normal text-${props.mode==="light"?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode.charAt(0).toUpperCase()+props.mode.slice(1)} Mode</label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    appName: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    appName: 'TextUtils',
    aboutText: 'About Us'
}

export default Navbar;