import React, {useEffect, useState} from 'react'
import {useForm, ErrorMessage} from "react-hook-form";
import ClothingSelection from "../ClothingSelection/ClothingSelection";

const CreateRating = (props) => {

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

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        setProductState(data);
        props.onClick(true)
    }

    return (
        <>
            <ErrorMessage errors={errors} name="name" message="Bitte Name des Herstellers ausfüllen"
                          as={<div className="bg-red border-red border-2 text-white p-2 mb-4 rounded" role="alert">
                          </div>}/>
            <ErrorMessage errors={errors} name="beschreibung" message="Bitte Beschreibung ausfüllen"
                          as={<div className="bg-red border-red border-2 text-white p-2 mb-4 rounded" role="alert">
                          </div>}/>
            <ErrorMessage errors={errors} name="productName" message="Bitte Name des Produktes ausfüllen"
                          as={<div className="bg-red border-red border-2 text-white p-2 mb-4 rounded" role="alert">
                          </div>}/>
            <ErrorMessage errors={errors} name="price" message="Bitte einen Preis angeben"
                          as={<div className="bg-red border-red border-2 text-white p-2 mb-4 rounded" role="alert">
                          </div>}/>
                <div className="row pt-10">
                    <div className="lg:col-8">
                        <p className="text-white text-sm sm:text-base font-bold mb-4">Bitte erfasse deine
                            Produktinformationen</p>
                    </div>
                </div>
                <div className="row">
                    <div className="lg:col-12">
                        <ClothingSelection/>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row pt-4">
                        <div className="lg:col-6 mb-6">
                            <label className="block text-white text-sm sm:text-base font-bold mb-2">
                                Name des Herstellers
                            </label>
                            <input
                                defaultValue={productState ? productState.name : ''}
                                name="name"
                                ref={register({required: true})}
                                className="shadow appearance-none border-2 border-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"/>
                        </div>
                        <div className="lg:col-6 mb-6">
                            <label className="block text-white text-sm sm:text-base font-bold mb-2">
                                Name des Produktes
                            </label>
                            <input
                                defaultValue={productState ? productState.productName : ''}
                                name="productName"
                                ref={register({required: true})}
                                className="shadow appearance-none border-2 border-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"/>
                        </div>

                        <div className="lg:col-6 mb-6">
                            <label className="block text-white text-sm sm:text-base font-bold mb-2">
                                Beschreibung des Produktes
                            </label>
                            <textarea
                                name="beschreibung"
                                rows="2"
                                ref={register({required: true})}
                                className="shadow appearance-none border-2 border-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    {productState ? productState.beschreibung : ''}</textarea>
                        </div>

                        <div className="lg:col-6 mb-6">
                            <label className="block text-white text-sm sm:text-base font-bold mb-2">
                                Preis des Produktes in CHF
                            </label>
                            <input
                                defaultValue={productState ? productState.price : ''}
                                name="price"
                                ref={register({required: true})}
                                className="shadow appearance-none border-2 border-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="number"/>
                        </div>

                        <div className="lg:col-6 mb-6">
                            <label className="block text-white text-sm sm:text-base font-bold mb-2">
                                Herstellungsland
                            </label>
                            <input
                                defaultValue={productState ? productState.herstellungsland : ''}
                                name="herstellungsland"
                                ref={register}
                                className="shadow appearance-none border-2 border-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"/>
                        </div>

                        <div className="lg:col-6 mb-6">
                            <div className="flex items-center justify-end pt-4 mb-auto">
                                <button className="bg-blue text-white font-bold rounded absolute bottom-0 focus:outline-none"
                                        type="submit">Weiter zu den Fragen -&gt;
                                </button>
                            </div>
                        </div>

                    </div>
                </form>
        </>
    )
}

export default CreateRating;