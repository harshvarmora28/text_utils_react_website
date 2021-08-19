import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light")

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
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <TextForm heading="Enter your text here" mode={mode} />
    {/* <About/> */}
    </>
  );
}

export default App;
