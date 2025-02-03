import "../App.css";
import "./Counter.css";
import { useState } from "react";
import React from "react";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 99) {
      setCount(count + 1);
    } else if (String(count).length < 3) {
      setCount(count + "+");
    }
  };
  const abs = () => {
    if (String(count).length < 2) {
      setCount(count + "a");
    }
    if (String(count).length === 2) {
      setCount(count + "+");
    }
  };
  const decrement = () => {
    if (typeof count == "number") {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div>
      <div className="count-display">
        <div className="like">
          Лайки: <pre> </pre>
        </div>

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
