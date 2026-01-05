import ProgressLine from "./ProgressLine";
import StepItem from "./StepItem";
import StepperContent from "./StepperContent";
import style from "./StepperHeader.module.css";

const StepperHeader = ({ steps, currentStep, totalSteps }) => {
  return (
    <>
      <div className={style["stepper-header"]}>
        {steps.map((item, index) => {
          return (
            <div key={item.id} className={style["stepper-segment"]}>
              <StepItem
                index={index}
                title={item.title}
                currentStep={currentStep}
                totalSteps={totalSteps}
              />
              {index < steps.length - 1 && (
                <ProgressLine completed={index < currentStep} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StepperHeader;
