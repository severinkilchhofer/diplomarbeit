import React from "react"
import StepWizard from 'react-step-wizard';
import CreateRating from "../CreateRating/CreateRating";
import CreateMuA from "../CreateMuA/CreateMuA";
import StepHeader from "./StepHeader";
import CreateOuN from "../CreateOuN/CreateOuN";
import CreateRuT from "../CreateRuT/CreateRuT";

const MultiStepForm = () => {

    return (
        <>
            <StepWizard nav={<StepHeader />}>
                <CreateRating/>
                <CreateMuA/>
                <CreateOuN/>
                <CreateRuT/>
            </StepWizard>
        </>
    )

}

export default MultiStepForm;
