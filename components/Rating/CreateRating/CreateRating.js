import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";

const CreateRating = () => {

    const [productState, setProductState] = useState(() => {
            if (typeof window !== 'undefined') {
                const value = localStorage.getItem('ratingData');
                return value !== null ? JSON.parse(value) : 'nada';
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
            <div className="container">
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                defaultValue={productState ? productState.name : ''}
                                name="name"
                                ref={register}
                                className="shadow appearance-none border-2 border-blue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Username"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                                Beschreibung
                            </label>
                            <input
                                defaultValue={productState ? productState.beschreibung : ''}
                                name="beschreibung"
                                ref={register}
                                className="shadow appearance-none border-2 border-blue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Beschreibung"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <input
                                className="bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                            </input>
                            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue"
                               href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
                <div className="container pt-64"></div>
            </div>
        </>
    )
}

export default CreateRating;