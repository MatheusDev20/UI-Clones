import React from 'react'
import { Container, CTA, CTALogoOne, Description, SignUp, CTALogoTwo } from './styles'
function Login() {
    return (

        <Container>
            <CTA>
                <CTALogoOne src="/assets/cta-logo-one.svg" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                </Description>
                <CTALogoTwo src="/assets/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login
