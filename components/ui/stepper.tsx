import { CheckCircledIcon } from "@radix-ui/react-icons";
import React, { FC } from "react";

interface StepIndicatorProps {
  currentStep: number;
  steps: { step: number; label: string }[];
}

export const StepIndicator: FC<StepIndicatorProps> = ({
  currentStep,
  steps,
}) => {
  return (
    <div className="flex items-center space-x-4">
      {steps.map((elem, index) => (
        <React.Fragment key={index}>
          {currentStep === elem.step ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 text-blue-500">
              {elem.step}
            </div>
          ) : currentStep > elem.step ? (
            <CheckCircledIcon className="h-10 w-10 text-blue-500" />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
              {elem.step}
            </div>
          )}

          <span>{elem.label}</span>

          {index < steps.length - 1 && (
            <span className="flex h-[2px] flex-grow border border-slate-300"></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
