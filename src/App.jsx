import "./style.styl";
import React from "react";
import Counter from "./Counter/Counter";
import Button from "./Button/Button";

const App = () => {
  return (
    <Counter>
      <Button />
    </Counter>
  );
};

export default App;
