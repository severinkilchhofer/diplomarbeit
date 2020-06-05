import React, {useEffect, useState} from "react"
import StepWizard from 'react-step-wizard';
import StepHeader from "./StepHeader";
import StepKinderarbeit from "../Steps/StepKinderarbeit";
import StepUrlaubstage from "../Steps/StepUrlaubstage";


const MultiStepForm = () => {

    const initData = {
        kinderarbeit: '',
        urlaubstage: ''
    }

    const [globalState, setGlobalState] = useState(() => {
            if (typeof window !== 'undefined') {
                const value = localStorage.getItem('data');
                return value !== null ? JSON.parse(value) : initData;
            }
        }
    )

    useEffect(
        () => {
            localStorage.setItem('data', JSON.stringify(globalState))
        }, [globalState]
    )

    return (
        <div className="bg-blue h-screen w-screen">
            <div className="container">
                <StepWizard nav={<StepHeader/>}>
                    {console.log('globalState', globalState)}
                    <StepKinderarbeit data={globalState}
                                      onChange={data => setGlobalState({...globalState, kinderarbeit: data})}/>
                    <StepUrlaubstage data={globalState}
                                     onChange={data => setGlobalState({...globalState, urlaubstage: data})}/>
                    {/*<CreateRating/>*/}
                    {/*<CreateMuA/>*/}
                    {/*<CreateOuN/>*/}
                    {/*<CreateRuT/>*/}
                </StepWizard>
            </div>
        </div>
    )

}

export default MultiStepForm;
