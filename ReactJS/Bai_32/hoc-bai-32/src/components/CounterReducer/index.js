import { useReducer, useState } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  if (action == "UP") {
    state++;
  } else if (action == "DOWN") {
    state--;
  } else {
    state = 0;
  }
  return state;
};

function CounterReducer() {
  //   const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>Result: {counter}</div>
      <button onClick={() => dispatch("UP")}>Up</button>
      <button onClick={() => dispatch("DOWN")}>Down</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </>
  );
}

export default CounterReducer;
