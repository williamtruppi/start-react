import React from "react";

const date = new Date();

function Copyright() {
  return <h6>Copyright {date.getFullYear()}</h6>;
}

export default Copyright;
