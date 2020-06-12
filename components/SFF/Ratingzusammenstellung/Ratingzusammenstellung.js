import React from "react";
import Shirt from "../../Shirt/Shirt";

const Ratingzusammenstellung = () => {
    return (
        <section className="p-2 bg-lightblue rounded">
            <div className="overflow-hidden flex justify-center flex-wrap w-full">
                <div className="p-5 sm:p-16 h-auto w-1/2 sm:w-32 md:w-1/3 flex-none overflow-hidden">
                    <Shirt fill={'#D1495B'} pattern={'#CCE6F6'}/>
                </div>

                <div className="pt-4 sm:pt-20 sm:pl-6">
                    <h5 className="text-blue">Ratingzusammenstellung</h5>
                    <p className="mb-2"><strong>8.3</strong> -> Menschen und Arbeitsrechte (33%)</p>
                    <p className="mb-2"><strong>8.2</strong> -> Ökologie und Nachhaltigkeit (33%)</p>
                    <p className="mb-2"><strong>8.4</strong> -> Rückverfolgbarkeit und Transparenz (33%)</p>
                    <hr/>
                    <p className="mt-2"><strong>8.3</strong> -> Gesamtrating</p>
                </div>
            </div>
        </section>
    );
}

export default Ratingzusammenstellung;
