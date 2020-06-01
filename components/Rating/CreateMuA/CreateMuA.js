import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";

const CreateMuA = (props) => {

    const [muaState, setMuaState] = useState(() => {
            if (typeof window !== 'undefined') {
                const value = localStorage.getItem('muaData');
                return value !== null ? JSON.parse(value) : '';
            }
        }
    )

    useEffect(
        () => {
            localStorage.setItem('muaData', JSON.stringify(muaState))
        }, [muaState]
    )

    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        setMuaState(data)
    }

    return (
        <>
            <div className="row">
                <div className="lg:col-8">
                    <h3>Menschen und Arbeitsrechte</h3>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row pt-4">
                        <div className="w-full pt-4 lg:col-6">
                            <label className="block text-black text-sm font-bold mb-2">
                                Gibt es in deiner Produktionsstätte Kinderarbeit?
                            </label>
                            <div className="mt-2">
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.kinderarbeit === '1' : ''}
                                           className="form-radio" name="kinderarbeit" value="1"/>
                                    <span className="ml-2">Ja</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.kinderarbeit === '10' : ''}
                                           className="form-radio" name="kinderarbeit" value="10"/>
                                    <span className="ml-2">Nein</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.kinderarbeit === '5' : ''}
                                           className="form-radio" name="kinderarbeit" value="5"/>
                                    <span className="ml-2">Nicht bekannt</span>
                                </label>
                            </div>
                        </div>

                        <div className="w-full pt-4 lg:col-6">
                            <label className="block text-black text-sm font-bold mb-2">
                                Wie viele Stunden pro Woche müssen geleistet werden?
                            </label>
                            <div className="mt-2">
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.arbeitszeit === '10' : ''}
                                           className="form-radio" name="arbeitszeit" value="10"/>
                                    <span className="ml-2">≤ 42h / Woche</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.arbeitszeit === '5' : ''}
                                           className="form-radio" name="arbeitszeit" value="5"/>
                                    <span className="ml-2">43 – 50h / Woche</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.arbeitszeit === '1' : ''}
                                           className="form-radio" name="arbeitszeit" value="1"/>
                                    <span className="ml-2">> 50h / Woche</span>
                                </label>
                            </div>
                        </div>


                        <div className="w-full pt-4 lg:col-6">
                            <label className="block text-black text-sm font-bold mb-2">
                                Wie viele Urlaubstage und Freitage werden gewährleistet?
                            </label>
                            <div className="mt-2">
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.ferien === '10' : ''}
                                           className="form-radio" name="ferien" value="10"/>
                                    <span className="ml-2">> 5 Wochen Ferien</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.ferien === '8' : ''}
                                           className="form-radio" name="ferien" value="8"/>
                                    <span className="ml-2">4-5 Wochen Ferien</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.ferien === '6' : ''}
                                           className="form-radio" name="ferien" value="6"/>
                                    <span className="ml-2">3-4 Wochen Ferien</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.ferien === '4' : ''}
                                           className="form-radio" name="ferien" value="4"/>
                                    <span className="ml-2">2-3 Wochen Ferien</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.ferien === '3' : ''}
                                           className="form-radio" name="ferien" value="3"/>
                                    <span className="ml-2">1-3 Wochen Ferien</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.ferien === '1' : ''}
                                           className="form-radio" name="ferien" value="1"/>
                                    <span
                                        className="ml-2">Weniger als 1 Woche Ferien / Keine Ferien oder Freitage</span>
                                </label>
                            </div>
                        </div>

                        <div className="w-full pt-4 lg:col-6">
                            <label className="block text-black text-sm font-bold mb-2">
                                Werden geleistete Überstunden bezahlt?
                            </label>
                            <div className="mt-2">
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.ueberstunden === '10' : ''}
                                           className="form-radio" name="ueberstunden" value="10"/>
                                    <span className="ml-2">Überstunden werden ausbezahlt</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.ueberstunden === '1' : ''}
                                           className="form-radio" name="ueberstunden" value="1"/>
                                    <span className="ml-2">Überstunden werden nicht ausbezahlt</span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.ueberstunden === '0' : ''}
                                           className="form-radio" name="ueberstunden" value="0"/>
                                    <span className="ml-2">Überstunden gibt es nicht</span>
                                </label>
                            </div>
                        </div>

                        <div className="w-full pt-4 lg:col-6">
                            <label className="block text-black text-sm font-bold mb-2">
                                Ist die Sicherheit und Gesundheit der Arbeitnehmer stets gewährleistet?
                            </label>
                            <div className="mt-2">
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.gesundheit === '10' : ''}
                                           className="form-radio" name="gesundheit" value="10"/>
                                    <span className="ml-2">Die physische und psychische Gesundheit und Sicherheit des Arbeitnehmers sind jederzeit vollständig gewährleistet. Dazu dient beispielsweise das Tragen von Schutzkleidung. </span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.gesundheit === '3' : ''}
                                           className="form-radio" name="gesundheit" value="3"/>
                                    <span className="ml-2">Die physische und psychische Gesundheit und Sicherheit des Arbeitnehmers sind teilweise nicht immer gewährleistet. Die Arbeitnehmer sind teilweise gefährlichen Substanzen / Maschinen ausgesetzt, wobei es keine oder nur ungenügende Schutzmassnahmen gibt. </span>
                                </label>
                                <label className="inline-flex items-baseline w-full">
                                    <input ref={register} type="radio"
                                           defaultChecked={muaState ? muaState.gesundheit === '1' : ''}
                                           className="form-radio" name="gesundheit" value="1"/>
                                    <span className="ml-2">Die physische und psychische Gesundheit und Sicherheit des Arbeitnehmers sind oft / stark gefährlichen Substanzen / Maschinen ausgesetzt, wobei es keine oder nur ungenügende Schutzmassnahmen gibt.</span>
                                </label>
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

export default CreateMuA;