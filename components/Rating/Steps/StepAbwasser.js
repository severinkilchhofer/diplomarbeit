import React from "react"

const StepAbwasser = (props) => {
    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full pt-4 lg:col-12 text-white">
                    <h1>Wie wird mit dem Abwasser aus der Kleiderherstellung umgegangen?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="p-2 w-full">
                            <input type="radio"
                                   defaultChecked={props.data.abwasser === '10'}
                                   className="card-input-element"
                                   name="abwasser"
                                   value="10"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Das Abwasser wird gereinigt und die Schadstoffgrenze wird nicht überschritten.</p>
                            </div>
                        </label>
                        <label className="p-2 w-full">
                            <input type="radio"
                                   defaultChecked={props.data.abwasser === '3'}
                                   className="card-input-element"
                                   name="abwasser"
                                   value="3"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Das Abwasser wird gereinigt, aber die Schadstoffgrenze wird leicht überschritten.</p>
                            </div>
                        </label>
                        <label className="p-2 w-full">
                            <input type="radio"
                                   defaultChecked={props.data.abwasser === '1'}
                                   className="card-input-element"
                                   name="abwasser"
                                   value="1"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Das Abwasser wird nicht / nur schwach gereinigt, aber die Schadstoffgrenze wird stark überschritten.</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepAbwasser;