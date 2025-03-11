import { useState, useRef } from "react";

function UseRef() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);
  const counterObj = {
    current: 0,
  };
  const handleClick = () => {
    setCounter(counter + 1);
    counterRef.current++;
    counterObj.current++;
  };
  console.log("counter " + counter);
  console.log(counterRef);
  console.log(counterObj.current);
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default UseRef;
