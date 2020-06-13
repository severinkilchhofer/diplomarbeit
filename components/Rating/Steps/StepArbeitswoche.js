import React from "react"

const StepArbeitswoche = (props) => {


    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full sm:pt-4 lg:col-12 text-white">
                    <h1>Wie viele Stunden müssen pro Woche geleistet werden?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.arbeitswoche === '10'}
                                   className="card-input-element"
                                   name="arbeitswoche"
                                   value="10"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Weniger als 43 Stunden</p>
                            </div>
                        </label>
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.arbeitswoche === '5'}
                                   className="card-input-element"
                                   name="arbeitswoche"
                                   value="5"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>43 – 50 Stunden</p>
                            </div>
                        </label>
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.arbeitswoche === '1'}
                                   className="card-input-element"
                                   name="arbeitswoche"
                                   value="1"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Mehr als 50 Stunden</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepArbeitswoche;