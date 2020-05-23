import Nav from "../components/Nav/Nav";
import Marktstandard from "../components/SFF/Marktstandard/Marktstandard";
import Textilrating from "../components/SFF/Textilrating/Textilrating";
import SFRList from "../components/SFF/SFRList/SFRList";
import Ratingzusammenstellung from "../components/SFF/Ratingzusammenstellung/Ratingzusammenstellung";
import Tabs from "../components/Tabs/Tabs";

export default () => (
    <div>
        <Nav currentOpen={'sff'} bgColor={'blue'}/>
        <div className="w-screen h-screen bg-blue">
            <div className="container pt-32">
                <div className="row">
                    <div className="lg:offset-2 lg:col-7">
                        <h1 className="text-white font-black">Meine Lösung für mehr Online Transparenz im
                            Textilhandel</h1>
                        <p className="text-white">Im Rahmen dieser Diplomarbeit habe ich eine fiktive Stiftung
                            Sustainable Fashion Foundatino erfunden. Diese dient dazu, mein Konzept zu erleutern und
                            beispielhaft aufzuzeigen, wie ein mein System funktioniert. </p>
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
                <div className="lg:offset-2 lg:col-8">
                    <Ratingzusammenstellung/>
                </div>
            </div>

            <div className="row pt-32">
                <div className="lg:col-12">
                    <Tabs titleList={[
                        {
                            id: 1,
                            tabTitle: "Produkte",
                            tabContent: {
                                rows: [
                                    {id: 1, info: 'UPC Nummer', bspData: 'UPC 886736874135'},
                                    {id: 2, info: 'Name des Produktes', bspData: 'T-Shirt Mountain One'},
                                    {
                                        id: 3,
                                        info: 'Beschreibung des Produktes',
                                        bspData: 'Das Männer T-Shirt in Kontrastfarbe und Rundhals ist aus regenerierten Fischernetzen und Nylon-Resten, sogenanntes ECONYL®-Garn hergestellt. Die T-Shirts von The South Mountain werden in der Schweiz unter fairen Arbeitsbedingungen und einem minimalen Transportweg produziert.'
                                    },
                                    {id: 4, info: 'Farbe des Produktes', bspData: 'Rot'},
                                    {id: 5, info: 'Gewicht', bspData: '121 Gramm'},
                                    {id: 6, info: 'Waschinformationen', bspData: '30 Grad'},
                                    {id: 7, info: 'Herstellungsland', bspData: 'Schweiz'},
                                    {id: 8, info: 'Materialdeklaration', bspData: '100% ECONYL®'},
                                    {id: 9, info: 'Material aus', bspData: 'Italien'},
                                    {id: 10, info: 'Zertifikate', bspData: 'GOTS'}
                                ]
                            }
                        },
                        {
                            id: 2,
                            tabTitle: "Menschen und Arbeitsrechte",
                            tabContent: {
                                rows: [
                                    {id: 1, info: 'Kinderarbeit', bspData: '0.4'},
                                    {id: 2, info: 'Arbeitskette', bspData: '0.5'},
                                    {id: 3, info: 'Rohstoffe', bspData: '0.8'},
                                ]
                            }
                        },
                        {
                            id: 3,
                            tabTitle: "Ökologie und Nachhaltigkeit",
                            tabContent: {
                                rows: [{id: 0, info: 'Tshirt', bspData: '0.6'}, {
                                    id: 2,
                                    info: 'rooot',
                                    bspData: '0.34'
                                }]
                            }
                        },
                        {
                            id: 4,
                            tabTitle: "Rückerverfolgbarkeit und Transparenz",
                            tabContent: {
                                rows: [{id: 0, info: 'Tshirt', bspData: '0.6'}, {
                                    id: 2,
                                    info: 'rooot',
                                    bspData: '0.34'
                                }]
                            }
                        }
                    ]}/>
                </div>
            </div>
        </div>

        <div className="container pt-64" id={'rating'}></div>
    </div>
)
