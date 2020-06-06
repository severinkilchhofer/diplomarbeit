import React from "react"

const StepLieferanten = (props) => {

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
                    <h1>Veröffentlicht {getHerstellerName().name} ihre Lieferanten von Rohmaterialien?</h1>
                    <div className="mt-1 sm:mt-8 flex flex-wrap">
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.lieferanten === '10'}
                                   className="card-input-element"
                                   name="lieferanten"
                                   value="10"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Ja, alle sind bekannt</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.lieferanten === '5'}
                                   className="card-input-element"
                                   name="lieferanten"
                                   value="5"
                                   onChange={val => props.onChange(val.target.value)}/>
                            <div className="radio-card">
                                <p>Teilweise bekannt</p>
                            </div>
                        </label>
                        <label className="p-2">
                            <input type="radio"
                                   defaultChecked={props.data.lieferanten === '1'}
                                   className="card-input-element"
                                   name="lieferanten"
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

export default StepLieferanten;