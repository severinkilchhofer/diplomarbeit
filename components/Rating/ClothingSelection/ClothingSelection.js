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

                <div className="p-10 h-auto w-full sm:w-56 md:w-1/3 flex-none overflow-hidden border-white border-2 rounded bg-white">
                    {selectedClothing ? renderSwitch(selectedClothing) : ''}
                </div>

                <div className="flex flex-wrap pl-0 lg:pl-16">
                    <div className="w-full">
                        <label className="block text-white text-sm sm:text-base font-bold mb-2">
                            Kleidungsstück auswählen
                        </label>
                        <button className={`${selectedClothing.selected === 0 ? 'bg-white' : 'bg-transparent'} w-24 sm:w-32 p-4 border-white border-2 mr-1 sm:mr-4 rounded focus:outline-none`}
                                onClick={() => selectCloth({selected: 0, color: '#D1495B', pattern: '#CCE6F6'})}>
                            <img src="shirt_small.svg" alt=""/>
                        </button>
                        <button className={`${selectedClothing.selected === 1 ? 'bg-white' : 'bg-transparent'} w-24 sm:w-32 p-4 border-white border-2 mr-1 sm:mr-4 rounded focus:outline-none`}
                                onClick={() => selectCloth({selected: 1, color: '#F3E9D2', pattern: '#515A5E'})}>
                            <img src="pullover_small.svg" alt=""/>
                        </button>
                        <button className={`${selectedClothing.selected === 2 ? 'bg-white' : 'bg-transparent'} w-24 sm:w-32 p-4 border-white border-2 mr-1 sm:mr-4 rounded focus:outline-none`}
                                onClick={() => selectCloth({selected: 2, color: '#4695BC', pattern: '#515A5E'})}>
                            <img src="socks_small.svg" alt=""/>
                        </button>
                    </div>
                    <div className="w-full pt-4">
                        <label className="block text-white text-sm sm:text-base font-bold mb-2">
                            Hauptfarbe wählen
                        </label>
                        <span className={`${selectedClothing.color === '#D1495B' ? 'border-white border-2' : ''} w-6 h-6 m-1 rounded-full bg-red inline-block cursor-pointer`}
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: '#D1495B', pattern: selectedClothing.pattern})}/>
                        <span className={`${selectedClothing.color === '#F3E9D2' ? 'border-white border-2' : ''} w-6 h-6 m-1 rounded-full bg-lightbrown inline-block cursor-pointer`}
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: '#F3E9D2', pattern: selectedClothing.pattern})}/>
                        <span className={`${selectedClothing.color === '#4695BC' ? 'border-white border-2' : ''} w-6 h-6 m-1 rounded-full bg-middleblue inline-block cursor-pointer`}
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: '#4695BC', pattern: selectedClothing.pattern})}/>
                        <span className={`${selectedClothing.color === '#1A936F' ? 'border-white border-2' : ''} w-6 h-6 m-1 rounded-full bg-green inline-block cursor-pointer`}
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: '#1A936F', pattern: selectedClothing.pattern})}/>
                        <span className={`${selectedClothing.color === '#EDAE49' ? 'border-white border-2' : ''} w-6 h-6 m-1 rounded-full bg-yellow inline-block cursor-pointer`}
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: '#EDAE49', pattern: selectedClothing.pattern})}/>
                    </div>
                    <div className="w-full">
                        <label className="block text-white text-sm sm:text-base font-bold mb-2">
                            Musterfarbe wählen
                        </label>
                        <span className={`${selectedClothing.pattern === '#CCE6F6' ? 'border-white border-2' : ''} w-6 h-6 m-1 rounded-full bg-lightgray inline-block cursor-pointer`}
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#CCE6F6'})}/>
                        <span className={`${selectedClothing.pattern === '#515A5E' ? 'border-white border-2' : ''} w-6 h-6 m-1 rounded-full bg-darkgray inline-block cursor-pointer`}
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#515A5E'})}/>
                        <span className={`${selectedClothing.pattern === '#702632' ? 'border-white border-2' : ''} w-6 h-6 m-1 rounded-full bg-winered inline-block cursor-pointer`}
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#702632'})}/>
                        <span className={`${selectedClothing.pattern === '#FFA5AB' ? 'border-white border-2' : ''} w-6 h-6 m-1 rounded-full bg-pink inline-block cursor-pointer`}
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#FFA5AB'})}/>
                        <span className={`${selectedClothing.pattern === '#0D3B66' ? 'border-white border-2' : ''} w-6 h-6 m-1 rounded-full bg-indigoblue inline-block cursor-pointer`}
                              onClick={() => selectCloth({selected: selectedClothing.selected, color: selectedClothing.color, pattern: '#0D3B66'})}/>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ClothingSelection;