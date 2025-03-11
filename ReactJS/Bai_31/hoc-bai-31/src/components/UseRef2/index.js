import { useState, useRef } from "react";

function UseRef2() {
  const [inputValue, setInputValue] = useState("");
  const counterRef = useRef(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    counterRef.current++;
  };
  console.log(counterRef);
  return (
    <>
      <input value={inputValue} onChange={handleChange}></input>
    </>
  );
}

export default UseRef2;
