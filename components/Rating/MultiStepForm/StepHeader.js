import React from "react"
import Link from "next/link";

const StepHeader = (props) => {
    return (
        <>
       <p className="font-bold text-white pb-4 fixed step-top">Schritt {props.currentStep} / {props.totalSteps}</p>
            <div className="question-nav">
                {props.currentStep === 1 ?
                    '' :
                    <button className="bg-blue p-4 text-white font-bold rounded focus:outline-none"
                            type="button"
                            onClick={props.previousStep}>&lt;- Vorherige Frage
                    </button>
                }

                {props.currentStep === 13 ?
                    <Link href={'/finalproduct'} as={process.env.BACKEND_URL + '/finalproduct'}>
                        <a className="bg-blue p-4 text-white font-bold rounded focus:outline-none">Rating erstellen</a>
                    </Link>
                    :
                    <button className="bg-blue p-4 text-white font-bold rounded focus:outline-none"
                            type="button"
                            onClick={props.nextStep}>Nächste Frage -&gt;
                    </button>
                }

            </div>
        </>
    );
}

export default StepHeader;