import React, {useEffect, useState} from "react"
import Pullover from "../../Pullover/Pullover";
import Socks from "../../Socks/Socks";
import Shirt from "../../Shirt/Shirt";

const ClothingSelection = () => {
    const [selectedClothing, selectCloth] = useState(() => {
        if (typeof window !== 'undefined') {
            const value = localStorage.getItem('selectedClothing');
            return value !== null ? JSON.parse(value) : {selected: 0, color: '#D1495B', pattern: '#CCE6F6'};
        }
    });

    useEffect(
        () => {
            localStorage.setItem('selectedClothing', JSON.stringify(selectedClothing))
        }, [selectedClothing]
    )

    const renderSwitch = ({selected, color, pattern}) => {
        switch (selected) {
            case 1:
                return <Pullover fill={color} pattern={pattern}/>;
            case 2:
                return <Socks fill={color} pattern={pattern}/>;
            default:
                return <Shirt fill={color} pattern={pattern}/>;
        }
    }

    return(
        <section>
            <div className="overflow-hidden sm:flex w-full">

                <div className="p-10 h-auto w-full sm:w-56 md:w-1/3 flex-none overflow-hidden border-blue border-2 rounded">
                    {selectedClothing ? renderSwitch(selectedClothing) : ''}
                </div>

                <div className="flex flex-wrap pl-0 lg:pl-16">
                    <div className="w-full">
                        <label className="block text-black text-sm font-bold mb-2">
                            Kleidungsstück auswählen
                        </label>
                        <button className="w-24 sm:w-32 p-4 border-blue border-2 mr-1 sm:mr-4 rounded"
                                onClick={() => selectCloth({selected: 0, color: '#d1495b', pattern: '#CCE6F6'})}>
                            <img src="shirt_small.svg" alt=""/>
                        </button>
                        <button className="w-24 sm:w-32 p-4 border-blue border-2 mx-1 sm:mx-4 rounded"
                                onClick={() => selectCloth({selected: 1, color: '#F3E9D2', pattern: '#515A5E'})}>
                            <img src="pullover_small.svg" alt=""/>
                        </button>
                        <button className="w-24 sm:w-32 p-4 border-blue border-2 mx-1 sm:mx-4 rounded"
                                onClick={() => selectCloth({selected: 2, color: '#4695BC', pattern: '#515A5E'})}>
                            <img src="socks_small.svg" alt=""/>
                        </button>
                    </div>
                    <div className="w-full pt-4">
                        <label className="block text-black text-sm font-bold mb-2">
                            Hauptfarbe wählen
                        </label>
                        <span className="w-6 h-6 m-1 rounded-full bg-yellow inline-block"
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: '#ffd200', pattern: selectedClothing.pattern})}/>
                        <span className="w-6 h-6 m-1 rounded-full bg-red inline-block"
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: '#D1495B', pattern: selectedClothing.pattern})}/>
                        <span className="w-6 h-6 m-1 rounded-full bg-green inline-block"
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: '#1A936F', pattern: selectedClothing.pattern})}/>
                        <span className="w-6 h-6 m-1 rounded-full bg-blue inline-block"
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: '#114B5F', pattern: selectedClothing.pattern})}/>
                    </div>
                    <div className="w-full">
                        <label className="block text-black text-sm font-bold mb-2">
                            Musterfarbe wählen
                        </label>
                        <span className="w-6 h-6 m-1 rounded-full bg-yellow inline-block"
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#ffd200'})}/>
                        <span className="w-6 h-6 m-1 rounded-full bg-red inline-block"
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#D1495B'})}/>
                        <span className="w-6 h-6 m-1 rounded-full bg-green inline-block"
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#1A936F'})}/>
                        <span className="w-6 h-6 m-1 rounded-full bg-blue inline-block"
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#114B5F'})}/>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ClothingSelection;