import React from 'react'
import logo from './logo.svg'
import face from "./assets/face.png"
import linked from "./assets/linked.png"
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi!</h1>
        <h5>I'm currently building my new awesome page with: </h5>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          In the meantime, you can find me on these locations:
        </p>
        <div style={{ flex: 1, flexDirection: "row" }}>
          <a href="https://www.facebook.com/miro.cosic.vuk" target="_blank" rel="noopener noreferrer">
            <img src={face} className="social" alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/mirocosic" target="_blank" rel="noopener noreferrer">
            <img src={linked} className="social" alt=""/>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
