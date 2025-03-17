import { useSelector } from "react-redux";
function Counter2() {
  const counter = useSelector((state) => state.counterReducer);
  return (
    <>
      <h2>Counter2: {counter}</h2>
    </>
  );
}

export default Counter2;
