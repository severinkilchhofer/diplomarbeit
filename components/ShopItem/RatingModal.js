import React from "react";

const RatingModal = (props) => {
    return (
        <div className="p-2 rounded">
            <h5>Sustainable Fashion Rating</h5>
            <div className="overflow-hidden sm:flex w-full">
                <div className="pt-6 p-4 h-auto w-1/2 sm:w-56 md:w-1/5 flex-none overflow-hidden">
                    <button
                        className={`rating${props.rating} w-16 h-16 rounded-tl-full rounded-bl-full rounded-br-full`}>
                        <p className="font-bold text-lg">{props.rating}</p>
                    </button>
                </div>
                <div className="pt-4 md:pr-8 min-w-full">
                    <p className="mb-2 font-bold">Ratingzusammenstellung</p>
                    <p className="mb-2"><strong>8.3</strong> -> Menschen und Arbeitsrechte&nbsp;(30%)</p>
                    <p className="mb-2"><strong>8.2</strong> -> Ökologie und Nachhaltigkeit&nbsp;(30%)</p>
                    <p className="mb-2"><strong>8.4</strong> -> Rückverfolgbarkeit und Transparenz&nbsp;(30%)</p>
                    <hr/>
                    <p className="mt-2"><strong>8.3</strong> -> Gesamtrating</p>
                </div>

            </div>
            <div className="w-full md:w-4/5 pt-16 sm:float-right">
                <p className="mb-2 font-bold">Ratingskala</p>
                <img src="batches.svg" alt="Batches aller Kategorieratings"/>
            </div>

        </div>
    );
}

export default RatingModal;
