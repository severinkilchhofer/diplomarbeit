import React from "react";
import ReactSlick from "react-slick";

const Slider = ({children}) => {
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: false,
            autoplaySpeed: 7000
        };

        return (
            <div>
                <ReactSlick {...settings}>
                    {children}
                </ReactSlick>
            </div>
        );
}

export default Slider;