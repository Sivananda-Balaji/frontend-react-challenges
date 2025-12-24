import { useState } from "react";
import style from "./StringTransformers.module.css";

const StringTransformers = () => {
  const [userText, setUserText] = useState("");
  const [formatText, setFormatText] = useState("");
  const handleClick = (formatStyle) => {
    const wordsArr = userText.trim().split(" ").filter(Boolean);
    switch (formatStyle) {
      case "lowerCase":
        setFormatText(userText.toLowerCase());
        break;
      case "upperCase":
        setFormatText(userText.toUpperCase());
        break;
      case "camelCase": {
        let finalWords = wordsArr.map((item, index) => {
          if (index === 0) {
            return item.toLowerCase();
          }
          return item[0].toUpperCase() + item.slice(1).toLowerCase();
        });
        setFormatText(finalWords.join(""));
        break;
      }
      case "pascalCase": {
        const finalWords = wordsArr.map((item) => {
          return item[0].toUpperCase() + item.slice(1).toLowerCase();
        });
        setFormatText(finalWords.join(""));
        break;
      }
      case "snakeCase": {
        const finalWords = wordsArr.map((item) => {
          return item.toLowerCase();
        });
        setFormatText(finalWords.join("_"));
        break;
      }
      case "kebabCase": {
        const finalWords = wordsArr.map((item) => {
          return item.toLowerCase();
        });
        setFormatText(finalWords.join("-"));
        break;
      }
      case "trim": {
        setFormatText(userText.trim());
        break;
      }
    }
  };
  return (
    <div className={style.container}>
      <div className={style.inputSection}>
        <textarea
          id="userInput"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
      </div>
      <div className={style.buttonSection}>
        <button onClick={() => handleClick("lowerCase")}>Lower Case</button>
        <button onClick={() => handleClick("upperCase")}>Upper Case</button>
        <button onClick={() => handleClick("camelCase")}>Camel Case</button>
        <button onClick={() => handleClick("pascalCase")}>Pascal Case</button>
        <button onClick={() => handleClick("snakeCase")}>Snake Case</button>
        <button onClick={() => handleClick("kebabCase")}>Kebab Case</button>
        <button onClick={() => handleClick("trim")}>Trim</button>
      </div>
      <div>
        <h4>Transformed String:</h4>
        <p>{formatText}</p>
      </div>
    </div>
  );
};

export default StringTransformers;
