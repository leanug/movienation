import React from 'react'
import reactLogo from './assets/images/reactjs-ar21.svg'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <img src={reactLogo} alt="React Logo" />
            <p>Powered by React / Styled Components / Context API / OMDb API</p>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: var(--color-psi);
    padding: 0 2rem 0.5rem 2rem;
    text-align: center;
`

export default Footer
