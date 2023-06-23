import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {

    const [buttonName, setButtonName] = useState('Dark Mode');
    const [mode, setMode] = useState("navbar navbar-expand-lg bg-body-tertiary");
    const [theme, setTheme] = useState("light");

    const switchMode = ()=>{
        if(buttonName==="Dark Mode"){
            setMode("navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark");
            setButtonName("Light Mode");
            setTheme("dark");
        }
        else{
            setMode("navbar navbar-expand-lg bg-body-tertiary");
            setButtonName("Dark Mode");
            setTheme("light");
        }
    }

    return (
        <nav className={mode} data-bs-theme={theme}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.appName}</a>
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
                    <form className="d-flex" role="search">
                        <button className="btn btn-primary" type='button' onClick={switchMode}>{buttonName}</button>
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
    appName: 'Your App name here',
    aboutText: 'Your About Text goes here'
}

export default Navbar;