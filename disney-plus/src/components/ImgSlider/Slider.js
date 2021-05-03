import React from 'react';
import 'slick-carousel/slick/slick.css';
import { Carousel, Wrap } from './styles'
import 'slick-carousel/slick/slick-theme.css';

export default function SliderImg() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoPlay: false
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/assets/slider-badging.jpg" alt="slider" />
            </Wrap>
            <Wrap>
                <img src="/assets/slider-badag.jpg" alt="slider" />
            </Wrap>
        </Carousel>
    )
}
