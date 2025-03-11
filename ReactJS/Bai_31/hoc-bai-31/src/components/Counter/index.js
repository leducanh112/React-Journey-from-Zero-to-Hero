import { useCallback, useState } from "react";
import Box from "../Box";

function Counter() {
  const [counter, setCounter] = useState(0);
  // const handleCounter = () => {
  //   setCounter(counter + 1);
  // };
  const handleCounter = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);
  return (
    <>
      <div>Result: {counter}</div>
      <Box onCounter={handleCounter}></Box>
    </>
  );
}

export default Counter;
