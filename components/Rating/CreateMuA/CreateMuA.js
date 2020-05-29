import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";

const CreateMuA = () => {

    const [productState, setProductState] = useState(() => {
            if (typeof window !== 'undefined') {
                const value = localStorage.getItem('muaData');
                return value !== null ? JSON.parse(value) : '';
            }
        }
    )

    useEffect(
        () => {
            localStorage.setItem('muaData', JSON.stringify(productState))
        }, [productState]
    )

    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        setProductState(data)
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
                    <div className="lg:col-6">
                        <div className="w-full pt-4">
                            <label className="block text-black text-sm font-bold mb-2">
                                Wie viele Stunden pro Woche leisten die Mitarbeiter?
                            </label>
                            <input
                                defaultValue={productState ? productState.slider : ''}
                                name="slider"
                                ref={register}
                                min="1" max="3" step="1" defaultChecked="2"
                                className="rounded overflow-hidden appearance-none bg-gray w-full cursor-pointer"
                                type="range"/>
                            <div className="flex justify-between text-xs text-black">
                                <span className="w-1/3 text-left">≤ 42h</span>
                                <span className="w-1/3 text-center">43h – 50h</span>
                                <span className="w-1/3 text-right">> 50h</span>
                            </div>
                        </div>

                        <div className="w-full pt-4">
                            <label className="block text-black text-sm font-bold mb-2">
                                Wie viele Wochen Ferien haben die Mitarbeiter in der Produktionsstätte?
                            </label>
                            <input
                                defaultValue={productState ? productState.ferien : ''}
                                name="ferien"
                                ref={register}
                                min="1" max="5" step="1" defaultChecked="1"
                                className="rounded overflow-hidden appearance-none bg-gray w-full cursor-pointer"
                                type="range"/>
                            <div className="flex justify-between text-xs text-black">
                                <span className="w-1/5 text-left">> 5 Wochen</span>
                                <span className="w-1/5 text-center">4-5 Wochen</span>
                                <span className="w-1/5 text-center">3-4 Wochen</span>
                                <span className="w-1/5 text-center">&lt; 1 Wochen</span>
                                <span className="w-1/5 text-right">0 Wochen</span>
                            </div>
                        </div>

                        <div className="w-full pt-4">
                            <label className="block text-black text-sm font-bold mb-2">
                                Werden geleistete Überstunden bezahlt?
                            </label>
                            <div className="mt-2">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input ref={register} type="radio" className="form-radio" name="ueberstunden" value="10"/>
                                            <span className="ml-2">Überstunden werden ausbezahlt</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input ref={register} type="radio" className="form-radio" name="ueberstunden" value="1"/>
                                            <span className="ml-2">Überstunden werden nicht ausbezahlt</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input ref={register} type="radio" className="form-radio" name="ueberstunden" value="0"/>
                                            <span className="ml-2">Überstunden gibt es nicht</span>
                                    </label>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-between pt-24">
                    <button className="p-4 bg-blue text-white font-bold rounded"
                            type="submit">Speichern
                    </button>
                </div>
            </form>
        </>
    )
}

export default CreateMuA;