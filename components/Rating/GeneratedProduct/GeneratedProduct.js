import React, {useEffect, useState} from "react"
import ShopItem from "../../ShopItem/ShopItem";
import Shirt from "../../Shirt/Shirt";
import Pullover from "../../Pullover/Pullover";
import Socks from "../../Socks/Socks";

const GeneratedProduct = () => {
    const [finalProductState, setFinalProductState] = useState(() => {
            if (typeof window !== 'undefined') {

                const ratingData = localStorage.getItem('ratingData');
                const selectedClothing = localStorage.getItem('selectedClothing');
                const flowData = localStorage.getItem('flowData');

                let data = [];
                data.push(JSON.parse(ratingData), JSON.parse(selectedClothing), JSON.parse(flowData));
                return data;
            }
        }
    )



    const ratingZahlen = finalProductState ? finalProductState[2] : '';
    const muaBerechnet = finalProductState ? Number(ratingZahlen.arbeitswoche) + Number(ratingZahlen.urlaubstage) + Number(ratingZahlen.sicherheit) + Number(ratingZahlen.kinderarbeit) + Number(ratingZahlen.ueberstunden) : '';
    const subRatingMua = muaBerechnet / 5;

    const ounBerechnet = finalProductState ? Number(ratingZahlen.abwasser) + Number(ratingZahlen.rohstoffe) + Number(ratingZahlen.selteneMetalle) + Number(ratingZahlen.transportweg) : '';
    const subRatingOun = ounBerechnet / 4;

    const rutBerechnet = finalProductState ? Number(ratingZahlen.materialdeklaration) + Number(ratingZahlen.lieferanten) + Number(ratingZahlen.verarbeitungsbetriebe) + Number(ratingZahlen.label) : ''
    const subRatingRut = rutBerechnet / 4;

    const overallRating = (subRatingMua + subRatingRut + subRatingOun) / 3;


    const renderSwitch = ({selected}) => {
        switch (selected) {
            case 1:
                return <Pullover fill={finalProductState ? finalProductState[1].color : ''}
                                 pattern={finalProductState ? finalProductState[1].pattern : ''}/>;
            case 2:
                return <Socks fill={finalProductState ? finalProductState[1].color : ''}
                              pattern={finalProductState ? finalProductState[1].pattern : ''}/>;
            default:
                return <Shirt fill={finalProductState ? finalProductState[1].color : ''}
                              pattern={finalProductState ? finalProductState[1].pattern : ''}/>;
        }
    }


    return (
        <div className="row">
            {finalProductState ?
                <ShopItem brand={finalProductState[0].name}
                          name={finalProductState[0].productName}
                          description={finalProductState[0].beschreibung}
                          price={finalProductState[0].price}
                          rating={Math.round(overallRating)}
                          kleidungsstueck={renderSwitch({selected: finalProductState[1].selected})}
                          subratings={[subRatingMua, subRatingRut, subRatingOun, Math.round(overallRating * 100) / 100]}/>
                : ''}
        </div>
    );
}

export default GeneratedProduct;