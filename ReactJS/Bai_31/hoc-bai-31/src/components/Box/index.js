import { memo } from "react";

function Box(props) {
  const { onCounter } = props;
  console.log("render box");
  const handleClick = () => {
    onCounter();
  };
  return <button onClick={handleClick}>Click</button>;
}

export default memo(Box);
