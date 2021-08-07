import React from 'react'
import reactLogo from './assets/images/reactjs-ar21.svg'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <img src={reactLogo} alt="React Logo" />
            <p>Powerd by React / Styled Components / Context API / OMDb API</p>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    padding: 0 2rem;
    text-align: center;
    background-color: var(--color-psi);
`

export default Footer
