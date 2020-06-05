import React from "react"


const StepUrlaubstage = (props) => {


    return (
        <>
            <form >
                <div className="row pt-4">
                    <div className="w-full pt-4 lg:col-6">
                        <label className="block text-black text-sm font-bold mb-2">
                            Wie viele Urlaubstage und Freitage werden gewährleistet?
                        </label>
                        <div className="mt-2">
                            <label className="inline-flex items-baseline w-full">
                                <input type="radio"
                                       defaultChecked={props.data.urlaubstage === '10'}
                                       className="form-radio" name="rohstoffe" value="10"
                                       onChange={lala => props.onChange(lala.target.value)}/>
                                <span className="ml-2">Ja, ausschliesslich</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input type="radio"
                                       defaultChecked={props.data.urlaubstage === '5'}
                                       className="form-radio" name="rohstoffe" value="5"
                                       onChange={lala => props.onChange(lala.target.value)}/>
                                <span className="ml-2">Teilweise</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input type="radio"
                                       defaultChecked={props.data.urlaubstage === '1'}
                                       className="form-radio" name="rohstoffe" value="1"
                                       onChange={lala => props.onChange(lala.target.value)}/>
                                <span className="ml-2">Nein</span>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            <div className="flex items-center justify-end pt-4">
                <button className="bg-blue p-4 text-white font-bold rounded"
                        type="button"
                        onClick={props.previousStep}>Zurück
                </button>
                <button className="bg-blue p-4 text-white font-bold rounded"
                        type="button">Ende
                </button>
            </div>
        </>
    )
}

export default StepUrlaubstage;