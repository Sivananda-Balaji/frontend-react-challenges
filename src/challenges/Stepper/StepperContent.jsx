import style from "./StepperContent.module.css";

const StepperContent = ({ steps, currentStep }) => {
  const activeStep = steps[currentStep];

  return (
    <div className={style["content"]}>
      <h2>{activeStep.title}</h2>
      <p>{activeStep.description}</p>
    </div>
  );
};

export default StepperContent;
