import { useMemo, useState } from "react";
import { pow } from "./helpers/pow";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };
  // const resultPow = pow();
  const resultPow = useMemo(() => {
    pow();
  }, []);
  return (
    <>
      <div>Result: {counter}</div>
      <button onClick={handleCounter}>Click</button>
      <div>{resultPow}</div>
    </>
  );
}

export default Counter;
