import React from "react";

function Title() {
  const name = "William";

  return (
    <h1 className="titleColor" contentEditable="true" spellCheck="false">
      {name}'s favourite MCU Movies
    </h1>
  );
}

export default Title;
