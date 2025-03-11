import { useState, useRef, useEffect } from "react";

function UseRef3() {
  const [inputValue, setInputValue] = useState("");
  const counterRef = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    counterRef.current++;
  };
  console.log(inputRef);
  return (
    <>
      <input ref={inputRef} value={inputValue} onChange={handleChange}></input>
    </>
  );
}

export default UseRef3;
