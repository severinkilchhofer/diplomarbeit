import Nav from "../components/Nav/Nav";
import React, {useState} from 'react'
import FooterNav from "../components/FooterNav/FooterNav";
import Flow from "../components/Rating/Flow/Flow";


function Rating() {
    const [clicked, setClicked] = useState(false);

    function getProduct() {
        if (typeof window !== 'undefined') {
            return !!localStorage.getItem('ratingData');
        }
    }

    function removeProduct() {
        localStorage.removeItem('ratingData');
        localStorage.removeItem('selectedClothing');
        localStorage.removeItem('flowData');
        setClicked(true);
    }

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
                                    <img className="h-40 sm:h-full" src="eigenes_rating.svg" alt=""/>
                                </div>
                            </div>
                            <div className="row pt-8 sm:pt-24">
                                <div className="lg:col-6 text-center sm:text-left">
                                    {getProduct() ?
                                        <div>
                                            <button
                                                className="p-6 bg-white text-blue border-2 border-white font-bold rounded w-full sm:w-auto"
                                                onClick={() => removeProduct()}>Neues Rating erfassen
                                            </button>
                                            <button
                                                className="p-6 mt-4 sm:mt-0 sm:ml-4 bg-transparent border-2 border-white text-white font-bold rounded w-full sm:w-auto"
                                                onClick={() => setClicked(true)}>Eigenes Rating bearbeiten
                                            </button>
                                        </div>
                                        :
                                        <button className="p-6 bg-white text-blue font-bold rounded"
                                                onClick={() => removeProduct()}>Eigenes Rating erfassen
                                        </button>
                                    }
                                </div>
                            </div>

                        </div>
                        <div className="pt-20">
                            <FooterNav navTextBack='Sustainable Fashion Foundation' navLinkBack='sff'
                                       navTextForward='Zusammenfassung' navLinkForward='fazit'/>
                        </div>
                    </div>
                </div>

                :

                <div className="bg-blue">
                    <Flow/>
                </div>
            }
        </>
    )
}


export default Rating;
