import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)
  const [theme, setTheme] = useState("default")

  
  
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2300);
  }
  
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#091921";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  const togglePurpleTheme = () => {
    if(theme === "purple"){
      setTheme("default");
      document.body.style.backgroundColor = "#091921";
    }
    else{
      setTheme("purple");
      document.body.style.backgroundColor = "#160821";
    }
  }

  const toggleGreenTheme = () => {
    if(theme === "green"){
      setTheme("default");
      document.body.style.backgroundColor = "#091921";
    }
    else{
      setTheme("green");
      document.body.style.backgroundColor = "#08210b";
    }
  }

  const toggleMagnetaTheme = () => {
    if(theme === "magenta"){
      setTheme("default");
      document.body.style.backgroundColor = "#091921";
    }
    else{
      setTheme("magenta");
      document.body.style.backgroundColor = "#21081c";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} theme={theme} togglePurpleTheme={togglePurpleTheme} toggleGreenTheme={toggleGreenTheme} toggleMagnetaTheme={toggleMagnetaTheme} />
    <Alert alert={alert} />
    <TextForm  showAlert={showAlert} heading="Enter your text here" mode={mode} theme={theme} togglePurpleTheme={togglePurpleTheme} toggleGreenTheme={toggleGreenTheme} toggleMagnetaTheme={toggleMagnetaTheme} />
    {/* <About/> */}
    </>
  );
}

export default App;
