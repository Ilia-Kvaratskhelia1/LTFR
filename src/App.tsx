import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Sections from './Components/Section/Sections';
import About from './Components/About/About';
import StartAnimation from './Components/loadAnimation/StartAnimation';
function App() {

  return (
    <div className="App">
      <StartAnimation/>
      <Header/>
      <Sections />
      <About />
    </div>

);
}

export default App;
