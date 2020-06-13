import ShopItem from '../components/ShopItem/ShopItem'
import Nav from '../components/Nav/Nav'
import Slider from "../components/Slider/Slider";
import FooterNav from "../components/FooterNav/FooterNav";
import Shirt from "../components/Shirt/Shirt";
import React from "react";
import ReadNextArrow from "../components/ReadNextArrow/ReadNextArrow";

export default function IndexPage() {
    return (
        <>
            <Nav currentOpen={'intro'} bgColor={'blue'}/>
            <div className="w-screen h-screen bg-blue">
                <div className="container pt-8 sm:pt-24">
                    <div className="row pb-4 sm:pb-32">
                        <div className="col text-white">
                            <h1 className="text-center font-black">Sustainable Fashion Rating</h1>
                            <p className="text-center">Diplomarbeit von Severin Kilchhofer</p>
                        </div>
                    </div>

                    <div className="row pb-64">
                        <ShopItem brand={'The South Mountain'}
                                  name={'T-Shirt Mountain One'}
                                  description={'Das Männer T-Shirt in Kontrastfarbe und Rundhals ist aus regenerierten Fischernetzen und Nylon-Resten, sogenanntes ECONYL®-Garn hergestellt. Die T-Shirts von The South Mountain werden in der Schweiz unter fairen Arbeitsbedingungen und einem minimalen Transportweg produziert.'}
                                  price={65}
                                  rating={8}
                                  kleidungsstueck={<Shirt fill={'#D1495B'} pattern={'#CCE6F6'}/>}
                                  subratings={[8.3, 8.2, 8.4, 8.3]}/>
                    </div>
                </div>
                <ReadNextArrow id="#slider"/>
            </div>

            <div className="p-10 sm:p-16" id="slider"/>

                <Slider>
                    <div className="p-6 sm:p-32 lg:p-48 bg-lightblue">
                        <div className="container">
                            <h1 className="text-blue">Der weltweite Textilverbrauch hat sich von 2005 bis 2019 von 74
                                auf
                                130 Milliarden Kleidungsstücken mehr als verdoppelt.</h1>
                            <p>(Euromonitor, 2020)</p>
                        </div>
                    </div>
                    <div className="p-6 sm:p-32 lg:p-48 bg-lightblue">
                        <div className="container">
                            <h1 className="text-blue">Bei einer durchschnittlichen Wäsche können bis zu 700.000
                                Mikrofasern
                                aus unserer Kleidung ins Abwasser gelangen.</h1>
                            <p>(Napper und Thompson, 2016)</p>
                        </div>
                    </div>
                    <div className="p-6 sm:p-32 lg:p-48 bg-lightblue">
                        <div className="container">
                            <h1 className="text-blue">Nicht jeder hat die Zeit, um zu entziffern, unter welchen
                                Herstellungsbedingungen ein
                                Kleidungsstück produziert wurde.</h1>
                            <p>(Fashion Transparency Index Report, 2020)</p>
                        </div>
                    </div>
                </Slider>
            <div className="p-4 sm:p-16"/>
            <div className="container pt-20">
                <div className="row">
                    <div className="lg:offset-1 lg:col-8">
                        <h2>Wieso braucht es mehr Transparenz im Kleiderhandel?</h2>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/KfANs2y_frk"
                                frameBorder="0"
                                allowFullScreen>
                        </iframe>
                        <p className="pt-3 text-darkgray">Im Video der Organisation Fashion Revolution wird die
                            Notwendigkeit auf
                            Transparenz in der
                            Textilbranche mit einem Experiment klar und deutlich aufgezeigt.</p>
                    </div>
                </div>


                <div className="row pt-48 pb-32">
                    <div className="lg:offset-4 lg:col-8 bg-lightblue rounded">
                        <div className="p-4 sm:p-16">
                            <h5>Was bedeutet Transparenz im Kleiderhandel?</h5>
                            <p>Es ist die öffentliche Offenlegung von glaubwürdigen, umfassenden und vergleichbaren
                                Daten
                                und Informationen über die Lieferketten der Modebranche, Geschäftspraktiken und die
                                Auswirkungen dieser Praktiken auf Arbeitnehmer, Gemeinden und die Umwelt (Fashion
                                Transparency Index Report, 2020).</p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterNav navTextForward='Recherche und Erkenntnisse' navLinkForward='recherche'/>
        </>
    )
}
