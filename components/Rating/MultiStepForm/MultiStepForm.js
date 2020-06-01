import React from "react"
import StepWizard from 'react-step-wizard';
import CreateRating from "../CreateRating/CreateRating";
import CreateMuA from "../CreateMuA/CreateMuA";
import StepHeader from "./StepHeader";

const MultiStepForm = () => {

    return (
        <>
            <StepWizard nav={<StepHeader />}>
                <CreateRating/>
                <CreateMuA/>
            </StepWizard>
        </>
    )

}

export default MultiStepForm;
