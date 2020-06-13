import React from "react"

const StepVerarbeitungsbetriebe = (props) => {

    function getHerstellerName() {
        if (typeof window !== 'undefined') {
            const firma = localStorage.getItem('ratingData');
            return firma !== null ? JSON.parse(firma) : 'deine Firma';
        }
    }

    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full sm:pt-4 lg:col-12 text-white">
                    <h1>Veröffentlicht {getHerstellerName().name} ihre Verarbeitungsbetriebe?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.verarbeitungsbetriebe === '10'}
                                   className="card-input-element"
                                   name="verarbeitungsbetriebe"
                                   value="10"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Ja, alle sind öffentlich bekannt</p>
                            </div>
                        </label>
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.verarbeitungsbetriebe === '5'}
                                   className="card-input-element"
                                   name="verarbeitungsbetriebe"
                                   value="5"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Einzelne sind öffentlich bekannt</p>
                            </div>
                        </label>
                        <label className="py-2 sm:px-2 w-full sm:w-auto">
                            <input type="radio"
                                   defaultChecked={props.data.verarbeitungsbetriebe === '1'}
                                   className="card-input-element"
                                   name="verarbeitungsbetriebe"
                                   value="1"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Keine sind bekannt</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepVerarbeitungsbetriebe;