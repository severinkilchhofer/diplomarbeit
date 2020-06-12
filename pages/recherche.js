import Nav from "../components/Nav/Nav";
import Energieverbrauch from "../components/Recherche/Energieverbrauch/Energieverbrauch";
import Onlineshops from "../components/Recherche/Onlineshops/Onlineshops";
import FooterNav from "../components/FooterNav/FooterNav";
import useWindowSize from '@rehooks/window-size';
import OnlineshopsMobile from "../components/Recherche/Onlineshops/OnlineshopsMobile";



export default () => {

    const windowSize = () => {
        if (typeof window !== 'undefined') {
            const width = useWindowSize();
            return width.innerWidth;
        }
    }


    return(
    <div style={{overflow: 'hidden'}}>
        <Nav currentOpen={'recherche'} bgColor={'blue'}/>
        <div className="w-screen h-screen bg-blue">
            <div className="container pt-0 sm:pt-32">
                <div className="row">
                    <div className="lg:offset-2 lg:col-9">
                        <h1 className="text-white font-black">Recherche und Erkenntnisse</h1>
                        <h3 className="text-white">Problemstellung</h3>
                        <p className="text-white">Heutzutage werden unzählige Textilprodukte online bestellt. Der Bedarf
                            auf
                            nachhaltige Kleidung und eine transparente Kommunikation der Onlinehändler ist so hoch wie
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
        <div className="container pt-32 pb-16 sm:pb-64">
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

        {console.log(windowSize())}
        {windowSize() > 480 ? <Onlineshops/> : <OnlineshopsMobile/>}
        {/*<Onlineshops/>*/}



        <div className="container pt-16 sm:pt-32">
            <div className="row">
                <div className="col-12">
                    <h2>Stellungsnahmen auf meine Anfragen bezüglich der Diplomarbeit.</h2>
                </div>
            </div>
            <div className="row pb-32">
                <div className="lg:col-12">
                    <div className="lg:col-8 bg-lightblue rounded">
                        <div className="p-4 sm:p-16">
                            <p className="font-bold text-blue pb-8">Frage an Sebastian Lanz | <span
                                className="font-normal"> Gründer des Kleiderladens
                                RRRevlove</span></p>
                            <h5 className="pb-8">Was denkst du, sind die heutigen Schwierigkeiten, die
                                Kleideronlineshops
                                heutzutage daran hindern, mehr Informationen bezüglich Nachhaltigkeit auf ihrer Webseite
                                zu zeigen?</h5>
                            <p>«Momentan erhalten wir die Kleiderinformationen in sehr unterschiedlichen Formaten,
                                welche wir manuell von Hand in unser System eintragen müssen, damit diese im Onlineshop
                                angezeigt werden.
                                Am liebsten hätte ich als Onlineshop ein einheitliches Format der Kleiderdaten der
                                Hersteller.»</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pb-32">
                <div className="lg:col-12">
                    <div className="lg:offset-4 lg:col-8 bg-lightblue rounded">
                        <div className="p-4 sm:p-16">
                            <p className="font-bold text-blue pb-8">Frage an Susanne Rudolf | <span
                                className="font-normal">Mitarbeiterin der Geschäftsstelle von Fashion Revolution Schweiz</span>
                            </p>
                            <h5 className="pb-8">Wie transparent liefern die Marken ihre Herstellungsangaben? </h5>
                            <p>«Die Angabe der Lieferkette wird von den Marken sehr unterschiedlich gehandhabt. Einige
                                zeigen die genauen Herstellungsprozesse auf, andere hingegen geben kaum Daten
                                preis.»</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <FooterNav navTextBack='Intro' navLinkBack='index'
                   navTextForward='Sustainable Fashion Foundation' navLinkForward='sff'/>
    </div>
)}
