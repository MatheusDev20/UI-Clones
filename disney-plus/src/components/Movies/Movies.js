import React from 'react'
import { Container, Content, Wrap } from './styles'

export default function Movies() {
    return (
        <Container>
            <h4>Reccomended for you</h4>

            <Content>
                <Wrap>
                    <img src="/assets/viewers-disney.png" alt="?" />
                </Wrap>
                <Wrap>
                    <img src="/assets/viewers-disney.png" alt="?" />
                </Wrap>
                <Wrap>
                    <img src="/assets/viewers-disney.png" alt="?" />
                </Wrap>
                <Wrap>
                    <img src="/assets/viewers-disney.png" alt="?" />
                </Wrap>

            </Content>
        </Container>
    )
}
