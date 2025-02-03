import "../App.css";
import { useState } from "react";
import React from "react";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const loadingButton = document.getElementById("butLike");
    loadingButton.classList.add("loading");
    setTimeout(() => {
      if (count < 99) {
        setCount(count + 1);
      } else if (String(count).length < 3) {
        setCount(count + "+");
      }
      loadingButton.classList.remove("loading");
    }, 1000);
  };
  const abs = () => {
    const loadingButton = document.getElementById("butABS");
    loadingButton.classList.add("loading");
    setTimeout(() => {
      if (String(count).length < 2) {
        setCount(count + "a");
      }
      if (String(count).length === 2) {
        setCount(count + "+");
      }
      loadingButton.classList.remove("loading");
    }, 1000);
  };
  const decrement = () => {
    const loadingButton = document.getElementById("butDisLike");
    loadingButton.classList.add("loading");
    setTimeout(() => {
      if (typeof count == "number") {
        setCount(count - 1);
      }
      loadingButton.classList.remove("loading");
    }, 1000);
  };
  const reset = () => {
    const loadingButton = document.getElementById("butReset");
    loadingButton.classList.add("loading");
    setTimeout(() => {
      setCount(0);
      loadingButton.classList.remove("loading");
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
