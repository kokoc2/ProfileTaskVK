import "./App.css";
import { useState } from "react";
import React from "react";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const abs = () => setCount(count + "a");
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  /*  const textElement = document.getElementById("count");
  const originalText = textElement.textContent;

  if (originalText.length > 3) {
    textElement.textContent = originalText.slice(0, 3) + "+";
  } */

  return (
    <div>
      <div className="count-display">
        Лайки:
        <div class="live-indicator">
          <div class="red-dot" id="count">
            {count}
          </div>

          <div class="pulse one"></div>
          <div class="pulse two"></div>
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
