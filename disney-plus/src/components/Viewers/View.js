import React from 'react';
import { Container, Wrap } from './styles';
export default function View() {
    return (
        <Container>
            <Wrap>
                <img src="/assets/viewers-disney.png" alt="disney" />
            </Wrap>
            <Wrap>
                <img src="/assets/viewers-pixar.png" alt="pixar" />
            </Wrap>
            <Wrap>
                <img src="/assets/viewers-marvel.png" alt="marvel"/>
            </Wrap>
            <Wrap>
                <img src="/assets/viewers-starwars.png" alt="star wars" />
            </Wrap>
            <Wrap>
                <img src="/assets/viewers-national.png" alt="national"/>
            </Wrap>
        </Container>
    )
}
