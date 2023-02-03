import "./App.css";
import { useState } from "react";
const App = () => {
  const nCounter = {
    valueCounter: 0,
    numberOfPushingPlus: 0,
    numberOfPushingMinus: 0,
    addCounter: 0,
  };
  const [displayCounter, setDisplayCounter] = useState([nCounter]);
  const handleClick = (action) => {
    const newTab = [...displayCounter];
    const { valueCounter, numberOfPushingMinus, numberOfPushingPlus } =
      newTab[0];
    if (action === "minus") {
      newTab.nCounter.numberOfPushingMinus += 1;
      valueCounter = numberOfPushingPlus - numberOfPushingMinus;
      setDisplayCounter(newTab);
    } else if (action === "plus") {
      newTab.nCounter.numberOfPushingPlus += 1;
      valueCounter = numberOfPushingPlus - numberOfPushingMinus;
      setDisplayCounter(newTab);
    } else if (action === "Add Counter") {
      setDisplayCounter(displayCounter.push(newTab));
    }
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          handleClick("minus");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          handleClick("plus");
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          handleClick("Add Counter");
        }}
      >
        Add Counter
      </button>
      <div>RESULT du counter:{displayCounter[0].valueCounter} </div>
    </div>
  );
};

export default App;
