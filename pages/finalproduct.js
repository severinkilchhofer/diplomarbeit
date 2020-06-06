import Nav from "../components/Nav/Nav";
import React, {useState} from 'react'
import GeneratedProduct from "../components/Rating/GeneratedProduct/GeneratedProduct";
import Link from "next/link";

function FinalProduct() {

    return (
        <>
            <Nav currentOpen={'rating'} bgColor={'blue'}/>

            <div className="w-screen h-screen bg-blue">
                <div className="container">
                    <div className="row pb-8 pt-24">
                        <div className="lg:col-8 text-white sm:pl-6">
                            <h1 className="font-black">Herzliche Gratulation zu deinem Rating!</h1>
                            <p className="pt-4">Hier siehst du dein erstelltes Produkt inklusive dem berechneten Rating.
                                Auf dem Ratingbatch findest du die Inforamtionen wie dein Rating berechnet wurde.</p>
                        </div>
                    </div>

                    <GeneratedProduct/>

                    <div className="flex items-center justify-end pt-4">
                        <Link href={'/rating'} as={process.env.BACKEND_URL + '/rating'}>
                            <button
                                className="p-4 m-4 bg-transparent text-white font-bold rounded border-2 border-white">
                                Zu Rating erstellen zurück
                            </button>
                        </Link>

                        <Link href={'/'} as={process.env.BACKEND_URL + '/'}>
                            <button className="p-4 m-4 bg-white text-blue font-bold rounded border-2 border-white">Zur
                                Startseite
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FinalProduct;


