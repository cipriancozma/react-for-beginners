import React from "react";
import "./styles.css";

// Ternary Operators, Lists in React, CSS in React
function Course1() {
  const age = 15;
  const isGreen = true;
  const names = ["Pedro", "Ciprian", "Kennedy", "Marcus", "Kylian"];

  return (
    <div>
      <h1 className="name">Ciprian</h1>
      <h2>{age >= 18 ? <p>OVER AGE</p> : <p>UNDER AGE</p>}</h2>
      <h3 style={{ color: isGreen ? "green" : "gray" }}>COLOR</h3>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default Course1;
