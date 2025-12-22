import { useState } from "react";
import style from "./StarRating.module.css";

const STAR = new Array(5).fill("unMark");

const StarRating = () => {
  const [finalRating, setFinalRating] = useState(STAR);
  const [hoverIndex, setHoverIndex] = useState(null);
  const handleClick = (indexValue) => {
    const updatedRating = finalRating.map((_, index) => {
      return index < indexValue ? "mark" : "unMark";
    });
    setFinalRating(updatedRating);
  };
  return (
    <div className={style.container}>
      {finalRating.map((item, index) => {
        const isMarked =
          hoverIndex !== null ? index < hoverIndex : item === "mark";
        return (
          <span
            key={index}
            className={style.starSection}
            onClick={() => handleClick(index + 1)}
            onMouseEnter={() => setHoverIndex(index + 1)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {isMarked ? "\u2605" : "\u2606"}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
