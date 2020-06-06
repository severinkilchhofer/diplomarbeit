import React from "react"
import {useForm} from "react-hook-form";

const StepLabel = (props) => {
    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full pt-4 lg:col-12 text-white">
                    <h1>Haben die Produkte ein Label, welches von unabhängigen Stellen geprüft werden kann?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.label === '2'}
                                   className="card-input-element"
                                   name="label"
                                   value="2"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>GOTS – Global organic textile standard</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.label === '2'}
                                   className="card-input-element"
                                   name="label"
                                   value="2"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>RWS - Responsible Wool Standard</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.label === '2'}
                                   className="card-input-element"
                                   name="label"
                                   value="2"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>RDS - Responsible Down Standard</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.label === '2'}
                                   className="card-input-element"
                                   name="label"
                                   value="2"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>RCS - Recycled Claim Standard</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.label === '0'}
                                   className="card-input-element"
                                   name="label"
                                   value="0"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Kein Label vorhanden</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepLabel;