import "./App.css";
import { useState } from "react";
const App = () => {
  const [displayCounter, setDisplayCounter] = useState([0]);
  const handleClick = (action, i) => {
    let index = i;
    if (action === "minus") {
      displayCounter[index] -= 1;
      const newTab = [...displayCounter];
      setDisplayCounter(newTab);
    } else if (action === "plus") {
      displayCounter[index] += 1;
      const newTab = [...displayCounter];
      setDisplayCounter(newTab);
    }
    if (action === "Add Counter" && displayCounter.length < 3) {
      // const newTab = [...displayCounter];
      const newTab = [...displayCounter];
      newTab.push(0);
      setDisplayCounter(newTab);
    }
  };
  const handleResetAll = () => {
    setDisplayCounter([0]);
  };
  const handleResetCounter = (index) => {
    const newTab = [...displayCounter];
    newTab[index] = 0;
    setDisplayCounter(newTab);
  };
  return (
    <div className="App">
      <div className="headerButtons">
        <button
          onClick={() => {
            handleClick("Add Counter");
          }}
        >
          Add Counter
        </button>
        <button
          onClick={() => {
            handleResetAll();
          }}
        >
          Reset All
        </button>
      </div>
      <div className="mainButtons">
        {displayCounter.map((elem, index) => (
          <div className="oneCounter" key={index}>
            <button
              onClick={() => {
                handleClick("minus", index);
              }}
            >
              -
            </button>
            <div className="result">{elem}</div>
            <button
              onClick={() => {
                handleClick("plus", index);
              }}
            >
              +
            </button>

            <button
              onClick={() => {
                handleResetCounter(index);
              }}
            >
              Reset Counter
            </button>
          </div>
        ))}
      </div>
      <footer>
        <div>
          Made with ⚛︎ at <b>Le Reacteur</b> by <b>Mathias</b>
        </div>
      </footer>
    </div>
  );
};

export default App;
