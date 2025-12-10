import styles from "./BackgroundChanger.module.css";

const BackgroundChanger = () => {
  const handleClick = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style = `background-color:rgb(${r}, ${g}, ${b})`;
  };
  return (
    <div className={styles["button-section"]}>
      <button onClick={handleClick} className={styles["color-button"]}>
        Change Color!! 😎
      </button>
    </div>
  );
};

export default BackgroundChanger;
