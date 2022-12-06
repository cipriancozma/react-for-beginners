import React, { useState } from "react";

function Course2() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [showText, setShowText] = useState(false);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  console.log("count", count);

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>SHOW / HIDE TEXT</button>
      {showText && <h2>Hello, I am Ciprian</h2>}
      <h2>Input</h2>
      <input type={"text"} onChange={(e) => setInput(e.target.value)} />
      {input}
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default Course2;
