import * as React from "react";
import * as ReactDOM from "react-dom";
import Two from "./two";
import Three from "./three";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <p>One</p>
    <Two />
    <Three />
  </div>
);
