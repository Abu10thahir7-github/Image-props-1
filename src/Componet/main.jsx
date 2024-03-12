import React from "react";
import "./main.css";
function main({logo_1,logo_2}) {
  return (
    <div>
      <h1>Super Over League</h1>
      <img src={logo_1} alt="" />
      <img src={logo_2} alt="" />
    </div>
  );
}

export default main;
