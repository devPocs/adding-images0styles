import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200/300";
ReactDOM.render(
  <div>
    <img src={img} alt="random"></img>
  </div>,
  document.getElementById("root")
);
