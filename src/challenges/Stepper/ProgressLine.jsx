import style from "./ProgressLine.module.css";

const ProgressLine = ({ completed }) => {
  return (
    <div
      className={`${style["progress-line"]} ${
        completed ? style["completed"] : ""
      }`}
    />
  );
};

export default ProgressLine;
