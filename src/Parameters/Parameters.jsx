import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";

const Parameters = ({ increment, decrement, reset, count, abs }) => (
  <div className="parameters">
    <div className="style">
      <div>style</div>
      <button>primary</button>
      <button>secondary</button>
    </div>
  </div>
);
export default Parameters;
