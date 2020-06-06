import React from "react"

const StepSelteneMetalle = (props) => {

    function getHerstellerName() {
        if (typeof window !== 'undefined') {
            const firma = localStorage.getItem('ratingData');
            return firma !== null ? JSON.parse(firma) : 'deine Firma';
        }
    }

    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full pt-4 lg:col-12 text-white">
                    <h1>Verwendet {getHerstellerName().name} seltene Metalle oder Rohstoffe?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.selteneMetalle === '1'}
                                   className="card-input-element"
                                   name="selteneMetalle"
                                   value="1"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Ja</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.selteneMetalle === '10'}
                                   className="card-input-element"
                                   name="selteneMetalle"
                                   value="10"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Nein</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepSelteneMetalle;