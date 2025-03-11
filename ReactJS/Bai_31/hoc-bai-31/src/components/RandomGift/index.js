import { useState, useRef } from "react";

function RandomGift() {
  const gifts = ["Iphone", "Computer", "Motorbike", "Watch", "TV"];
  const [result, setResult] = useState("");
  const counterRef = useRef(0);

  const handleRandom = () => {
    if (counterRef.current < 3) {
      const num = Math.floor(Math.random() * gifts.length);
      setResult(gifts[num]);
      counterRef.current++;
    } else {
      alert("Too much!!!");
    }
  };
  console.log(counterRef);
  return (
    <>
      <button onClick={handleRandom}>Random</button>
      <div>Bạn đã trúng thưởng: {result}</div>
    </>
  );
}

export default RandomGift;
