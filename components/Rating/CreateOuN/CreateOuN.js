import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

const CreateOuN = (props) => {

    const [ounState, setOunState] = useState(() => {
            if (typeof window !== 'undefined') {
                const value = localStorage.getItem('ounData');
                return value !== null ? JSON.parse(value) : '';
            }
        }
    )

    useEffect(
        () => {
            localStorage.setItem('ounData', JSON.stringify(ounState))
        }, [ounState]
    )

    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        setOunState(data)
    }

    return (
        <>
            <div className="row">
                <div className="lg:col-8">
                    <h3>Nachhaltigkeit und Ökologie</h3>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row pt-4">
                    <div className="w-full pt-4 lg:col-6">
                        <label className="block text-black text-sm font-bold mb-2">
                            Verwendet Firma X nachhaltige (ökologisch angebaute oder rezyklierte) Rohstoffe?
                        </label>
                        <div className="mt-2">
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={ounState ? ounState.rohstoffe === '10' : ''}
                                       className="form-radio" name="rohstoffe" value="10"/>
                                <span className="ml-2">Ja, ausschliesslich</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={ounState ? ounState.rohstoffe === '5' : ''}
                                       className="form-radio" name="rohstoffe" value="5"/>
                                <span className="ml-2">Teilweise</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={ounState ? ounState.rohstoffe === '1' : ''}
                                       className="form-radio" name="rohstoffe" value="1"/>
                                <span className="ml-2">Nein</span>
                            </label>
                        </div>
                    </div>

                    <div className="w-full pt-4 lg:col-6">
                        <label className="block text-black text-sm font-bold mb-2">
                            Verwendet Firma X seltene Metalle oder Rohstoffe?
                        </label>
                        <div className="mt-2">
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={ounState ? ounState.selteneMetalle === '1' : ''}
                                       className="form-radio" name="selteneMetalle" value="1"/>
                                <span className="ml-2">Ja</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={ounState ? ounState.selteneMetalle === '10' : ''}
                                       className="form-radio" name="selteneMetalle" value="10"/>
                                <span className="ml-2">Nein</span>
                            </label>
                        </div>
                    </div>

                    <div className="w-full pt-4 lg:col-6">
                        <label className="block text-black text-sm font-bold mb-2">
                            Wie wird mit dem Abwasser aus der Kleiderherstellung umgegangen?
                        </label>
                        <div className="mt-2">
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={ounState ? ounState.abwasser === '10' : ''}
                                       className="form-radio" name="abwasser" value="10"/>
                                <span className="ml-2">Das Abwasser wird gereinigt und die Schadstoffgrenze der vorher beinhalteten Stoffe wird nicht überschritten.</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={ounState ? ounState.abwasser === '3' : ''}
                                       className="form-radio" name="abwasser" value="3"/>
                                <span className="ml-2">Das Abwasser wird gereinigt, aber die Schadstoffgrenze der vorher beinhalteten Stoffe wird leicht überschritten.</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={ounState ? ounState.abwasser === '1' : ''}
                                       className="form-radio" name="abwasser" value="1"/>
                                <span className="ml-2">Das Abwasser wird nicht / nur schwach gereinigt, aber die Schadstoffgrenze der vorher beinhalteten Stoffe wird stark überschritten.</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={ounState ? ounState.abwasser === '0' : ''}
                                       className="form-radio" name="abwasser" value="0"/>
                                <span className="ml-2">Das einzuleitende Abwasser in Fluss ist > 30°C oder führt zu einer Erwärmung des Fliessgewässers von über 3°C.</span>
                            </label>
                        </div>
                    </div>

                    <div className="w-full pt-4 lg:col-6">
                        <label className="block text-black text-sm font-bold mb-2">
                            Wie viele Kilometer Transportweg legte das Kleidungstück zurück?
                        </label>
                        <input
                            name="transportweg"
                            ref={register}
                            min="1" max="9" step="1"
                            defaultValue={ounState ? ounState.transportweg : '1'}
                            className="rounded overflow-hidden appearance-none bg-gray w-full cursor-pointer"
                            type="range"/>
                        <div className="flex justify-between text-xs text-black">
                            <span className="w-1/3 text-left">> 40'000 km</span>
                            <span className="w-1/3 text-center">20'000 km</span>
                            <span className="w-1/3 text-right">&lt; 1000 km</span>
                        </div>
                    </div>

                </div>


                <div className="flex items-center justify-end pt-24">
                    <button className="p-4 m-4 bg-white text-blue font-bold rounded border-2 border-blue"
                            type="submit"
                            onClick={props.previousStep}>Zurück
                    </button>
                    <button className="p-4 m-4 bg-blue text-white font-bold rounded border-2 border-blue"
                            type="submit"
                            onClick={props.nextStep}>Weiter
                    </button>
                </div>
            </form>
        </>
    )
}

export default CreateOuN;