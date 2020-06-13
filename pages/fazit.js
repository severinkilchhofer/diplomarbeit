import Nav from "../components/Nav/Nav";
import React from 'react'
import FooterNav from "../components/FooterNav/FooterNav";
import MehrwertTabs from "../components/Fazit/MehrwertTabs/MehrwertTabs";
import {MehrwertData} from "../components/Fazit/MehrwertTabs/MehrwertData";
import ReadNextArrow from "../components/ReadNextArrow/ReadNextArrow";

export default () => (
    <>
        <Nav currentOpen={'fazit'} bgColor={'blue'}/>
        <div className="w-screen h-screen bg-blue">
            <div className="container pt-4 sm:pt-56">
                <div className="row">
                    <div className="lg:offset-2 lg:col-7">
                        <h1 className="text-white font-black">Zusammenfassung und Ausblick</h1>
                        <p className="text-white pb-16">Zusammenfassend fand ich die Recherche und die Entwicklung einer
                            Lösung in diesem Bereich äusserst spannend. Rückblickend hat mir meine Diplomarbeit die
                            Grösse und die Schwierigkeiten des Textilhandels klar und deutlich aufgezeigt. Mir wurde
                            bewusst, welches Potential in der Textilindustrie steckt. Ich glaube jedoch, dass ich mit
                            meinem Konzept dem Betrachter ein spannendes und zeitgemässes Thema vermitteln konnte.</p>
                    </div>
                </div>
            </div>
            <ReadNextArrow id="#mehwert"/>
        </div>

        <div className="container" id="mehwert">
            <div className="row">
                <div className="pt-32 pb-4 lg:offset-2 lg:col-8">
                    <h2>Welchen Mehrwert bietet die Sustainable Fashion Foundation?</h2>
                </div>
                <div className="lg:col-12">
                    <MehrwertTabs data={MehrwertData}/>
                </div>
            </div>

            <div className="row">
                <div className="pt-16 sm:pt-32 sm:pb-4 lg:offset-2 lg:col-8">
                    <h2>Ausblick</h2>
                </div>
                <div className="lg:col-8 lg:offset-2">
                    <p>Basierend auf meiner Diplomarbeit wären verschiedene Ausbaustufen möglich. Zum einen hätte ich
                        gerne eine Datenbank mit richtigen Kleiderdaten einiger Herstellern, zum anderen, wäre eine
                        erste Implementation einer API (Programmierschnittstelle) zur Bereitstellung der Daten sehr
                        spannend. Um meine Berechnung und das Rating zu verbessern, wäre eine Zusammenarbeit mit anderen
                        Stiftungen von grosser Bedeutung. Desweiteren wäre ein Austausch mit Vertretern der
                        Textilbranche, um das Konzept auf eine Machbarkeit zu prüfen unabdingbar. Das Sahnehäubchen wäre
                        ein aufschlussreiches Interview mit einem Onlineshop wie beispielsweise Zalando, um eine
                        allfällige Integration des Ratings auf ihrer Plattform zu besprechen.</p>
                </div>
            </div>


            <div className="row">
                <div className="pt-16 sm:pt-32 sm:pb-4 lg:offset-2 lg:col-8">
                    <h2>Herzlichen Dank</h2>
                </div>
                <div className="pb-4 lg:col-4 lg:offset-2">
                    <p>Ich möchte allen danken, die mich während meiner Abschlussarbeit unterstützt haben.</p>
                </div>
                <div className="lg:col-6">
                    <p className="pb-4 font-bold">Michael Scherrer-Kast, Mentor</p>
                    <p className="pb-4 font-bold">Boris Périsset, Dozent </p>
                    <p className="pb-4 font-bold">Sebastian Lanz, RRRevolve</p>
                    <p className="pb-4 font-bold">Susanne Rudolf, Fashion Revolution Schweiz</p>
                    <p className="pb-4 font-bold">Sabrina Walder</p>
                </div>
            </div>

            <div className="row">
                <div className="pt-16 sm:pt-32 sm:pb-4 lg:offset-2 lg:col-8">
                    <h2>Inspirationen</h2>
                </div>
                <div className="lg:col-8 lg:offset-2">
                    <p className="pb-4">
                        <a href="https://www.fashionrevolution.org/">Fashion Revolution</a>
                    </p>
                    <p className="pb-4">
                        <a href="https://rrrevolve.ch/">RRRevolve</a>
                    </p>
                    <p className="pb-4">
                        <a href="https://circleshop.ch/">The Sustaianble Shop Circle</a>
                    </p>
                    <p className="pb-4">
                        <a href="https://neumuhle.ch/">Neumühle</a>
                    </p>
                    <p className="pb-4">
                        <a href="https://zalando.ch/">Zalando</a>
                    </p>
                </div>
            </div>

            <div className="row pb-32">
                <div className="pt-16 sm:pb-4 lg:offset-2 lg:col-8">
                    <h2>Quellen- und Abbildungsverzeichnis</h2>
                </div>
                <div className="lg:offset-2 lg:col-8">
                    <h3>Quellen</h3>
                </div>
                <div className="lg:col-8 lg:offset-2">
                    <p className="pb-4">
                        <a href="https://www.fashionrevolution.org/about/transparency">Fashion Transparency Index Report
                            (Abrufdatum: 04.04.2020)</a></p>
                    <p className="pb-4">
                        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0025326X16307639">Napper IE,
                            Thompson RC. Release
                            of
                            synthetic microplastic plastic fibres from domestic washing machines: Effects of fabric type
                            and
                            washing conditions. Marine Pollution Bulletin (15 Nov 2016); 112:39–45. (Abrufdatum:
                            12.04.2020)</a></p>
                    <p className="pb-4"><a href="https://www.fashionrevolution.org/about/transparency">Euromonitor
                        International, Apparel
                        and Footwear Industry, 2020 Edition. (Abrufdatum: 12.04.2020)</a></p>
                    <p className="pb-4"><a href="https://www.youtube.com/watch?v=KfANs2y_frk&feature=emb_title">The 2
                        Euro T-Shirt - A
                        Social Experiment (Abrufdatum: 16.04.2020)</a></p>
                    <p className="pb-4"><a href="https://de.wikipedia.org/wiki/Energieverbrauchskennzeichnung">Energieverbrauchskennzeichnung
                        Wikipedia (Abrufdatum: 16.04.2020)</a></p>
                </div>

                <div className="pt-8 lg:offset-2 lg:col-8">
                    <h3>Abbildungen</h3>
                </div>
                <div className="lg:col-8 lg:offset-2">
                    <p className="pb-4">
                        <a href="https://www.flaticon.com/packs/clothes-109">Kleidericons made by Pixel perfect</a>
                    </p>
                    <p className="pb-4">
                        <a href="https://www.thenounproject.com">UI Icons</a>
                    </p>
                    <p className="pb-4">
                        <a href="https://de.wikipedia.org/wiki/Energieverbrauchskennzeichnung">Energieverbrauchskennzeichnung</a>
                    </p>
                </div>
            </div>
        </div>
        <FooterNav navTextBack='Eigenes Rating erstellen' navLinkBack='rating' navTextForward='Startseite' navLinkForward='index'/>
    </>
)
