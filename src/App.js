import React             from 'react';
import logo              from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Notes } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Welcome to React Hook Architecture
        </h3>
        <a className="App-link" href="/" target="_blank" rel="noopener noreferrer">
          GitHub repo
        </a>
      </header>
      <div className="container-fluid mt-3 mb-5">
        <Notes/>
      </div>
    </div>
  );
}

export default App;
