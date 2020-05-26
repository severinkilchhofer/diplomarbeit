import Nav from "../components/Nav/Nav";
import React from 'react'
import CreateRating from "../components/Rating/CreateRating/CreateRating";

export default () => (
    <>
        <Nav currentOpen={'rating'} bgColor={'blue'}/>
        <div className="w-screen h-screen bg-blue">
            <div className="container pt-32">
                <div className="row flex">
                    <div className="lg:col-6">
                        <h1 className="text-white font-black">Eigenes Rating erstellen</h1>
                        <p className="text-white pb-16">Um zu erleben, wie ein Hersteller sein Rating erlangen kann,
                            habe ich
                            einen vereinfachten Workflow erstellt, den es erlaubt sein eigenes Rating zu berechnen.</p>
                    </div>
                    <div className="lg:col-6 flex justify-center items-center">
                        <img className="h-full" src="eigenes_rating.svg" alt=""/>
                    </div>
                </div>
                <div className="row pt-24">
                    <div className="lg:col-6">
                        <button className="p-6 bg-white text-blue font-bold rounded">Eigenes Product erfassen</button>
                    </div>
                </div>
            </div>
        </div>
        <CreateRating/>
    </>
)