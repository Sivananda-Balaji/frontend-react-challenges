import style from "./StepperAction.module.css";

const StepperActions = ({ currentStep, totalSteps, onNext, onPrevious }) => {
  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;

  return (
    <div className={style["actions"]}>
      <button onClick={onPrevious} disabled={isFirst}>
        Previous
      </button>

      {!isLast && <button onClick={onNext}>Next</button>}

      {isLast && <button className={style["finish"]}>Finish</button>}
    </div>
  );
};

export default StepperActions;
