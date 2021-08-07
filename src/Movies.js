import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
import npa from './assets/images/npa.jpg'
import styled from 'styled-components'


const Movies = () => {
  const { movies, isLoading } = useGlobalContext()

  if ( isLoading ) {
    return <div className='loading'></div>
  }

  return (
    <Section className="movies">
      { movies.map( movie => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie
        
        return (
          <Link to={ `/movies/${ id }`  } key={ id } className="movie">
            <article>
              <img src={ poster === 'N/A' ? npa : poster } alt={ title }/>
              <div className="movie-info">
                <h4 className="title">{ title }</h4>
                <p>{ year }</p>
              </div>
            </article>
          </Link>
        )
      } ) }
    </Section>
  )
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax( 28rem, 1fr ));
  padding: 2rem;
  max-width: 132rem;
  grid-gap: 4rem;
  margin: auto;
  width: 90vw;
  display: grid;
  gap: 2rem;
  margin: 0 auto;
  padding-bottom: 5rem;
  background-color: #131313;
  z-index: 10;
  position: relative;
  border-radius: var(--radius-beta);
  margin-top: -8rem;

  article {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    height: 100%;
  }
  article img {
    width: 100%;
    height: 400px;
    display: block;
    object-fit: cover;
  }

  .movie-info {
    background-color: #1A1A1A;
    padding: 2rem;
    height: 100%;
    width: 100%;
  }

  h4 {
    font-weight: 500;
  }
`

export default Movies
