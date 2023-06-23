import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';

const appName = 'TextUtils';
function App() {
    return (
        <>
            <Navbar appName={appName} aboutText='About Us' />

            <TextForm heading='Enter the text here' />

            {/* <About heading='About Us'/>   */}

        </>
    );
}

export default App;