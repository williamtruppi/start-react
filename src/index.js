import React from "react";
import ReactDOM from "react-dom";

const name = "William";

ReactDOM.render(
  <div>
    <h1>{name}'s favourite MCU Movies</h1>
    <ul>
      <li>Avengers: Infinity War</li>
      <li>Spiderman: Far From Home</li>
      <li>Captain America: Civil War</li>
    </ul>
  </div>,
  document.getElementById("root")
);
