import React from "react"


const StepUrlaubstage = (props) => {


    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full pt-4 lg:col-12 text-white">
                    <h1>Wie viele Urlaubstage und Freitage werden gewährleistet?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.urlaubstage === '10'}
                                   className="card-input-element"
                                   name="urlaubstage"
                                   value="10"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>mehr als 5 Wochen Ferien</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.urlaubstage === '8'}
                                   className="card-input-element"
                                   name="urlaubstage"
                                   value="8"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>4-5 Wochen Ferien</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.urlaubstage === '6'}
                                   className="card-input-element"
                                   name="urlaubstage"
                                   value="6"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>3-4 Wochen Ferien</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.urlaubstage === '4'}
                                   className="card-input-element"
                                   name="urlaubstage"
                                   value="4"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>2-3 Wochen Ferien</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.urlaubstage === '3'}
                                   className="card-input-element"
                                   name="urlaubstage"
                                   value="3"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>1-3 Wochen Ferien</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.urlaubstage === '1'}
                                   className="card-input-element"
                                   name="urlaubstage"
                                   value="1"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Weniger als 1 Woche Ferien / Keine Ferien oder Freitage</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepUrlaubstage;