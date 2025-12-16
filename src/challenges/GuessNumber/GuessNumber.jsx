import { useState } from "react";
import style from "./GuessNumber.module.css";

const handleCorrectValue = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const GuessNumber = () => {
  const [userValue, setUserValue] = useState(1);
  const [correctValue, setCorrectValue] = useState(handleCorrectValue());
  const [showMsg, setShowMsg] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setUserValue(value);
  };
  const handleCheck = () => {
    if (Number(correctValue) === Number(userValue)) {
      setShowMsg("Your guess is right");
    } else if (Number(userValue) > Number(correctValue)) {
      setShowMsg("Your guess is Higher than the actual number");
    } else {
      setShowMsg("Your guess is Less than the actual number");
    }
  };
  const handleReset = () => {
    setUserValue(1);
    setCorrectValue(handleCorrectValue());
    setShowMsg("");
  };
  return (
    <div className={style.container}>
      <p>Guess a Number between 0 and 100</p>
      <input
        value={userValue}
        type="number"
        onChange={handleChange}
        min="0"
        max="100"
        placeholder="Guess-Number"
      />
      <div className={style.btnGroup}>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleCheck}>Check</button>
      </div>
      {showMsg.length > 0 && <p>{showMsg}</p>}
    </div>
  );
};

export default GuessNumber;
