import { useState } from "react";

function Counter({ count, increaseOne, decreaseOne, index }) {
  return (
    <div className="counter">
      <button onClick={() => increaseOne(index)}>Increment</button>
      <p>{count} </p>
      <button onClick={() => decreaseOne(index)}>Decrement</button>
    </div>
  );
}

export default Counter;
