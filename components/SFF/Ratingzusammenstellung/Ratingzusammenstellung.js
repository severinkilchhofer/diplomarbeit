import React from "react";
import Shirt from "../../Shirt/Shirt";

const Ratingzusammenstellung = () => {
    return (
        <section className="p-2 bg-lightblue rounded">
            <div className="overflow-hidden sm:flex w-full">
                <div className="pt-4 h-auto w-1/2 sm:w-56 md:w-1/3 flex-none overflow-hidden">
                    <Shirt fill={'#D1495B'}/>
                </div>

                <div className="pt-4 sm:pl-6">
                    <h5 className="text-blue">Ratingzusammenstellung</h5>
                    <p className="mb-2"><strong>9.2</strong> -> Produkt (10%)</p>
                    <p className="mb-2"><strong>8.6</strong> -> Menschen und Arbeitsrechte (30%)</p>
                    <p className="mb-2"><strong>7.6</strong> -> Ökologie und Nachhaltigkeit (30%)</p>
                    <p className="mb-2"><strong>7.2</strong> -> Rückverfolgbarkeit und Transparenz (30%)</p>
                    <hr/>
                    <p className="mt-2"><strong>7.9 -> Finales Rating</strong></p>
                </div>
            </div>
        </section>
    );
}

export default Ratingzusammenstellung;
