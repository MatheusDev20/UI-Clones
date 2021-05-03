import React from 'react';
import Slider from '../ImgSlider/Slider';
import { Container } from './styles';
import View from '../Viewers/View'
import Movies from '../Movies/Movies';

export default function Home() {
    return (
        <Container>
            <Slider />
            <View />
            <Movies />
        </Container>
    )
}

//background-color: #040714;