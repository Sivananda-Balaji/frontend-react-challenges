import { useState } from "react";
import style from "./PasswordStrength.module.css";
import { usePasswordValidation } from "./usePasswordValidation";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const passwordLength = password.length;
  const [passwordScore, passwordStrength, passwordIndication] =
    usePasswordValidation(password);

  const { lc, uc, num, sym } = passwordIndication;
  const barColor =
    passwordScore > 5
      ? passwordScore > 8
        ? style.greenColor
        : style.orangeColor
      : style.redColor;

  const handleChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input
          type="text"
          placeholder="Enter the Password"
          onChange={handleChange}
          value={password}
        />
      </div>
      <div className={style.strengthContainer}>
        <div className={style.passwordIndicators}>
          <p className={`${lc ? style.passwordIndicatorsActive : ""}`}>
            Lowercase
          </p>
          <p className={`${uc ? style.passwordIndicatorsActive : ""}`}>
            Uppercase
          </p>
          <p className={`${num ? style.passwordIndicatorsActive : ""}`}>
            Number
          </p>
          <p className={`${sym ? style.passwordIndicatorsActive : ""}`}>
            Symbols
          </p>
        </div>
        <div className={style.passwordScoreBar}>
          <div
            className={`${style.barFill} ${barColor}`}
            style={{ width: `${passwordScore * 10}%` }}
          />
        </div>
      </div>
      <div>
        <p>Password has {passwordLength} chars</p>
        <p>
          Your password is <strong>{passwordStrength}</strong>
        </p>
      </div>
    </div>
  );
};

export default PasswordStrength;
