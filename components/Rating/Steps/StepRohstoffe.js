import React from "react"

const StepRohstoffe = (props) => {

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
                    <h1>Verwendet {getHerstellerName().name} nachhaltige (ökologisch angebaute oder rezyklierte) Rohstoffe?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.rohstoffe === '10'}
                                   className="card-input-element"
                                   name="rohstoffe"
                                   value="10"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Ja, ausschliesslich</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.rohstoffe === '5'}
                                   className="card-input-element"
                                   name="rohstoffe"
                                   value="5"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Teilweise</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.rohstoffe === '1'}
                                   className="card-input-element"
                                   name="rohstoffe"
                                   value="1"
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

export default StepRohstoffe;