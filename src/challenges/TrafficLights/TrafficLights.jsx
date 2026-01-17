import { useEffect, useState } from "react";
import style from "./TrafficLights.module.css";

const durationMap = {
  red: 5000,
  yellow: 2000,
  green: 3000,
};

const nextLight = {
  red: "green",
  yellow: "red",
  green: "yellow",
};
const getSeconds = (light) => durationMap[light] / 1000;

const TrafficLights = () => {
  const [currentLight, setCurrentLight] = useState("red");
  const [remainingSeconds, setRemainingSeconds] = useState(getSeconds("red"));
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLight((prev) => nextLight[prev]);
    }, durationMap[currentLight]);
    return () => {
      clearTimeout(timer);
    };
  }, [currentLight]);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLight]);

  useEffect(() => {
    setRemainingSeconds(getSeconds(currentLight));
  }, [currentLight]);

  return (
    <div className={style.container}>
      <div className={style.lightContainer}>
        <div
          className={`${style.light} ${
            currentLight === "red" ? style.redLight : ""
          }`}
        ></div>
        <div
          className={`${style.light} ${
            currentLight === "yellow" ? style.yellowLight : ""
          }`}
        ></div>
        <div
          className={`${style.light} ${
            currentLight === "green" ? style.greenLight : ""
          }`}
        ></div>
      </div>
      <div className={style.timer}>{remainingSeconds} Seconds</div>
    </div>
  );
};

export default TrafficLights;
