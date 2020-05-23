import React from "react";

const Marktstandard = () => {
    return (
        <section>
            <div className="overflow-hidden sm:flex w-full">
                <div className="pt-4 h-auto w-full sm:w-56 md:w-1/2 flex-none overflow-hidden">
                    <img src="marktstandard.svg" alt="Marktstandard, Bild mit einer Weltkarte"/>
                </div>

                <div className="pt-4 sm:pl-10">
                    <h5 className="text-blue">Marktstandard</h5>
                    <p className="mb-4">Ich möchte mit meinem Konzept ein Hilfsmittel für eine einheitliche Datenhaltung
                        in der Textilbranche schaffen. Dieses fokkusiert sich auf Nachhaltigkeit, Transparenz und
                        Menschenrechte. Hersteller von Textilprodukten sollen ihre Produkte in einem zentralen System
                        erfassen, die danach auf ihre Korrektheit geprüft werden. Auf diese Daten können Onlineshops
                        zugreifen, um ein nachvollziehbare und transparente Informationen zu erhalten.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Marktstandard;
