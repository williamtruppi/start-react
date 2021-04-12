import React from "react";

function Avengers() {
  const listStyle = {
    backgroundColor: "yellow",
    fontSize: "20px",
    border: "1px solid black"
  };

  return (
    <ul style={listStyle}>
      <li>Avengers: Infinity War</li>
      <li>Spiderman: Far From Home</li>
      <li>Captain America: Civil War</li>
    </ul>
  );
}

export default Avengers;
