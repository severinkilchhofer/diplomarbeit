import Nav from "../components/Nav/Nav";
import React, {useEffect, useState} from 'react'
import MultiStepForm from "../components/Rating/MultiStepForm/MultiStepForm";
import FooterNav from "../components/FooterNav/FooterNav";


function Rating() {
    const [clicked, setClicked] = useState(false);

    return (<>
            {!clicked ?
                <div>
                    <Nav currentOpen={'rating'} bgColor={'blue'}/>
                    <div className="w-screen h-screen bg-blue">
                        <div className="container sm:pt-32">
                            <div className="row flex">
                                <div className="lg:col-6">
                                    <h1 className="text-white font-black">Eigenes Rating erstellen</h1>
                                    <p className="text-white pb-16">Um zu erleben, wie ein Hersteller sein Rating
                                        erlangen
                                        kann,
                                        habe ich
                                        einen vereinfachten Workflow erstellt, den es erlaubt sein eigenes Rating zu
                                        berechnen.</p>
                                </div>
                                <div className="lg:col-6 flex justify-center items-center">
                                    <img className="h-full" src="eigenes_rating.svg" alt=""/>
                                </div>
                            </div>
                            <div className="row pt-24">
                                <div className="lg:col-6 text-center sm:text-left">
                                    <button className="p-6 bg-white text-blue font-bold rounded"
                                            onClick={() => setClicked(true)}>Eigenes Produkt erfassen
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <FooterNav navTextBack='Zusammenfassung' navLinkBack='fazit'/>
                </div>

                :

                <div>
                    <Nav currentOpen={'rating'} bgColor={'blue'}/>
                    <MultiStepForm/>
                </div>
            }
        </>
    )
}


export default Rating;
