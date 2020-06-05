import React from "react"

const StepKinderarbeit = (props) => {


    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full pt-4 lg:col-12 text-white">
                    <h1>Verwendet Firma X nachhaltige (ökologisch angebaute oder rezyklierte) Rohstoffe?</h1>
                    <div className="mt-2 flex">
                        <label className="pr-4">
                            <input type="radio"
                                   defaultChecked={props.data.kinderarbeit === '10'}
                                   className="card-input-element"
                                   name="rohstoffe"
                                   value="10"
                                   onChange={lala => props.onChange(lala.target.value)}/>
                            <div className="radio-card">
                                <p>Ja</p>
                            </div>
                        </label>
                        <label className="pr-4">
                            <input type="radio"
                                   defaultChecked={props.data.kinderarbeit === '5'}
                                   className="card-input-element"
                                   name="rohstoffe"
                                   value="5"
                                   onChange={lala => props.onChange(lala.target.value)}/>
                            <div className="radio-card">
                                <p>Teilweise</p>
                            </div>
                        </label>
                        <label className="pr-4">
                            <input type="radio"
                                   defaultChecked={props.data.kinderarbeit === '1'}
                                   className="card-input-element"
                                   name="rohstoffe" value="1"
                                   onChange={lala => props.onChange(lala.target.value)}/>
                            <div className="radio-card">
                                <p>Nein</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end pt-4">
                <button className="bg-blue p-4 text-white font-bold rounded"
                        onClick={props.nextStep}>Weiter
                </button>
            </div>
        </>
    )
}

export default StepKinderarbeit;