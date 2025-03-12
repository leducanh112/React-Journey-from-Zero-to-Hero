import { useState } from "react";

function CounterState() {
  const [counter, setCounter] = useState(0);
  const handleUp = () => {
    setCounter(counter + 1);
  };
  const handleDown = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <>
      <div>Result: {counter}</div>
      <button onClick={handleUp}>Up</button>
      <button onClick={handleDown}>Down</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default CounterState;
