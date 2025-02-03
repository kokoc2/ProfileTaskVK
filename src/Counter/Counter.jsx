import "../App.css";
import { useState } from "react";
import Increment from "../Math/Increment";
import React from "react";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const buttText = document.getElementById("buttLikeText");
    const loadingSpinner = document.getElementById("loadingSpinner");
    buttText.classList.add("hidden");
    loadingSpinner.classList.remove("hidden");
    setTimeout(() => {
      if (count < 99) {
        setCount(count + 1);
      } else if (String(count).length < 3) {
        setCount(count + "+");
      }
      buttText.classList.remove("hidden");
      loadingSpinner.classList.add("hidden");
    }, 1000);
  };

  const abs = () => {
    const buttText = document.getElementById("buttABSText");
    const loadingSpinner = document.getElementById("loadingSpinner3");
    buttText.classList.add("hidden");
    loadingSpinner.classList.remove("hidden");
    setTimeout(() => {
      if (String(count).length < 2) {
        setCount(count + "a");
      }
      if (String(count).length === 2) {
        setCount(count + "+");
      }
      buttText.classList.remove("hidden");
      loadingSpinner.classList.add("hidden");
    }, 1000);
  };
  const decrement = () => {
    const buttText = document.getElementById("buttDisLikeText");
    const loadingSpinner = document.getElementById("loadingSpinner2");
    buttText.classList.add("hidden");
    loadingSpinner.classList.remove("hidden");
    setTimeout(() => {
      if (typeof count == "number") {
        setCount(count - 1);
      }
      buttText.classList.remove("hidden");
      loadingSpinner.classList.add("hidden");
    }, 1000);
  };
  const reset = () => {
    const buttText = document.getElementById("buttDelText");
    const loadingSpinner = document.getElementById("loadingSpinner4");
    buttText.classList.add("hidden");
    loadingSpinner.classList.remove("hidden");
    setTimeout(() => {
      setCount(0);
      buttText.classList.remove("hidden");
      loadingSpinner.classList.add("hidden");
    }, 1000);
  };

  return (
    <div>
      <div className="count-display">
        <div className="like">Лайки: &nbsp;</div>

        <div className="live-indicator">
          <div className="red-dot" id="count">
            {count}
          </div>

          <div className="pulse one"></div>
          <div className="pulse two"></div>
        </div>
      </div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            increment,
            decrement,
            reset,
            count,
            abs,
          });
        }
        return null;
      })}
    </div>
  );
};
export default Counter;
