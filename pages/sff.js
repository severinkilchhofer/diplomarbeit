import Nav from "../components/Nav/Nav";
import Marktstandard from "../components/SFF/Marktstandard/Marktstandard";
import Textilrating from "../components/SFF/Textilrating/Textilrating";
import SFRList from "../components/SFF/SFRList/SFRList";
import Ratingzusammenstellung from "../components/SFF/Ratingzusammenstellung/Ratingzusammenstellung";
import DataTabs from "../components/SFF/DataTabs/DataTabs";
import {ProductData} from "../components/SFF/SFRList/ProductData";
import Ratingkategorie from "../components/SFF/Ratingkategorie/Ratingkategorie";
import FooterNav from "../components/FooterNav/FooterNav";
import {RatingTabsData} from "../components/SFF/RatingTabs/RatingTabsData";
import RatingTabs from "../components/SFF/RatingTabs/RatingTabs";
import React from "react";

export default () => (
    <>
        <Nav currentOpen={'sff'} bgColor={'blue'}/>
        <div className="w-screen h-screen bg-blue">
            <div className="container pt-0 sm:pt-32">
                <div className="row">
                    <div className="lg:offset-2 lg:col-7">
                        <h1 className="text-white font-black">Meine Lösung für mehr Online Transparenz im
                            Textilhandel</h1>
                        <p className="text-white">Im Rahmen dieser Diplomarbeit habe ich eine fiktive Stiftung
                            «Sustainable Fashion Foundation» erfunden. Mit dieser Stiftung zeige ich auf, wie eine neue
                            Regelung im Online Textilhandel funktionieren könnte.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container pt-32 ">
            <div className="row bg-lightblue p-4 lg:px-12 py-12 rounded mb-24">
                <Marktstandard/>
            </div>
            <div className="row bg-lightblue p-4 py-12 rounded mb-24">
                <Textilrating/>
            </div>
        </div>

        <div className="container">
            <SFRList/>
            <div className="row pt-32">
                <div className="lg:offset-2 lg:col-8">
                    <h2>Welche Daten sind nun interessant?</h2>
                    <p className="pb-4">Die Herstellerinformationen kategorisiere ich in vier Kategorien. Die erste
                        Kategorie besteht aus
                        den detaillierten Informationen eines einzelnen Produktes. Die drei weiteren Kategorien beziehen
                        sich auf die Informationen des Herstellers. Die Daten werden zu Menschen und Arbeitsrechte,
                        Ökologie und Nachhaltigkeit, sowie zur Rückverfolgbarkeit und Transparenz erfasst. Aus diesen
                        Kategorien wird zum Schluss das Sustainable Fashion Rating erstellt.</p>
                    <p>Um beispielhafte Daten aufzuzeigen verwende ich mein T-Shirt Basic der Marke The South
                        Mountain.</p>
                </div>
            </div>

            <div className="row pt-32">
                <div className="lg:col-12">
                    <Ratingzusammenstellung/>
                </div>
            </div>

            <div className="row pt-32">
                <div className="lg:col-12">
                    <DataTabs data={ProductData}/>
                </div>

                <div className="pt-32 lg:offset-2 lg:col-8">
                    <h2>Die vier Ratingkategorien</h2>
                    <p className="pb-4">Das Sustainable Fashion Rating bezieht sich auf eine Ratingmethodik, um ein
                        Gesamtrating für ein
                        einzelnes Kleidungsstück zu kalkulieren. Ein Produkt erhält für in den drei unten aufgelisteten
                        Kategorien Punkte für die preisgegebenen Informationen. Diese Punkte werden von der Sustainable
                        Fashion Foundation vergeben.</p>
                    <p className="pb-4">Alle Herstellerrelevanten Kategorien sind mit 33.33% gewichtet. Diese Kategorien
                        decken
                        die Art und Weise ab, wie Bekleidung hergestellt wird. Die Informationen über das
                        Produkt selbst werden nicht in das Rating mit einbezogen. Die Produktinformationen habe ich als
                        Kategorie aufgenommen, um das Gesamtrating einem
                        konkreten Produkt zuzuweisen. Dies wird für die eindeutige Zuweisung eines Produktes
                        benötigt.</p>
                    <p>In der folgenden Übersicht werden die jeweiligen Kategorieeigenschaften für die Vergabe der
                        Punkte durch die Sustainable Fashion Foundation beschrieben.</p>
                </div>
            </div>
            <div className="row pt-32">
                <div className="lg:col-6">
                    <Ratingkategorie title={'Produkt'}
                                     description={'Hier wird die Vollständigkeit der hinterlegten Produktinformationen geprüft. Zusätzlich werden\n' +
                                     '                Zertifikate und die Genauigkeit der Materialdefinitionen und dessen Herstellung untersucht.'}
                                     imageName={'product.svg'}
                                     imageAlt={'Illustration eines Kleidungsstückes auf einem Smartphone'}
                                     gewichtung={''}
                    />
                </div>
                <div className="lg:col-6 pt-4 sm:pt-0">
                    <Ratingkategorie title={'Menschen und Arbeitsrechte'}
                                     description={'In dieser Kategorie wird der Soziale Aspekt der Marke untersucht. Dies geschieht für die eigenen Mitarbeiter als auch für die Arbeitnehmer in der Lieferkette. Punkte werden ausserdem für Arbeits- und Lohnbedinungen vergeben, sowie für die Massnahmen zum Schutz vor Arbeitsrisiken der Arbeitnehmer.'}
                                     imageName={'menschen_arbeitsrechte.svg'}
                                     imageAlt={'Illustration von zwei Menschen in einem Park'}
                                     gewichtung={'Gewichtung: 33%'}
                    />
                </div>

            </div>
            <div className="row pt-4">
                <div className="lg:col-6">
                    <Ratingkategorie title={'Ökologie und Nachhaltigkeit'}
                                     description={'Um eine langfristige Nachhaltigkeit zu garantieren, wird die Produktionskette der Marke untersucht. Punkte werden unteranderem aufgrund der Verwendung nachhaltiger Materialien, einer emissionsarmen Produktion und dem Gebrauch von nachhaltigen Ressourcen vergeben.'}
                                     imageName={'oekologie_nachhaltigkeit.svg'}
                                     imageAlt={'Illustration eines Herzes mit Pflanzen'}
                                     gewichtung={'Gewichtung: 33%'}
                    />
                </div>
                <div className="lg:col-6 pt-4 sm:pt-0">
                    <Ratingkategorie title={'Rückverfolgbarkeit und Transparenz'}
                                     description={'Die Transparenz einer Marke wird mit den Daten der Lieferanten geprüft. Auf der einen Seite werden die Informationen der Herstellungsbetriebe, auf der anderen werden die der Verarbeitungsfirmen angeschaut. Zusätzlich werden Details, wie die Adresse des Lieferanten, die Anzahl der Beschäftigten sowie Aufschlüsselung nach Geschlecht geprüft.'}
                                     imageName={'rueckverfolgbarkeit_transparenz.svg'}
                                     imageAlt={'Illustration einer Fabrik mit Lastwagen'}
                                     gewichtung={'Gewichtung: 33%'}
                    />
                </div>
            </div>

            <div className="row">
                <div className="pt-32 lg:offset-2 lg:col-8">
                    <h2>Berechnung</h2>
                    <p className="pb-4">Die Markenrelevanten Kategorien enthalten ein Subrating, welches sich aus dem
                        Mittelwert der
                        jeweiligen Kategoriewerte ergibt. Die drei Subratings werden anschliessend mit der Gewichtung
                        multipliziert und zum Schluss addiert. Das darausfolgende Resultat führt zum Gesamtrating des
                        jeweilgen Produktes.</p>
                    <p className="pb-4">Nach der Berechnung wird das Gesamtrating gerundet und als Ganzzahl in einem
                        Ratingbatch
                        gekennzeichnet. Dieser dient zur raschen Orientierung für den Endkunden im Onlineshop und zeigt
                        auf, wie gut eine Textilmarke abgeschnitten hat.</p>

                </div>
            </div>

            <div className="row">
                <div className="lg:col-12 bg-lightblue text-center pt-10 pb-6">
                    <h5 className="font-normal">(&#8531; &#215; Subrating Menschen und Arbeitsrechte)
                        + (&#8531; &#215; Subrating Ökologie und Nachhaltigkeit) + (&#8531; &#215;
                        Subrating Rückverfolgbarkeit und Transparenz) = Gesamtrating</h5>
                </div>
            </div>


            <div className="row pt-32">
                <div className="lg:offset-2 lg:col-8">
                    <h2>Ratingzahlen</h2>
                    <img src="batches.svg" alt="Batches aller Kategorieratings"/>
                    <p className="pt-4">Ratingbatches gemäss dem Sustainable Fashion Rating</p>
                </div>
                <div className="lg:col-12 pt-24">
                    <RatingTabs data={RatingTabsData}/>
                </div>
            </div>


            <div className="row">
                <div className="pt-32 pb-4 lg:offset-2 lg:col-8">
                    <h2>Datenaustausch</h2>
                    <p className="pb-4">In der Textilindustrie gibt es bereits heute eine eindeutige Produktzuweisung
                        mit
                        einem Barcode. Dieser nennt sich UPC Code und steht für Universal Product Code. Diesen Code
                        möchte
                        ich nutzen, um die Kommunikation zwischen den verschiedenen Parteien zu ermöglichen. Der Vorteil
                        besteht darin, dass diesen die Hersteller sowie die Onlineshops bereits kennen.</p>
                    <p className="pb-4">Mittels einer API (Programmierschnittstelle) werden die Produktinformationen
                        zugänglich. Diese sind sind für den Hersteller und den Shop zugänglich. Auf der folgenden
                        Übersicht
                        wird die Funktionalität visuell dargestellt.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <img src="datenaustausch.svg" alt="Batches aller Kategorieratings"/>
                </div>
            </div>


        </div>

        <FooterNav navTextBack='Recherche und Erkenntnisse' navLinkBack='recherche'
                   navTextForward='Eigenes Rating erstellen' navLinkForward='rating'/>
    </>
)
