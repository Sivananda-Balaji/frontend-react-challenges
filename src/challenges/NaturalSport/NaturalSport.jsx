import { useState } from "react";
import style from "./NaturalSport.module.css";
import { questions } from "./Questions";

const NaturalSport = () => {
  const [item, setItem] = useState(0);
  const [answers, setAnswers] = useState([]);
  const len = questions.length;
  const handleClick = (val) => {
    setItem((prev) => prev + 1);
    const newAnswers = [...answers];
    newAnswers.push(val);
    setAnswers(newAnswers);
  };
  const handleDiscover = () => {
    let sport = "";
    if (answers[0] === "Yes" && answers[1] === "Yes") {
      sport = "Soccer";
    } else if (answers[2] === "Yes" && answers[3] === "Yes") {
      sport = "Table Tennis";
    } else if (answers[4] === "Yes") {
      sport = "Swimming";
    } else if (answers[5] === "Yes") {
      sport = "Tennis";
    } else {
      sport = "Running";
    }
    if (sport.length > 0) {
      alert(`Your natural sport is: ${sport}`);
    }
  };
  return (
    <div className={style.container}>
      <h1>Discover your Natural Sport</h1>
      {item < len ? (
        <>
          <p>{questions[item]}</p>
          <div className={style.answerBtn}>
            <button onClick={() => handleClick("Yes")}>Yes</button>
            <button onClick={() => handleClick("No")}>No</button>
          </div>
        </>
      ) : (
        <>
          <p>Click to Discover your Sport!</p>
          <button onClick={handleDiscover}>Discover</button>
        </>
      )}
    </div>
  );
};

export default NaturalSport;
