import React from "react"

const StepHeader = (props) => {
    return (
       <p className="font-bold text-black pb-4">Step {props.currentStep} / {props.totalSteps}</p>
    );
}

export default StepHeader;