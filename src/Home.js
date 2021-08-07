import React from 'react'
import Form from './SearchForm'
import Movies from './Movies'
import Footer from './Footer'
import BackToTopBtn from './BackToTopBtn'
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
  background-color: var(--color-psi);
  min-height: calc(100vh - 10rem);
`

export default Home
