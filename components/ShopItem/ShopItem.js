import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import RatingModal from "./RatingModal";

const ShopItem = (props) => {

    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px'
        }
    };

    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement('body');
    });

    return (
        <section className="m-2 leading-normal w-full">
            <div className="bg-white shadow-2xl rounded overflow-hidden m-4 sm:flex">
                <div
                    className="flex justify-center bg-gray m-0 sm:m-5 p-5 sm:p-5 rounded h-32 sm:h-auto sm:w-56 md:w-1/3 flex-none rounded overflow-hidden">
                    {props.kleidungsstueck}
                </div>

                <div className="px-6 py-4">
                    <p className="mb-2 font-bold text-blue">{props.brand}</p>
                    <h2>{props.name}</h2>
                    <p className="mb-4 text-black text-sm">{props.description}</p>
                    <p className="mb-2 font-bold">CHF {props.price}.-</p>

                    <div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className={`rating${props.rating} w-16 h-16 rounded-tl-full rounded-bl-full rounded-br-full focus:outline-none`}>
                            <p className="font-bold text-lg">{props.rating}</p>
                        </button>
                    </div>
                </div>

            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Rating Modal">
                <button onClick={() => setIsOpen(false)} style={{position: 'absolute', right: '20px'}}>
                    <svg height='15px' width='15px' fill="#114B5F" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 16 16" x="0px" y="0px">
                        <g>
                            <path d="M2 2l12 12"></path>
                            <path
                                d="M14 15c-.256 0-.512-.098-.707-.293l-12-12c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l12 12c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293zM14 2l-12 12"></path>
                            <path
                                d="M2 15c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l12-12c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-12 12c-.195.195-.451.293-.707.293z"></path>
                        </g>
                    </svg>
                </button>
                <RatingModal rating={props.rating} subratings={props.subratings}/>
            </Modal>
        </section>
    )
}

export default ShopItem;
