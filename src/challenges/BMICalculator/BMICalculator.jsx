import { useState } from "react";
import style from "./BMICalculator.module.css";
import BMICard from "./BMICard";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const handleHeight = (e) => {
    const { value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setHeight(value);
    }
  };
  const handleWeight = (e) => {
    const { value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setWeight(value);
    }
  };
  const handleClick = () => {
    if (!height || !weight) {
      return;
    }
    const heightInMeters = Number(height) / 100;
    const answer = Number(weight) / (heightInMeters * heightInMeters);
    setBmi(answer);
  };
  return (
    <div className={style.container}>
      <div className={style.heightSection}>
        <p>Height (in cm)</p>
        <input
          type="text"
          id="userHeight"
          value={height}
          onChange={handleHeight}
        />
      </div>
      <div className={style.weightSection}>
        <p>Weight (in kg)</p>
        <input
          type="text"
          id="userWeight"
          value={weight}
          onChange={handleWeight}
        />
      </div>
      <div className={style.buttonSection}>
        <button onClick={handleClick}>Calculate</button>
      </div>
      <BMICard bmi={bmi} />
    </div>
  );
};

export default BMICalculator;
