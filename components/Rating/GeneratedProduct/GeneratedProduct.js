import React, {useState} from "react"

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


    return (
        <div>{Math.round(overallRating)}</div>
    );
}

export default GeneratedProduct;