import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [userChoice, setUserChoice] = useState(1);
  const handleIncrement = () => {
    setCount((prev) => prev + userChoice);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - userChoice);
  };
  const handeUserChoice = (event) => {
    const value = Number(event.target.value);
    if (value) {
      setUserChoice(value);
    } else if (event.target.value === "") {
      setUserChoice("");
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="counter-app">
      <h2>{count}</h2>
      <div className="operation-btn">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div>
        <p>
          Increment/Decrement by{" "}
          <input type="text" value={userChoice} onChange={handeUserChoice} />
        </p>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
