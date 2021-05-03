import React from 'react'
import { Container, Background, ImageTitle, Controls, PlayButton, GroupWatchButton, TraillerButton, AddButon, SubTitle, Description } from './styles';
export default function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="background" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="title" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/assets/play-icon-black.png" alt="play" />
                    <span>PLAY</span>
                </PlayButton>
                <TraillerButton>
                    <img src="/assets/play-icon-white.png" alt="play" />
                    <span>Trailer</span>
                </TraillerButton>
                <AddButon>
                    <span>+</span>
                </AddButon>
                <GroupWatchButton>
                    <img src="/assets/group-icon.png" alt="group-watch" />
                </GroupWatchButton>
            </Controls>

            <SubTitle>
                2018 * 7m * Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
            Uma mãe chinesa que fica triste quando o filho adulto sai de casa tem outra oportunidade de ser mãe quando um dos seus bolinhos ganha vida. Mas ela descobre que nada permanece engraçado e pequeno para sempre
            </Description>
        </Container>
    )
}
