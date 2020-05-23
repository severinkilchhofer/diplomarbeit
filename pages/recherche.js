import Nav from "../components/Nav/Nav";
import Energieverbrauch from "../components/Recherche/Energieverbrauch/Energieverbrauch";
import Onlineshops from "../components/Recherche/Onlineshops/Onlineshops";

export default () => (
    <div style={{overflow: 'hidden'}}>
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
        </div>
        <Onlineshops/>


        <div className="container pt-32">
            <div className="row">
                <div className="col-12">
                    <h2>Stellungsnahmen auf meine Anfragen bezüglich der Diplomarbeit.</h2>
                </div>
            </div>
            <div className="row pb-32">
                <div className="lg:col-12">
                    <div className="lg:col-8 bg-lightblue rounded">
                        <div className="p-5">
                            <p className="font-bold text-blue pb-8">Frage an Sebastian Lanz | <span
                                className="font-normal"> Gründer des Kleiderladens
                                RRRevlove</span></p>
                            <p className="pb-4">Was denkst du, sind die heutigen Implementierungsschwierigkeiten, die
                                Kleideronlineshops
                                heutzutage daran hindern, mehr Informationen bezüglich Nachhaltigkeit auf ihrer Webseite
                                zu zeigen?</p>
                            <h5>«Momentan erhalten wir die Kleiderinformationen in sehr unterschiedlichen Formaten,
                                welche wir manuell von Hand in unser System eintragen müssen, damit diese im Onlineshop
                                angezeigt werden.
                                Am liebsten hätte ich als Onlineshop ein einheitliches Format der Kleiderdaten der
                                Hersteller.»</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="lg:col-12">
                    <div className="lg:offset-4 lg:col-8 bg-lightblue rounded">
                        <div className="p-5">
                            <p className="font-bold text-blue pb-8">Frage an Susanne Rudolf | <span
                                className="font-normal">Mitarbeiterin der Geschäftsstelle von Fashion Revolution Schweiz</span>
                            </p>
                            <p className="pb-4">Wie transparent liefern die Marken ihre Herstellungsangaben? </p>
                            <h5>«Die Angabe der Lieferkette wird von den Marken sehr unterschiedlich gehandhabt. Einige
                                zeigen die genauen Herstellungsprozesse auf, andere hingegen geben kaum Daten
                                preis.»</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="container pt-48">

        </div>
    </div>
)
