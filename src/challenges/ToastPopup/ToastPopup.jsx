import { useEffect, useState } from "react";
import style from "./Toastpopup.module.css";

const ToastPopup = () => {
  const [horizontal, setHorizontal] = useState("left");
  const [vertical, setVertical] = useState("top");
  const [messageType, setMessageType] = useState("success");
  const [message, setMessage] = useState("This is a toast message!");
  const [duration, setDuration] = useState(5);
  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => {
    setShowToast(true);
  };
  const handleHideToast = () => {
    setShowToast(false);
  };
  useEffect(() => {
    if (!showToast) {
      return;
    }
    const timer = setTimeout(() => {
      setShowToast(false);
    }, duration * 1000);
    return () => clearTimeout(timer);
  }, [duration, showToast]);
  return (
    <div className={style.container}>
      <div className={style.toastContainer}>
        <div>
          <select
            value={horizontal}
            id="horizontalPosition"
            onChange={(e) => setHorizontal(e.target.value)}
          >
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
        <div>
          <select
            value={vertical}
            id="verticalPosition"
            onChange={(e) => setVertical(e.target.value)}
          >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>
        <div>
          <select
            value={messageType}
            id="messageType"
            onChange={(e) => setMessageType(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
          </select>
        </div>
        <div className={style.textContainer}>
          <input
            type="text"
            placeholder="Message"
            id="userMessage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className={style.durationContainer}>
          <label htmlFor="duration">Duration</label>
          <input
            type="range"
            id="duration"
            value={duration}
            min={1}
            max={10}
            step={1}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </div>
        <div className={style.buttonContainer}>
          <button onClick={handleShowToast}>Show Toast</button>
        </div>
      </div>
      {showToast && (
        <div
          className={`${style.toastMessage} ${horizontal === "left" ? style.left : style.right}
        ${vertical === "top" ? style.top : style.bottom} ${style[messageType]}
        `}
        >
          <span>{message}</span>
          <button onClick={handleHideToast}>x</button>
        </div>
      )}
    </div>
  );
};

export default ToastPopup;
