import "./App.css";
import { useState } from "react";
import React from "react";

const Button = ({ increment, decrement, reset, count, abs }) => {
  const loadingButton = document.getElementById("loadButton");

  /*   loadingButton.addEventListener("click", () => {
    // loadingButton.classList.add("loading");
    loadingButton.classList.remove("buttContent");
    // Симуляция запроса
    setTimeout(() => {
      loadingButton.classList.remove("loading");
      // Здесь можно добавить логику для обработки результата запроса
    }, 3000); // Задержка в 3 секунды для примера
  }); */
  return (
    <div className="count-display">
      <div>
        <div className="buttContent top">
          <button onClick={increment} id="loadButton">
            Нравится
          </button>
        </div>
        <div className="buttContent botton">
          <button onClick={decrement} id="loadButton">
            Не нравится
          </button>
        </div>
      </div>
      <div>
        <div className="buttContent top">
          <button onClick={abs} id="loadButton">
            Добавить букву
          </button>
        </div>
        <div className="buttContent botton">
          <button onClick={reset} id="loadButton">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};
export default Button;
