import React from "react"

const StepSicherheit = (props) => {


    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full sm:pt-4 lg:col-12 text-white">
                    <h1>Ist die Sicherheit und Gesundheit der Arbeitnehmer stets gewährleistet?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.sicherheit === '10'}
                                   className="card-input-element"
                                   name="sicherheit"
                                   value="10"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Ja sie ist jederzeit vollständig gewährleistet. Dazu dient beispielsweise das Tragen von Schutzkleidung.</p>
                            </div>
                        </label>
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.sicherheit === '3'}
                                   className="card-input-element"
                                   name="sicherheit"
                                   value="3"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Nein sie ist teilweise nicht gewährleistet. Die Arbeitnehmer sind teilweise gefährlichen Substanzen / Maschinen ausgesetzt, wobei es keine oder nur ungenügende Schutzmassnahmen gibt.</p>
                            </div>
                        </label>
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.sicherheit === '1'}
                                   className="card-input-element"
                                   name="sicherheit"
                                   value="1"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Nein der Arbeitnehmer ist oft gefährlichen Substanzen / Maschinen ausgesetzt, wobei es keine oder nur ungenügende Schutzmassnahmen gibt.</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepSicherheit;