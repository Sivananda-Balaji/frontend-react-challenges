import { useState } from "react";
import style from "./TelephoneFormatter.module.css";

const TelephoneFormatter = () => {
  const [userValue, setUserValue] = useState("");
  const extractRawDigits = (val) => {
    let newValue = "";
    for (let i = 0; i < val.length; i++) {
      if (val[i] >= "0" && val[i] <= "9") {
        newValue += val[i];
      }
    }
    return newValue;
  };
  const handleChange = (event) => {
    const { value } = event.target;

    const rawValue = extractRawDigits(value);
    if (rawValue.length > 10) {
      return;
    }
    if (rawValue.length >= 4) {
      const firstThreeDigits = rawValue.slice(0, 3);
      const rest = rawValue.slice(3);
      const newValue = `+(${firstThreeDigits}) - ${rest}`;
      setUserValue(newValue);
    } else {
      setUserValue(rawValue);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input
          type="text"
          id="userPhoneNumber"
          onChange={handleChange}
          value={userValue}
        />
      </div>
      <p>+(123) - 4567890</p>
    </div>
  );
};

export default TelephoneFormatter;
