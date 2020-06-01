import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import Link from "next/link";

const CreateRuT = (props) => {

    const [rutState, setRunState] = useState(() => {
            if (typeof window !== 'undefined') {
                const value = localStorage.getItem('rutData');
                return value !== null ? JSON.parse(value) : '';
            }
        }
    )

    useEffect(
        () => {
            localStorage.setItem('rutData', JSON.stringify(rutState))
        }, [rutState]
    )

    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        setRunState(data)
    }

    return (
        <>
            <div className="row">
                <div className="lg:col-8">
                    <h3>Rückverfolgbarkeit und Transparenz</h3>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row pt-4">

                    <div className="w-full pt-4 lg:col-6">
                        <label className="block text-black text-sm font-bold mb-2">
                            Veröffentlicht Firma X ihre Verarbeitungsbetriebe?
                        </label>
                        <div className="mt-2">
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={rutState ? rutState.verarbeitungsbetriebe === '10' : ''}
                                       className="form-radio" name="verarbeitungsbetriebe" value="10"/>
                                <span className="ml-2">Ja, alle sind bekannt.</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={rutState ? rutState.verarbeitungsbetriebe === '5' : ''}
                                       className="form-radio" name="verarbeitungsbetriebe" value="5"/>
                                <span className="ml-2">Teilweise bekannt</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={rutState ? rutState.verarbeitungsbetriebe === '1' : ''}
                                       className="form-radio" name="verarbeitungsbetriebe" value="1"/>
                                <span className="ml-2">Nicht bekannt</span>
                            </label>
                        </div>
                    </div>


                    <div className="w-full pt-4 lg:col-6">
                        <label className="block text-black text-sm font-bold mb-2">
                            Veröffentlicht Firma X ihre Lieferanten von Rohmaterialien?
                        </label>
                        <div className="mt-2">
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={rutState ? rutState.rohmaterialien === '10' : ''}
                                       className="form-radio" name="rohmaterialien" value="10"/>
                                <span className="ml-2">Ja, alle sind bekannt.</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={rutState ? rutState.rohmaterialien === '5' : ''}
                                       className="form-radio" name="rohmaterialien" value="5"/>
                                <span className="ml-2">Teilweise bekannt</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={rutState ? rutState.rohmaterialien === '1' : ''}
                                       className="form-radio" name="rohmaterialien" value="1"/>
                                <span className="ml-2">Nicht bekannt</span>
                            </label>
                        </div>
                    </div>

                    <div className="w-full pt-4 lg:col-6">
                        <label className="block text-black text-sm font-bold mb-2">
                            Sind die verwendeten Materialien deklariert und öffentlich einsehbar?
                        </label>
                        <div className="mt-2">
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={rutState ? rutState.materialdeklaration === '10' : ''}
                                       className="form-radio" name="materialdeklaration" value="10"/>
                                <span className="ml-2">Ja, alle sind bekannt.</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={rutState ? rutState.materialdeklaration === '5' : ''}
                                       className="form-radio" name="materialdeklaration" value="5"/>
                                <span className="ml-2">Teilweise bekannt</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={rutState ? rutState.materialdeklaration === '3' : ''}
                                       className="form-radio" name="materialdeklaration" value="3"/>
                                <span className="ml-2">Nur wenige bekannt</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="radio"
                                       defaultChecked={rutState ? rutState.materialdeklaration === '1' : ''}
                                       className="form-radio" name="materialdeklaration" value="1"/>
                                <span className="ml-2">Nicht bekannt</span>
                            </label>
                        </div>
                    </div>

                    <div className="w-full pt-4 lg:col-6">
                        <label className="block text-black text-sm font-bold mb-2">
                            Haben die Produkte ein Label, welches von unabhängigen Stellen geprüft werden kann?
                        </label>
                        <div className="mt-2">
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="checkbox"
                                       defaultChecked={rutState ? rutState.label[0] === '1' : ''}
                                       className="form-radio" name="label" value="1"/>
                                <span className="ml-2">GOTS – Global organic textile standard</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="checkbox"
                                       defaultChecked={rutState ? rutState.label[1] === '1' : ''}
                                       className="form-radio" name="label" value="1"/>
                                <span className="ml-2">RWS - Responsible Wool Standard</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="checkbox"
                                       defaultChecked={rutState ? rutState.label[2] === '1' : ''}
                                       className="form-radio" name="label" value="1"/>
                                <span className="ml-2">RDS - Responsible Down Standard</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="checkbox"
                                       defaultChecked={rutState ? rutState.label[3] === '1' : ''}
                                       className="form-radio" name="label" value="1"/>
                                <span className="ml-2">RCS - Recycled Claim Standard</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="checkbox"
                                       defaultChecked={rutState ? rutState.label[4] === '1' : ''}
                                       className="form-radio" name="label" value="1"/>
                                <span className="ml-2">OCS 100 - Organic Content Standard</span>
                            </label>
                            <label className="inline-flex items-baseline w-full">
                                <input ref={register} type="checkbox"
                                       defaultChecked={rutState ? rutState.label[5] === '1' : ''}
                                       className="form-radio" name="label" value="1"/>
                                <span className="ml-2">IVN - Naturtextil</span>
                            </label>
                        </div>
                    </div>

                </div>


                <div className="flex items-center justify-end pt-24">
                    <button className="p-4 m-4 bg-white text-blue font-bold rounded border-2 border-blue"
                            type="submit"
                            onClick={props.previousStep}>Zurück
                    </button>
                    <Link href={'/finalproduct'} as={process.env.BACKEND_URL + '/finalproduct'}>
                        <button className="p-4 m-4 bg-blue text-white font-bold rounded border-2 border-blue"
                                type="submit"
                                onClick={props.nextStep}>Finales Rating berechnen
                        </button>
                    </Link>
                </div>
            </form>
        </>
    )
}

export default CreateRuT;