import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import ClothingSelection from "../ClothingSelection/ClothingSelection";

const CreateRating = () => {

    const [productState, setProductState] = useState(() => {
            if (typeof window !== 'undefined') {
                const value = localStorage.getItem('ratingData');
                return value !== null ? JSON.parse(value) : '';
            }
        }
    )

    useEffect(
        () => {
            localStorage.setItem('ratingData', JSON.stringify(productState))
        }, [productState]
    )

    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => setProductState(data)

    return (
        <>
                <div className="row">
                    <div className="lg:col-8">
                        <h3>Bitte erfasse deine Produktinformationen</h3>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="lg:col-12">
                            <ClothingSelection/>
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="lg:col-6">
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2">
                                    Name des Herstellers
                                </label>
                                <input
                                    defaultValue={productState ? productState.name : ''}
                                    name="name"
                                    ref={register}
                                    className="shadow appearance-none border-2 border-blue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2">
                                    Name des Produktes
                                </label>
                                <input
                                    defaultValue={productState ? productState.productName : ''}
                                    name="productName"
                                    ref={register}
                                    className="shadow appearance-none border-2 border-blue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2">
                                    Beschreibung des Produktes
                                </label>
                                <textarea
                                    name="beschreibung"
                                    rows="4"
                                    ref={register}
                                    className="shadow appearance-none border-2 border-blue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    {productState ? productState.beschreibung : ''}</textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2">
                                    Herstellungsland
                                </label>
                                <input
                                    defaultValue={productState ? productState.herstellungsland : ''}
                                    name="herstellungsland"
                                    ref={register}
                                    className="shadow appearance-none border-2 border-blue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"/>
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

export default CreateRating;