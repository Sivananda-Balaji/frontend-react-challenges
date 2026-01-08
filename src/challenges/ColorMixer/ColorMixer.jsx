import { useState } from "react";
import style from "./Colormixer.module.css";

const mixHexColors = (hex1, hex2, weight = 0.5) => {
  const toRgb = (hex) => {
    const num = parseInt(hex.replace("#", ""), 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  };

  const c1 = toRgb(hex1);
  const c2 = toRgb(hex2);

  const r = Math.round(c1.r * weight + c2.r * (1 - weight));
  const g = Math.round(c1.g * weight + c2.g * (1 - weight));
  const b = Math.round(c1.b * weight + c2.b * (1 - weight));

  return `rgb(${r}, ${g}, ${b})`;
};

const ColorMixer = () => {
  const [color1, setColor1] = useState("#FF5733");
  const [color2, setColor2] = useState("#33FF57");
  const handleReset = () => {
    setColor1("#FF5733");
    setColor2("#33FF57");
  };
  const mixColors = mixHexColors(color1, color2);
  return (
    <div className={style.container}>
      <div
        className={style["colorContainer"]}
        style={{ backgroundColor: mixColors }}
      >
        <p>Mixed Color</p>
      </div>

      <div className={style["colorInputContainer"]}>
        <label htmlFor="color_1">Color 1</label>
        <input
          id="color_1"
          type="color"
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
        />
      </div>
      <div className={style["colorInputContainer"]}>
        <label htmlFor="color_2">Color 2</label>
        <input
          id="color_2"
          type="color"
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
        />
      </div>

      <div className={style["colorButton"]}>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default ColorMixer;
