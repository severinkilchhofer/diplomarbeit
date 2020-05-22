import React from "react";
import Shirt from "../Shirt/Shirt";

const ShopItem = (props) => {
    return (
        <section className="m-2 leading-normal">
            <div className="shadow-xl rounded overflow-hidden m-4 sm:flex w-full">
                <div className="flex justify-center bg-gray m-5 rounded h-48 sm:h-auto sm:w-56 md:w-1/3 flex-none rounded overflow-hidden">
                    <Shirt fill={'#D1495B'}/>
                </div>

                <div className="px-6 py-4">
                    <p className="mb-2 font-bold text-gray">{props.brand}</p>
                    <h2>{props.name}</h2>
                    <p className="mb-4 text-black text-sm">{props.description}</p>
                    <p className="mb-2 font-bold">CHF {props.price}.-</p>

                    <div>
                        <button className="w-16 h-16 bg-rgreen rounded-tl-full rounded-bl-full rounded-br-full">
                            <p className="font-bold text-lg">{props.rating}</p>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ShopItem;
