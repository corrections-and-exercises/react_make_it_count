import Instructions from "./instructions/Instructions";
import "./styles.css";
import Counter from "./Counter";
import { useState } from "react";

export default function App() {
  const [allCounters, setAllCounters] = useState([0, 0, 0, 0]);

  function increaseAll() {
    setAllCounters(allCounters.map((count) => count + 1));
  }

  function decreaseAll() {
    setAllCounters(allCounters.map((count) => count - 1));
  }

  function increaseOne(index) {
    setAllCounters(
      allCounters.map((counter, idx) => (index === idx ? counter + 1 : counter))
    );
  }

  function decreaseOne(index) {
    setAllCounters(
      allCounters.map((counter, idx) => (index === idx ? counter - 1 : counter))
    );
  }

  return (
    <div className="App">
      <Instructions />
      <div className="block">
        <button onClick={increaseAll}>Increase All</button>
        {allCounters.map((counter, index) => (
          <Counter
            count={counter}
            index={index}
            increaseOne={increaseOne}
            decreaseOne={decreaseOne}
            key={index}
          />
        ))}
        <button onClick={decreaseAll}>Decrease All </button>
      </div>
    </div>
  );
}
