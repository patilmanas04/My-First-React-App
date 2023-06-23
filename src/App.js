import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';

// background: "rgba(255, 255, 255, 0.1)";
// border: "none";
// color: "white";
// height: "257px";
// box-shadow: "2px 2px 6px black";

const appName = 'TextUtils';
function App() {
    const [mode, setMode] = useState('light');

    const toggleMode = ()=>{
        if(mode==="light"){
            setMode('dark');
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = 'white';
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = "white";
            document.body.style.color = "#212529";
        }
    }

    return (
        <>
            <Navbar appName={appName} aboutText='About Us' toggleMode={toggleMode} mode={mode} />

            <TextForm heading='Enter the text here' mode={mode} />

            {/* <About heading='About Us'/>   */}

        </>
    );
}

export default App;