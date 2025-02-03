import "../App.css";
// import "./Button.css";
import { useState } from "react";
import React from "react";

const Button = ({ increment, decrement, reset, count, abs }) => {
  return (
    <div className="button-display">
      <div className="">
        <div className="buttContent top ">
          <button onClick={increment} id="butLike" className="">
            Нравится
          </button>
        </div>
        <div className="buttContent botton">
          <button onClick={decrement} id="butDisLike">
            Не нравится
          </button>
        </div>
      </div>
      <div>
        <div className="buttContent top">
          <button onClick={abs} id="butABS">
            Добавить букву
          </button>
        </div>
        <div className="buttContent botton">
          <button onClick={reset} id="butReset">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
