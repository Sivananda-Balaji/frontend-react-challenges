import style from "./BMICalculator.module.css";

const BMICard = ({ bmi }) => {
  let bmiStatus = "";
  if (bmi < 18.5) {
    bmiStatus = "Underweight";
  } else if (bmi < 25) {
    bmiStatus = "Healthy Weight";
  } else if (bmi < 30) {
    bmiStatus = "Overweight";
  } else {
    bmiStatus = "Obese";
  }
  return (
    <div className={style.cardSection}>
      {bmi ? (
        <div className={style.bmiBanner}>
          <h1>BMI = {bmi.toFixed(2)}</h1>
          <h2>{bmiStatus}</h2>
        </div>
      ) : (
        <div className={style.initialBanner}>
          <h1>BMI Chart</h1>
        </div>
      )}
      <p>BMI weight ranges</p>
      <p>Less than 18.5 = Underweight</p>
      <p>Between 18.5 - 24.9 = Healthy Weight</p>
      <p>Between 25 - 29.9 = Overweight</p>
      <p>Over 30 = Obese</p>
    </div>
  );
};

export default BMICard;
