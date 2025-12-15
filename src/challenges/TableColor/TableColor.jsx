import { useState } from "react";
import style from "./TableColor.module.css";

const TableColor = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [colorItem, setColorItem] = useState([]);
  const [userValue, setUserValue] = useState("");
  const handleClick = (item) => {
    let newColorItem = [...colorItem, item];
    if (colorItem.includes(item)) {
      newColorItem = newColorItem.filter((color) => color !== item);
    }
    setColorItem(newColorItem);
    setUserValue("");
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setUserValue(value);
  };
  const handleClear = () => {
    setColorItem([]);
    setUserValue("");
  };
  return (
    <div className={style.container}>
      {numbers.map((item) => {
        return (
          <button
            onClick={() => handleClick(item)}
            key={item}
            className={colorItem.includes(item) ? style.colorBtn : ""}
          >
            {item}
          </button>
        );
      })}
      <div>
        <label>Enter a Number (1-9):</label>
        <input value={userValue} onChange={handleChange} />
      </div>
      <div>
        <button onClick={() => handleClick(userValue)}>Color Me</button>
        <button onClick={handleClear}>Clear All</button>
      </div>
    </div>
  );
};

export default TableColor;
