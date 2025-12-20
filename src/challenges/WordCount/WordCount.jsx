import { useState } from "react";
import style from "./WordCount.module.css";

const WordCount = () => {
  const [userText, setUserText] = useState("");
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const [paras, setParas] = useState(0);

  const handleCount = () => {
    const wordsLen = userText.trim()
      ? userText
          .trim()
          .split(/\s+/)
          .filter((word) => word !== "").length
      : 0;
    const charsLen = userText.trim() ? userText.trim().length : 0;
    const parasLen = userText.trim()
      ? userText
          .trim()
          .split(/\n\s*\n/)
          .filter((para) => para !== "").length
      : 0;
    setWords(wordsLen);
    setChars(charsLen);
    setParas(parasLen);
  };
  const handleClear = () => {
    setUserText("");
    setWords(0);
    setChars(0);
    setParas(0);
  };
  return (
    <div className={style.container}>
      <div className={style.inputSection}>
        <textarea
          id="userTextArea"
          placeholder="Enter your text here..."
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        ></textarea>
      </div>
      <div className={style.infoSection}>
        <p>Words: {words}</p>
        <p>Chars: {chars}</p>
        <p>Paras: {paras}</p>
        <button onClick={handleCount}>Count</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};
export default WordCount;
