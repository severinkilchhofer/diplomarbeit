import Nav from "../components/Nav/Nav";
import Energieverbrauch from "../components/Recherche/Energieverbrauch/Energieverbrauch";

export default () => (
    <div>
        <Nav currentOpen={'recherche'} bgColor={'blue'}/>
        <div className="w-screen h-screen bg-blue">
            <div className="container pt-32">
                <div className="row">
                    <div className="lg:offset-2 lg:col-9">
                        <h1 className="text-white font-black">Recherche und Erkenntnisse</h1>
                        <h3 className="text-white">Problemstellung</h3>
                        <p className="text-white">Heutzutage werden unzählige Textilprodukte online bestellt. Der Bedarf
                            auf
                            Nachhaltige Kleidung und eine transparente Kommunikation der Onlinehändler ist so hoch wie
                            noch
                            nie. Gleichzeitig informieren sich Leute gerne vermehrt über den Herstellungsort und die
                            Materialien der Kleider. In Ladengeschäften ist das Entehmen dieser Produktinformationen auf
                            Etiketten möglich. Im Gegensatz dazu, sind diese Informationen online nur sehr schwer
                            auffindbar. Zusätzlich gibt es davon weder eine standardisierte Datenverwaltung, noch eine
                            einheitliche Anzeige im Onlineshop. Transparenz im Onlinehandel ist nötig!</p>
                    </div>

                </div>
            </div>
        </div>
        <div className="container pt-32">
            <div className="row">
                <div className="col-12">
                    <h2>In anderen Branchen ist Transparenz bereits selbstverständlich.</h2>
                </div>
            </div>
            <div className="row">
                <div className="lg:col-12">
                    <Energieverbrauch/>
                </div>
            </div>
            <div className="row pt-32">
                <div className="col-6">
                    <h2>Erst einzelne Onlineshops machen auf das Thema aufmerksam.</h2>
                </div>
            </div>
        </div>


        <div className="container pt-48">

        </div>
    </div>
)
