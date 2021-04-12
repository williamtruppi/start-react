import React from "react";
import ReactDOM from "react-dom";

const name = "William";
const date = new Date();

const listStyle = {
  backgroundColor: "yellow",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1 className="titleColor" contentEditable="true" spellCheck="false">
      {name}'s favourite MCU Movies
    </h1>
    <ul style={listStyle}>
      <li>Avengers: Infinity War</li>
      <li>Spiderman: Far From Home</li>
      <li>Captain America: Civil War</li>
    </ul>
    <h6>Copyright {date.getFullYear()}</h6>
  </div>,
  document.getElementById("root")
);
