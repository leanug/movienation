import React from 'react'
import npa from './assets/images/npa.jpg'
import styled from 'styled-components'
import { API_ENDPOINT } from './context'
import useFetch from './useFetch'
import { useParams, Link } from 'react-router-dom'

const SingleMovie = () => {
  const { id } = useParams()
  const { isLoading, error, data: movie } = useFetch( `&i=${ id }` )

  if ( isLoading ) {
    return <div className="loading"></div>
  }

  if ( error.show ) {
    return (
      <div className="page-error">
        <h1>{ error.msg }</h1>
        <Link to='/' className="btn">
          back to movies
        </Link>
      </div>
    )
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie 

  return (
    <Wrapper className='single-movie'>
      <img src={ poster === 'N/A' ? npa : poster } alt={ title } />
      <div className="single-movie-info">
        <h1>{ title }</h1>
        <p>{ plot }</p>
        <h4>{ year }</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  max-width: var(--max-width);
  margin: 4rem auto;
  display: grid;
  gap: 2rem;

  h1 {
    font-size: calc(2rem + 2vw);
    line-height: 1.2;
  }

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius-alpha);
  }

  p {
    max-width: 35em;
    margin-top: 1.5rem;
    line-height: 1.8;
  }

  .btn {
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--color-alpha);
    color: var(--color-omega);
    border-radius: var(--radius-beta);
    display: inline-block;
    margin-top: 2rem;
    letter-spacing: 1px;
    padding: 1rem 2rem;
  }

  @media screen and (min-width: 992px) {
    & {
      grid-template-columns: 1fr 2fr;
    }
  }

  .page-error {
    text-align: center;
    padding: 2rem;
  }
`

export default SingleMovie
