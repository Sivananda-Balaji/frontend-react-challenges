import style from "./Inlineoption.module.css";
import { sizes } from "./InlineData";
import { useState } from "react";

const InlineOption = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSize = (selected) => {
    setSelectedSize(selected);
  };
  return (
    <div className={style.container}>
      <h2>Select size of Drinks</h2>
      <div className={style["size-container"]}>
        {sizes.map((item) => {
          return (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => handleSize(item)}
              className={`${
                item.id === selectedSize.id ? style["selected"] : ""
              }`}
            >
              {item.size}
            </button>
          );
        })}
      </div>
      <div>
        <h4>Selcted Size: {selectedSize.size}</h4>
      </div>
    </div>
  );
};

export default InlineOption;
