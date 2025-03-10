import { useState } from "react";

function Lamp() {
  const [status, setStatus] = useState(false);
  console.log(status);
  const handleClick = () => {
    setStatus(!status);
  };
  return (
    <>
      <button onClick={handleClick}>On/Off</button>
      <div>{status ? "on" : "off"}</div>
    </>
  );
}

export default Lamp;
