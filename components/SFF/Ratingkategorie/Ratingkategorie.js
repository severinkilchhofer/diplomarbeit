import React from "react"

const Ratingkategorie = (props) => {
    return (
        <div className="bg-lightblue rounded p-5 pt-12" style={{height: '35rem'}}>
            <div className="flex justify-center pb-6">
                <img src={props.imageName} alt={props.imageAlt}/>
            </div>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <div className="absolute bottom-0 pb-4">
                <p className="font-bold pt-4">{props.gewichtung}</p>
            </div>
        </div>
    )
}

export default Ratingkategorie;
