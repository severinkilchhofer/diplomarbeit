import React from "react";

const Energieverbrauch = () => {
    return (
        <section>
            <div className="overflow-hidden sm:flex w-full">
                <div className="h-16 pt-4 h-auto w-1/2 sm:w-56 md:w-1/4 flex-none overflow-hidden">
                    <img src="energieklassen.svg" alt="Energieklassen"/>
                </div>

                <div className="pt-4 sm:pl-32">
                    <h5>Energieverbrauchskennzeichnung</h5>
                    <p className="mb-4">Die Kennzeichnung des Energieverbrauchs von unterschiedlichen
                        Gütern (Geräte, Gebäude, Autos) dient zur Unterstützung der Kaufentscheidung, indem sie Auskunft
                        über die Energieeffizienz bei der Nutzung geben soll.
                    </p>
                    <p> Ein wichtiges Beispiel ist das EU-Energielabel für Elektrogeräte. Die Hersteller von
                        Elektrogroßgeräten sind verpflichtet, als zusätzliche Information zur Kaufentscheidung
                        Energie-Labels auf den Geräten anzubringen. </p>
                </div>
            </div>
        </section>
    );
}


export default Energieverbrauch;
