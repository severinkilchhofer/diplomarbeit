import React from "react";

const ShopItem = () => {
    return (
        <section className="m-2 leading-normal flex">
            <div className="shadow-lg rounded overflow-hidden m-4 sm:flex w-full">
                <div
                    className="flex justify-center bg-gray m-5 rounded h-48 sm:h-auto sm:w-56 md:w-1/3 flex-none rounded overflow-hidden">
                    <img className="self-center p-16 md:p-10" src="t-shirt-red.svg"
                         alt="Red T-Shirt Mountain One Product Illustration"/>
                </div>

                <div className="px-6 py-4">
                    <p className="mb-2 font-bold text-gray">The South Mountain</p>
                    <h2>T-Shirt Mountain One</h2>
                    <p className="mb-4 text-black text-sm">
                        Das Männer T-Shirt in Kontrastfarbe und Rundhals ist aus regenerierten Fischernetzen und
                        Nylon-Resten, sogenanntes ECONYL®-Garn hergestellt. Die T-Shirts von The South Mountain werden
                        in der Schweiz unter fairen Arbeitsbedingungen und einem minimalen Transportweg produziert.
                    </p>
                    <p className="mb-2 font-bold">CHF 65.-</p>

                    <div>
                        <button className="w-16 h-16 bg-rgreen rounded-tl-full rounded-bl-full rounded-br-full">
                            <p className="font-bold text-lg">8</p>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ShopItem;