import "./App.css";
import { useState } from "react";
import React from "react";

const Button = ({ increment, decrement, reset, count, abs }) => (
  <div className="count-display">
    <div>
      <div className="buttContent top">
        <button onClick={increment}>Нравится</button>
      </div>
      <div className="buttContent botton">
        <button onClick={decrement}>Не нравится</button>
      </div>
    </div>
    <div>
      <div className="buttContent top">
        <button onClick={abs}>Добавить букву</button>
      </div>
      <div className="buttContent botton">
        <button onClick={reset}>Удалить</button>
      </div>
    </div>
  </div>
);
export default Button;
