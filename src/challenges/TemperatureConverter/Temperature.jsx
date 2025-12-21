import { useState } from "react";
import style from "./Temperature.module.css";

const Temperature = () => {
  const [userValue, setUserValue] = useState("");
  const [userType, setUserType] = useState("celsius");
  const [convertType, setConverterType] = useState("farenheit");
  const [convertedValue, setConverteredValue] = useState("");
  const handleUserTemperature = (e) => {
    const { value } = e.target;
    setUserType(value);
  };
  const handleConvertTemperature = (e) => {
    const { value } = e.target;
    setConverterType(value);
  };
  const handleConvert = () => {
    if (userType === convertType) {
      setConverteredValue(userValue);
    } else {
      if (convertType === "celsius") {
        const ans = ((userValue - 32) * (5 / 9)).toFixed(2);
        setConverteredValue(ans);
      } else {
        const ans = (userValue * (9 / 5) + 32).toFixed(2);
        setConverteredValue(ans);
      }
    }
  };
  return (
    <div className={style.container}>
      <div className={style.userSection}>
        <input
          type="number"
          id="userInput"
          placeholder="Enter Temperature"
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
        />
        <select
          value={userType}
          onChange={handleUserTemperature}
          id="userOption"
        >
          <option value="celsius">Celsius</option>
          <option value="farenheit">Farenheit</option>
        </select>
      </div>
      <div className={style.buttonSection}>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <div className={style.convertSection}>
        <p>Converted Temperature: {convertedValue}</p>
        <select
          value={convertType}
          onChange={handleConvertTemperature}
          id="convertOption"
        >
          <option value="celsius">Celsius</option>
          <option value="farenheit">Farenheit</option>
        </select>
      </div>
    </div>
  );
};

export default Temperature;
