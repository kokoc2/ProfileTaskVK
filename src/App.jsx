import "./style.styl";
import React from "react";
import Counter from "./Counter";
import Button from "./Button";

const App = () => {
  return (
    <Counter>
      <Button />
    </Counter>
  );
};

export default App;
