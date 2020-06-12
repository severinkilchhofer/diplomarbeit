import React from "react";

const OnlineshopsMobile = () => {

    return (
        <div>
            <div className="flex flex-row overflow-scroll">
                <div className="m-4" style={{flex: '0 0 75vw'}}>
                    <img className="w-full h-auto shadow-lg" src="zalando.png" alt=""/>
                    <p className="text-sm sm:text-base p-4">-> Präsentiert vermehrt
                        nachhaltige Kleidung</p>
                </div>
                <div className="m-4" style={{flex: '0 0 75vw'}}>
                    <img className="w-full h-auto shadow-lg" src="neumuhle.png" alt=""/>
                    <p className="text-sm sm:text-base p-4">-> Sehr transparente
                        Produktbeschreibung im Onlineshop</p>
                </div>
                <div className="m-4" style={{flex: '0 0 75vw'}}>
                    <img className="w-full h-auto shadow-lg" src="rrrevolve.png" alt=""/>
                    <p className="text-sm sm:text-base p-4">-> Zeigt Fairness und
                        Transparenz im Onlineshop auf</p>
                </div>
                <div className="m-4" style={{flex: '0 0 75vw'}}>
                    <img className="w-full h-auto shadow-lg" src="circle.png" alt=""/>
                    <p className="text-sm sm:text-base p-4">-> Klare Angaben der
                        Lieferkette</p>
                </div>
            </div>
        </div>
    );
}

export default OnlineshopsMobile;
