import React from "react";
import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';

const Onlineshops = () => {
    return (
        <div>
            <div className="section"/>
            <Controller>
                <Scene triggerHook="onLeave" duration={1000} pin>
                    {(progress) => (
                        <div className="sticky">
                            <Timeline totalProgress={progress} paused>
                                <Tween from={{x: '100%', top: '10%'}} to={{x: '5%', top: '10%'}}>
                                    <div className="heading">
                                        <h2>Erst einzelne Onlineshops machen auf das Thema aufmerksam.</h2>
                                    </div>
                                </Tween>

                                <Tween from={{x: '100%', top: '30%'}} to={{x: '-50%', top: '30%'}}>
                                    <div className="animation">
                                        <div className="flex flex-row" style={{width: '2500px'}}>
                                            <div className="m-4">
                                                <img className="w-full h-auto shadow-lg" src="zalando.png" alt=""/>
                                                <p className="text-sm p-4">-> Präsentiert vermehrt nachhaltige Kleidung</p>
                                            </div>
                                            <div className=" m-4">
                                                <img className="w-full h-auto shadow-lg" src="neumuhle.png" alt=""/>
                                                <p className="text-sm p-4">-> Sehr transparente Produktbeschreibung im Onlineshop</p>
                                            </div>
                                            <div className=" m-4">
                                                <img className="w-full h-auto shadow-lg" src="rrrevolve.png" alt=""/>
                                                <p className="text-sm p-4">-> Zeigt fairness und transparenz im Onlineshop auf</p>
                                            </div>
                                            <div className=" m-4">
                                                <img className="w-full h-auto shadow-lg" src="circle.png" alt=""/>
                                                <p className="text-sm p-4">-> Klare Angaben der Lieferkette</p>
                                            </div>
                                        </div>
                                    </div>
                                </Tween>
                            </Timeline>
                        </div>
                    )}
                </Scene>
            </Controller>
            <div className="section"/>
        </div>
    );
}

export default Onlineshops;
