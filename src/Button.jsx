import "./App.css";
import { useState } from "react";
import React from "react";

const Button = ({ increment, decrement, reset, count }) => (
  <div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>reset</button>
  </div>
);
export default Button;
