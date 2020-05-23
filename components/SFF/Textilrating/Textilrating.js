import React from "react";

const Textilrating = () => {
    return (
        <section>
            <div className="overflow-hidden sm:flex w-full">
                <div className="pt-4 sm:pl-10">
                    <h5 className="text-blue">Textilrating</h5>
                    <p className="mb-4">Mit den einheitlichen und geprüften Daten der Textilhersteller, wird ein
                        Textilrating erstellt. Ich nenne es <a href={'#rating'} className="text-blue">Sustainable
                            Fashion Rating</a>. Dieses trägt dazu bei, dem
                        Endkunden ein einfaches Mittel gegen die Intransparenz im Onlinekleiderhandel zu geben.</p>
                </div>

                <div className="pt-4 h-auto w-full sm:w-56 md:w-1/2 flex-none overflow-hidden">
                    <img src="textilrating.svg" alt="Textilrating, Bild mit einem illustriertem Onlineshop"/>
                </div>
            </div>
        </section>
    );
}

export default Textilrating;
