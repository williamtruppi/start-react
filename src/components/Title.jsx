import React from "react";

const name = "William";

function Title() {
  return (
    <h1 className="titleColor" contentEditable="true" spellCheck="false">
      {name}'s favourite MCU Movies
    </h1>
  );
}

export default Title;
