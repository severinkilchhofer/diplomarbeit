import React from "react"

const StepKinderarbeit = (props) => {


    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full pt-4 lg:col-12 text-white">
                    <h1>Gibt es in deiner Produktionsstätte Kinderarbeit?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="p-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.kinderarbeit === '0'}
                                   className="card-input-element"
                                   name="kinderarbeit"
                                   value="0"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Ja</p>
                            </div>
                        </label>
                        <label className="p-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.kinderarbeit === '10'}
                                   className="card-input-element"
                                   name="kinderarbeit"
                                   value="10"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Nein</p>
                            </div>
                        </label>
                        <label className="p-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.kinderarbeit === '1'}
                                   className="card-input-element"
                                   name="kinderarbeit"
                                   value="1"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Nicht bekannt</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepKinderarbeit;