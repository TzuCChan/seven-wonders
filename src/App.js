// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Wonders from "./Wonders";
import Ancients from "./Ancients";
import structures from "./name";

const allAncients = ["all", ...new Set(structures.map((structure) => structure.ancient))]

function App() {
  const [wondersStructures, setWonderStructures] = useState(structures);
  const [ancients] = useState(allAncients);

  const filterStructures = (ancient) => {
    if (ancients === "all") {
      setWonderStructures(structures)
      return;
    }
    const newStructures = structures.filter((structure) => structure.ancient === ancient);
    setWonderStructures(newStructures);
  };

  return (
    <main>
      <section className='wonders section'>
        <div className="name">
          <h2>seven wonders</h2>
          <div className='underline'></div>
        </div>
        <Ancients ancients={ancients} filterStructures={filterStructures} />
        <Wonders structures={wondersStructures} />
      </section>
    </main>
  );
}

export default App;
