import React from "react";
import ReactDOM from "react-dom";
import Avengers from "./Avengers.jsx";

const name = "William";
const date = new Date();

ReactDOM.render(
  <div>
    <h1 className="titleColor" contentEditable="true" spellCheck="false">
      {name}'s favourite MCU Movies
    </h1>
    <Avengers />
    <h6>Copyright {date.getFullYear()}</h6>
  </div>,
  document.getElementById("root")
);
