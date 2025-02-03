import "../App.css";
import { useState } from "react";
import React from "react";

const Button = ({ increment, decrement, reset, count, abs }) => {
  return (
    <div className={"button-display"}>
      <div className="">
        <div className="buttContent top ">
          <button onClick={increment} id="loadingButton">
            <span id="buttLikeText">Нравится</span>
            <span id="loadingSpinner" className="hidden"></span>
          </button>
        </div>
        <div className="buttContent botton">
          <button onClick={decrement} id="butDisLike">
            <span id="buttDisLikeText">Не нравится</span>
            <span id="loadingSpinner2" className="hidden"></span>
          </button>
        </div>
      </div>
      <div>
        <div className="buttContent top">
          <button onClick={abs} id="butABS">
            <span id="buttABSText">Добавить букву</span>
            <span id="loadingSpinner3" className="hidden"></span>
          </button>
        </div>
        <div className="buttContent botton">
          <button onClick={reset} id="butReset">
            <span id="buttDelText">Удалить</span>
            <span id="loadingSpinner4" className="hidden"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
