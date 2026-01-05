import style from "./StepItem.module.css";

const StepItem = ({ index, title, currentStep, totalSteps }) => {
  let status = "pending";
  const isLastStep = currentStep === totalSteps - 1;

  if (index < currentStep || (isLastStep && index === currentStep)) {
    status = "completed";
  } else if (index === currentStep) {
    status = "active";
  }

  return (
    <div className={style[`step-item ${status}`]}>
      <div className={style["step-circle"]}>
        {status === "completed" ? "✓" : index + 1}
      </div>
      <div className={style["step-label"]}>{title}</div>
    </div>
  );
};

export default StepItem;
