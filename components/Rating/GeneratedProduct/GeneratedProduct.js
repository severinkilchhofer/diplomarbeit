import React, {useState} from "react"
import ShopItem from "../../ShopItem/ShopItem";
import Shirt from "../../Shirt/Shirt";
import Pullover from "../../Pullover/Pullover";
import Socks from "../../Socks/Socks";

const GeneratedProduct = () => {
    const [finalProductState, setFinalProductState] = useState(() => {
            if (typeof window !== 'undefined') {

                const ratingData = localStorage.getItem('ratingData');
                const selectedClothing = localStorage.getItem('selectedClothing');
                const muaData = localStorage.getItem('muaData');
                const rutData = localStorage.getItem('rutData');
                const ounData = localStorage.getItem('ounData');

                let data = [];
                data.push(JSON.parse(ratingData), JSON.parse(selectedClothing), JSON.parse(muaData), JSON.parse(rutData), JSON.parse(ounData));
                return data;
            }
        }
    )

    const mua = finalProductState ? finalProductState[2] : ''
    const muaBerechnet = mua ? Number(mua.arbeitszeit) + Number(mua.ferien) + Number(mua.gesundheit) + Number(mua.kinderarbeit) + Number(mua.ueberstunden) : '';
    const subRatingMua = muaBerechnet / 5

    const rut = finalProductState ? finalProductState[3] : ''
    const rutBerechnet = rut ? Number(rut.materialdeklaration) + Number(rut.rohmaterialien) + Number(rut.verarbeitungsbetriebe) + rut.label.length : ''
    const subRatingRut = rutBerechnet / 4

    const oun = finalProductState ? finalProductState[4] : ''
    const ounBerechnet = rut ? Number(oun.abwasser) + Number(oun.rohstoffe) + Number(oun.selteneMetalle) + Number(oun.transportweg) : '';
    const subRatingOun = ounBerechnet / 4


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
        <div className="row pb-64">
            {finalProductState ?
                <ShopItem brand={finalProductState[0].name}
                          name={finalProductState[0].productName}
                          description={finalProductState[0].beschreibung}
                          price={65}
                          rating={Math.round(overallRating)}
                          kleidungsstueck={renderSwitch({selected: finalProductState[1].selected})}/>
                : ''}
        </div>
    );
}

export default GeneratedProduct;