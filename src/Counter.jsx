import "./App.css";
import { useState } from "react";
import React from "react";
const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <div className="count-display">Count: {count}</div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            increment,
            decrement,
            reset,
            count,
          });
        }
        return null;
      })}
    </div>
  );
};
export default Counter;
