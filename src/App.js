// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Wonders from "./Wonders";
import Ancients from "./Ancients";
import items from "./name";

const allAncients = ["all", ...new Set(items.map((item) => item.ancient))]

function App() {
  const [wondersItem, setWonderItems] = useState(items);
  const [ancients] = useState(allAncients);

  const filterItems = (ancient) => {
    if (ancients === "all") {
      setWonderItems(items)
      return;
    }
    const newItems = items.filter((item) => item.ancient === ancient);
    setWonderItems(newItems);
  };
  
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
