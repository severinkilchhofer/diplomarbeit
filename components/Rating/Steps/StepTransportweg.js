import React from "react"

const StepTransportweg = (props) => {


    return (
        <>
            <div className="row pt-4 text-white">
                <div className="w-full pt-4 lg:col-12 text-white">
                    <h1 className="pb-16">Wie viele Kilometer Transportweg legte das Kleidungstück zurück?</h1>
                    <input
                        id="reversedRange"
                        name="transportweg"
                        min="1" max="9" step="1"
                        defaultValue={props.data ? props.data.transportweg : '1'}
                        onChange={val => props.onChange(val.target.value)}
                        className="rounded overflow-hidden appearance-none bg-gray w-full cursor-pointer focus:outline-none"
                        type="range"/>
                    <div className="flex justify-between text-xs text-sm text-white">
                        <span className="w-1/3 text-left">unter 100 km</span>
                        <span className="w-1/3 text-center">10'000 km</span>
                        <span className="w-1/3 text-right">über 30'000 km</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepTransportweg;