import Nav from "../components/Nav/Nav";
import React, {useState} from 'react'
import GeneratedProduct from "../components/Rating/GeneratedProduct/GeneratedProduct";
import Link from "next/link";

function FinalProduct() {

    function removeProduct() {
        localStorage.removeItem('ratingData');
        localStorage.removeItem('selectedClothing');
        localStorage.removeItem('muaData');
        localStorage.removeItem('rutData');
        localStorage.removeItem('ounData');

    }

    return (
        <>
            <Nav currentOpen={'rating'} bgColor={'blue'}/>

            <div className="w-screen h-screen bg-blue">
                <div className="container">
                    <div className="row pb-32">
                        <div className="col text-white">
                            <h1 className="text-center font-black">Herzliche Gratulation zu deinem Rating!</h1>
                            <p className="text-center pt-4">Du siehst nun dein Rating und ich hoffe, du hattest Spass
                                meine
                                Diplomarbeit zu entdecken!</p>
                        </div>
                    </div>
                    <GeneratedProduct/>

                    <div className="flex items-center justify-end pt-4">
                        <Link href={'/rating'} as={process.env.BACKEND_URL + '/rating'}>
                            <button
                                className="p-4 m-4 bg-transparent text-white font-bold rounded border-2 border-white"
                                onClick={() => removeProduct()}>
                                Neues Produkt erstellen
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


