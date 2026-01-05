import { useState } from "react";
import { StepperData } from "./steps.config";
import StepperHeader from "./StepperHeader";
import StepperContent from "./StepperContent";
import StepperActions from "./StepperActions";

const StepperContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < StepperData.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto" }}>
      <StepperHeader
        steps={StepperData}
        currentStep={currentStep}
        totalSteps={StepperData.length}
      />
      <StepperContent steps={StepperData} currentStep={currentStep} />
      <StepperActions
        currentStep={currentStep}
        totalSteps={StepperData.length}
        onNext={nextStep}
        onPrevious={prevStep}
      />
    </div>
  );
};

export default StepperContainer;
