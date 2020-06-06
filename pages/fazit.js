import Nav from "../components/Nav/Nav";
import React from 'react'
import FooterNav from "../components/FooterNav/FooterNav";
import MehrwertTabs from "../components/Fazit/MehrwertTabs/MehrwertTabs";
import {MehrwertData} from "../components/Fazit/MehrwertTabs/MehrwertData";

export default () => (
    <>
        <Nav currentOpen={'fazit'} bgColor={'blue'}/>
        <div className="w-screen h-screen bg-blue">
            <div className="container sm:pt-32">
                <div className="row flex">
                    <div className="lg:col-6">
                        <h1 className="text-white font-black">Zusammenfassung und Fazit</h1>
                        <p className="text-white pb-16">Du bist nun fast am Ende meiner Diplomarbeit angelangt. Es wird also Zeit für eine kurze Zusammenfassung.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="pt-32 pb-4 lg:offset-2 lg:col-8">
                    <h2>Welchen Mehrwert bietet die Sustainable Fashion Foundation?</h2>
                </div>
                <div className="lg:col-12">
                    <MehrwertTabs data={MehrwertData}/>
                </div>
            </div>

            <div className="row">
                <div className="pt-32 pb-4 lg:offset-2 lg:col-8">
                    <h2>Zusammenfassung</h2>
                </div>
                <div className="lg:col-8 lg:offset-2">
                    <p>Bald isches fertig...</p>
                </div>
            </div>
        </div>
        <FooterNav navTextBack='Eigenes Rating erstellen' navLinkBack='rating'/>
    </>
)
