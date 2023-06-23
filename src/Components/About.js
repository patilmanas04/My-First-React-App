import React from 'react';

function About(props) {
    const lightAboutCardTheme = {
        background: "#fff",
    }

    const darkAboutCardTheme = {
        background: "rgba(255, 255, 255, 0.1)",
        border: "none",
        boxShadow: "1px 1px 6px black"
    };

    const lightListGroupItemTheme = {
        background: "#fff"
    }

    const darkListGroupItemTheme ={
        background: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(0, 0, 0, 0.45)"
    }

    return (
        <>
            <div className="container my-4">
                <div className={`card text-${props.mode==="light"?'dark':'light'}`} style={props.mode==="light"?lightAboutCardTheme:darkAboutCardTheme}>
                    <div className="card-body">
                        <h1 className='card-title'>About TextUtils</h1>
                        <p className='card-text'>TextUtils is a web app built using React JS that allows you to perform various operations on text. Whether you need to convert your text to uppercase, lowercase, capitalize it, or even alternate the case, TextUtils has got you covered.</p>
                        <p className='card-text'>With TextUtils, you can easily manipulate your text and make it suitable for your specific needs. It provides a user-friendly interface and quick results, making it convenient for anyone working with text.</p>
                        <h2 className="mt-4 mx-1">Features</h2>
                        <ul className="list-group text-dark">
                            <li className={`list-group-item text-${props.mode==="light"?'dark':'light'}`} style={props.mode==="light"?lightListGroupItemTheme:darkListGroupItemTheme}>Convert text to uppercase</li>
                            <li className={`list-group-item text-${props.mode==="light"?'dark':'light'}`} style={props.mode==="light"?lightListGroupItemTheme:darkListGroupItemTheme}>Convert text to lowercase</li>
                            <li className={`list-group-item text-${props.mode==="light"?'dark':'light'}`} style={props.mode==="light"?lightListGroupItemTheme:darkListGroupItemTheme}>Alternate the case of your text</li>
                            <li className={`list-group-item text-${props.mode==="light"?'dark':'light'}`} style={props.mode==="light"?lightListGroupItemTheme:darkListGroupItemTheme}>Remove extra spaces from the text</li>
                            <li className={`list-group-item text-${props.mode==="light"?'dark':'light'}`} style={props.mode==="light"?lightListGroupItemTheme:darkListGroupItemTheme}>Capitalize your text</li>
                            <li className={`list-group-item text-${props.mode==="light"?'dark':'light'}`} style={props.mode==="light"?lightListGroupItemTheme:darkListGroupItemTheme}>Capitalize each word in your text</li>
                            <li className={`list-group-item text-${props.mode==="light"?'dark':'light'}`} style={props.mode==="light"?lightListGroupItemTheme:darkListGroupItemTheme}>Copy the modified text to your clipboard</li>
                        </ul>
                        <p className="mt-4">TextUtils aims to make text manipulation easier and more efficient, saving you time and effort when dealing with text-related tasks. It's perfect for writers, students, developers, and anyone who frequently works with text.</p>
                        <p className='card-text'>Start using TextUtils today and experience the power of text manipulation at your fingertips!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;