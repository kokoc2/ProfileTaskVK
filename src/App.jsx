import "./style.styl";
import React from "react";
import Counter from "./Counter";
import Button from "./Button";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [textError, setTextError] = useState(false);
  // const handleDec = () => {
  //   if (count <= 0) {
  //     setTextError(true);
  //   } else {
  //     setCount((prevCount) => prevCount - 1);
  //     setTextError(false);
  //   }
  // };
  // const handleInc = () => {
  //   setCount((prevCount) => prevCount + 1);
  //   setTextError(false);
  // };
  // const handleReset = () => {
  //   setCount(0);
  //   setTextError(false);
  // };
  // return (
  //   <div className="counter">
  //     <div className="count">
  //       <div>{count}</div>
  //       <button className="btn_dec" onClick={handleDec}>
  //         -
  //       </button>
  //       <button className="btn_inc" onClick={handleInc}>
  //         +
  //       </button>
  //       <button className="btn_reset" onClick={handleReset}>
  //         reset
  //       </button>
  //     </div>
  //     {textError && (
  //       <span className="error">
  //         Ошибка: значение не может быть меньше нуля!
  //       </span>
  //     )}
  //   </div>
  // );
  return (
    <Counter>
      <Button />
    </Counter>
  );
};

export default App;
