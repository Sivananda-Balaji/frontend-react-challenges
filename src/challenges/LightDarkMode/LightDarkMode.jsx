import { useState } from "react";
import style from "./LightDarkMode.module.css";

const LightDarkMode = () => {
  const [isDark, setIsDark] = useState(true);
  const handleClick = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div className={`${style.toggleSection} ${!isDark && style.lightTheme}`}>
      <h1>Try to toggle the theme and see the change !!!</h1>
      <button
        onClick={handleClick}
        className={`${style.toggleBtnSection} ${
          !isDark && style.lightThemeBtn
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default LightDarkMode;
