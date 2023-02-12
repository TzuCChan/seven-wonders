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
    <main>
      <section className='wonders section'>
        <div className="Title">
          <h2>seven wonders</h2>
          <div className='underline'></div>
        </div>
        <Ancients ancients={ancients} filterItems={filterItems} />
        <Wonders items={wondersItem} />
      </section>
    </main>
  );
}

export default App;
