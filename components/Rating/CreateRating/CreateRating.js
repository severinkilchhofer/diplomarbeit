import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import Shirt from "../../Shirt/Shirt";
import Pullover from "../../Pullover/Pullover";
import Socks from "../../Socks/Socks";

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

    const [selectedClothing, selectCloth] = useState({selected: 0, color: '#D1495B', pattern: '#CCE6F6'});

    useEffect(
        () => {
            localStorage.setItem('selectedClothing', JSON.stringify(selectedClothing))
        }, [selectedClothing]
    )

    const renderSwitch = ({selected, color, pattern}) => {
        switch (selected) {
            case 1:
                return <Pullover fill={color} pattern={pattern}/>;
            case 2:
                return <Socks fill={color} pattern={pattern}/>;
            default:
                return <Shirt fill={color} pattern={pattern}/>;
        }
    }

    return (
        <>
            <div className="container pt-32">
                <div className="row">
                    <div className="lg:col-8">
                        <h3>Bitte erfasse deine Produktinformationen</h3>
                    </div>
                </div>
                <form className=""
                      onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="lg:col-12">

                            <section>

                                <div className="overflow-hidden sm:flex w-full">

                                    <div className="p-10 h-auto w-full sm:w-56 md:w-1/3 flex-none overflow-hidden border-blue border-2 rounded">
                                        {renderSwitch(selectedClothing)}
                                    </div>

                                    <div className="flex flex-wrap pl-0 lg:pl-16">
                                        <div className="w-full">
                                            <label className="block text-black text-sm font-bold mb-2">
                                                Kleidungsstück auswählen
                                            </label>
                                            <button className="w-24 sm:w-32 p-4 border-blue border-2 mr-1 sm:mr-4 rounded"
                                                    onClick={() => selectCloth({selected: 0, color: '#d1495b', pattern: '#CCE6F6'})}>
                                                <img src="shirt_small.svg" alt=""/>
                                            </button>
                                            <button className="w-24 sm:w-32 p-4 border-blue border-2 mx-1 sm:mx-4 rounded"
                                                    onClick={() => selectCloth({selected: 1, color: '#F3E9D2', pattern: '#515A5E'})}>
                                                <img src="pullover_small.svg" alt=""/>
                                            </button>
                                            <button className="w-24 sm:w-32 p-4 border-blue border-2 mx-1 sm:mx-4 rounded"
                                                    onClick={() => selectCloth({selected: 2, color: '#4695BC', pattern: '#515A5E'})}>
                                                <img src="socks_small.svg" alt=""/>
                                            </button>
                                        </div>
                                        <div className="w-full pt-4">
                                            <label className="block text-black text-sm font-bold mb-2">
                                                Hauptfarbe wählen
                                            </label>
                                            <span className="w-6 h-6 m-1 rounded-full bg-yellow inline-block"
                                                  onClick={() => selectCloth({selected: selectedClothing.selected, color: '#ffd200', pattern: selectedClothing.pattern})}/>
                                            <span className="w-6 h-6 m-1 rounded-full bg-red inline-block"
                                                  onClick={() => selectCloth({selected: selectedClothing.selected, color: '#D1495B', pattern: selectedClothing.pattern})}/>
                                            <span className="w-6 h-6 m-1 rounded-full bg-green inline-block"
                                                  onClick={() => selectCloth({selected: selectedClothing.selected, color: '#1A936F', pattern: selectedClothing.pattern})}/>
                                            <span className="w-6 h-6 m-1 rounded-full bg-blue inline-block"
                                                  onClick={() => selectCloth({selected: selectedClothing.selected, color: '#114B5F', pattern: selectedClothing.pattern})}/>
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-black text-sm font-bold mb-2">
                                                Musterfarbe wählen
                                            </label>
                                            <span className="w-6 h-6 m-1 rounded-full bg-yellow inline-block"
                                                  onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#ffd200'})}/>
                                            <span className="w-6 h-6 m-1 rounded-full bg-red inline-block"
                                                  onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#D1495B'})}/>
                                            <span className="w-6 h-6 m-1 rounded-full bg-green inline-block"
                                                  onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#1A936F'})}/>
                                            <span className="w-6 h-6 m-1 rounded-full bg-blue inline-block"
                                                  onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#114B5F'})}/>
                                        </div>
                                    </div>
                                </div>
                            </section>
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
                                    defaultValue={productState ? productState.beschreibung : ''}
                                    name="beschreibung"
                                    rows="4"
                                    ref={register}
                                    className="shadow appearance-none border-2 border-blue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Beschreibung"/>
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
                        </div>
                        <div className="container pt-64"></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateRating;