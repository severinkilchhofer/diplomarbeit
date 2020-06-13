import React from "react";

const SFRList = () => {
    return (
        <div>
            <h2 className="text-blue font-black">Sustainable Fashion Rating</h2>
            <p className="pb-12">So funktioniert meine Lösung des Sustainable Fashion Ratings konkret. <br/>Für alle
                nachfolgenden Teilschritte stellt die Sustainable Fashion Foundation eine Plattform bereit.</p>
            <div className="row pb-4 sm:pb-8">
                <div className="lg:col-6 lg:offset-1">
                    <h5 className="font-bold">1. Kleidermarken registrieren sich bei Sustainable Fashion Foundation und
                        senden ihre Textildaten ein.</h5>
                </div>
            </div>
            <div className="row pb-4 sm:pb-8">
                <div className="lg:offset-6 lg:col-6">
                    <h5 className="font-bold">2. Die Sustainable Fashion Foundation überprüft die Textildaten auf
                        Vollständigkeit und
                        Richtigkeit.</h5>
                </div>
            </div>
            <div className="row pb-4 sm:pb-8">
                <div className="lg:col-6 lg:offset-1">
                    <h5 className="font-bold">3. Nach erfolgreicher Überprüfung wird die Kleidermarke zugelassen.</h5>
                </div>
            </div>
            <div className="row pb-4 sm:pb-8">
                <div className="lg:offset-6 lg:col-6">
                    <h5 className="font-bold">4. Die Produkte werden anschliessend gemäss dem Sustinable Fashion Rating
                        rangiert.</h5>
                </div>
            </div>
            <div className="row pb-4 sm:pb-8">
                <div className="lg:col-6 lg:offset-1">
                    <h5 className="font-bold">5. Onlineshops können nun einfach auf die einheitlichen Daten der Kleider
                        inklusive deren Rating zugreifen.</h5>
                </div>
            </div>
        </div>
    )
}

export default SFRList;
