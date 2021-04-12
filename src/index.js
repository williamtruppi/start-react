import React from "react";
import ReactDOM from "react-dom";

const name = "William";
const date = new Date();

ReactDOM.render(
  <div>
    <h1>{name}'s favourite MCU Movies</h1>
    <ul>
      <li>Avengers: Infinity War</li>
      <li>Spiderman: Far From Home</li>
      <li>Captain America: Civil War</li>
    </ul>
    <h6>Copyright {date.getFullYear()}</h6>
  </div>,
  document.getElementById("root")
);
