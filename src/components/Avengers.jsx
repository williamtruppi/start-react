import React from "react";

const listStyle = {
  backgroundColor: "yellow",
  fontSize: "20px",
  border: "1px solid black"
};

function Avengers() {
  return (
    <ul style={listStyle}>
      <li>Avengers: Infinity War</li>
      <li>Spiderman: Far From Home</li>
      <li>Captain America: Civil War</li>
    </ul>
  );
}

export default Avengers;
