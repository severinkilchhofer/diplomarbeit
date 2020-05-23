import Nav from "../components/Nav/Nav";
import Marktstandard from "../components/SFF/Marktstandard/Marktstandard";
import Textilrating from "../components/SFF/Textilrating/Textilrating";
import SFRList from "../components/SFF/SFRList/SFRList";
import Ratingzusammenstellung from "../components/SFF/Ratingzusammenstellung/Ratingzusammenstellung";

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

        </div>

        <div className="container pt-64" id={'rating'}></div>
    </div>
)
