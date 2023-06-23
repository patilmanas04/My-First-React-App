import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import Footer from "./Components/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const appName = 'TextUtils';
function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(false);

    const showAlert = (message, type)=>{
        setAlert({
            message: message,
            type: type
        });
    }

    const closeAlert = ()=>{
        setAlert(false);
    }

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
            <Router>
                <Navbar appName={appName} aboutText='About Us' toggleMode={toggleMode} mode={mode} />
                <Alert alert={alert} closeAlert={closeAlert}/>
                <Routes>
                    <Route exact path='/' element={<TextForm showAlert={showAlert} heading='Enter the text here' mode={mode} />} />
                    <Route exact path='/about' element={<About heading='About Us' mode={mode}/>} />
                </Routes>
                <Footer mode={mode}/>
            </Router>
        </>
    );
}

export default App;