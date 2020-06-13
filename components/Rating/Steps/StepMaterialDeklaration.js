import React from "react"

const StepMaterialdeklaration = (props) => {
    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full sm:pt-4 lg:col-12 text-white">
                    <h1>Sind die verwendeten Materialien deklariert und öffentlich einsehbar?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.materialdeklaration === '10'}
                                   className="card-input-element"
                                   name="materialdeklaration"
                                   value="10"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Ja, alle sind bekannt</p>
                            </div>
                        </label>
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.materialdeklaration === '5'}
                                   className="card-input-element"
                                   name="materialdeklaration"
                                   value="5"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Teilweise bekannt</p>
                            </div>
                        </label>
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.materialdeklaration === '3'}
                                   className="card-input-element"
                                   name="materialdeklaration"
                                   value="3"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Nur wenige bekannt</p>
                            </div>
                        </label>
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.materialdeklaration === '1'}
                                   className="card-input-element"
                                   name="materialdeklaration"
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

export default StepMaterialdeklaration;