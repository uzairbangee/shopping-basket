import React, { ReactElement } from 'react'
import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import header1 from "./../../images/header1.jpg";
import header2 from "./../../images/header2.jpg";
import header3 from "./../../images/header3.jpg";

interface Props {
    
}

function CarouselSlider({}: Props): ReactElement {
    return (
        <div className="carousel">
            <Carousel showArrows={true} showThumbs={false}>
                <div>
                    <img src={header1} />
                </div>
                <div>
                    <img src={header2} />
                </div>
                <div>
                    <img src={header3} />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselSlider
