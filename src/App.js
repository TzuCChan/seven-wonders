// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Wonders from "./Wonders";
import Categories from "./Categories";
import items from "./name";

const allAncients = ["all", ...new Set(items.map((item) => item.Category))]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
