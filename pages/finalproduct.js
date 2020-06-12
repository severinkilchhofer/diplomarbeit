import Nav from "../components/Nav/Nav";
import React, {useState} from 'react'
import GeneratedProduct from "../components/Rating/GeneratedProduct/GeneratedProduct";
import Link from "next/link";
import FooterNav from "../components/FooterNav/FooterNav";

function FinalProduct() {

    return (
        <>
            <Nav currentOpen={'rating'} bgColor={'blue'}/>

            <div className="w-screen h-screen bg-blue">
                <div className="container">
                    <div className="row pb-8 pt-16">
                        <div className="lg:col-8 text-white sm:pl-6">
                            <h1 className="font-black">Herzliche Gratulation zu deinem Rating!</h1>
                            <p className="pt-4">Hier siehst du dein erstelltes Produkt inklusive dem berechneten Rating.
                                Auf dem Ratingbatch findest du die Inforamtionen wie dein Rating berechnet wurde.</p>
                        </div>
                    </div>
                    <GeneratedProduct/>
                </div>
                <FooterNav navTextBack='Rating bearbeiten' navLinkBack='rating'
                           navTextForward='Startseite' navLinkForward='index'/>

            </div>

        </>
    )
}

export default FinalProduct;


