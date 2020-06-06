import React, {useEffect, useState} from "react"
import StepWizard from 'react-step-wizard';
import StepHeader from "./StepHeader";
import StepKinderarbeit from "../Steps/StepKinderarbeit";
import StepUrlaubstage from "../Steps/StepUrlaubstage";
import StepArbeitswoche from "../Steps/StepArbeitswoche";
import StepUeberstunden from "../Steps/StepUeberstunden";
import StepSicherheit from "../Steps/StepSicherheit";
import StepRohstoffe from "../Steps/StepRohstoffe";
import StepSelteneMetalle from "../Steps/StepSelteneMetalle";
import StepAbwasser from "../Steps/StepAbwasser";
import StepTransportweg from "../Steps/StepTransportweg";
import StepVerarbeitungsbetriebe from "../Steps/StepVerarbeitungsbetriebe";
import StepLieferanten from "../Steps/StepLieferanten";
import StepMaterialdeklaration from "../Steps/StepMaterialDeklaration";
import StepLabel from "../Steps/StepLabel";


const MultiStepForm = () => {

    const initData = {
        kinderarbeit: '',
        urlaubstage: '',
        arbeitswoche: '',
        ueberstunden: '',
        sicherheit: '',
        rohstoffe: '',
        selteneMetalle: '',
        abwasser: '',
        transportweg: '',
        verarbeitungsbetriebe: '',
        lieferanten: '',
        materialdeklaration: '',
        label: '',
    }

    const [globalState, setGlobalState] = useState(() => {
            if (typeof window !== 'undefined') {
                const value = localStorage.getItem('flowData');
                return value !== null ? JSON.parse(value) : initData;
            }
        }
    )

    useEffect(
        () => {
            localStorage.setItem('flowData', JSON.stringify(globalState))
        }, [globalState]
    )

    return (
        <div className="h-screen w-screen">
            <div className="flex items-start sm:items-center content-center sm:h-full pt-6 sm:pt-0">
                <div className="container">
                    <StepWizard nav={<StepHeader/>} transitions={{}}>
                        <StepKinderarbeit data={globalState}
                                          onChange={data => setGlobalState({...globalState, kinderarbeit: data})}/>
                        <StepUrlaubstage data={globalState}
                                         onChange={data => setGlobalState({...globalState, urlaubstage: data})}/>
                        <StepArbeitswoche data={globalState}
                                          onChange={data => setGlobalState({...globalState, arbeitswoche: data})}/>
                        <StepUeberstunden data={globalState}
                                          onChange={data => setGlobalState({...globalState, ueberstunden: data})}/>
                        <StepSicherheit data={globalState}
                                        onChange={data => setGlobalState({...globalState, sicherheit: data})}/>
                        <StepRohstoffe data={globalState}
                                        onChange={data => setGlobalState({...globalState, rohstoffe: data})}/>
                        <StepSelteneMetalle data={globalState}
                                       onChange={data => setGlobalState({...globalState, selteneMetalle: data})}/>
                        <StepAbwasser data={globalState}
                                            onChange={data => setGlobalState({...globalState, abwasser: data})}/>
                        <StepTransportweg data={globalState}
                                      onChange={data => setGlobalState({...globalState, transportweg: data})}/>
                        <StepVerarbeitungsbetriebe data={globalState}
                                          onChange={data => setGlobalState({...globalState, verarbeitungsbetriebe: data})}/>
                        <StepLieferanten data={globalState}
                                                   onChange={data => setGlobalState({...globalState, lieferanten: data})}/>
                        <StepMaterialdeklaration data={globalState}
                                         onChange={data => setGlobalState({...globalState, materialdeklaration: data})}/>
                        <StepLabel data={globalState}
                                                 onChange={data => setGlobalState({...globalState, label: data})}/>
                    </StepWizard>
                </div>
            </div>
        </div>
    )

}

export default MultiStepForm;
