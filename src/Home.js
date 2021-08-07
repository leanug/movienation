import React from 'react'
import BackToTopBtn from './BackToTopBtn'
import Form from './SearchForm'
import Footer from './Footer'
import Movies from './Movies'
import styled from 'styled-components'

const Home = () => {
    return (
        <>
            <Main>
                <Form />
                <Movies />
            </Main>
            <Footer />
            <BackToTopBtn />
        </>
    )
}

const Main = styled.main`
  min-height: calc(100vh - 10rem);
`

export default Home
