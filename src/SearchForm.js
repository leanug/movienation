import React from 'react'
import { useGlobalContext } from './context'
import styled from 'styled-components'
import bgImage from './assets/images/meg-boulden-A0FgI6AFjng-unsplash.jpg'

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()

  return (
    <Form bgImage={ bgImage } onSubmit={(e) => e.preventDefault()}>
      <Overlay>
        <h2>Movienation</h2>
        <div>
          <span>Search movie</span>
          <input 
            type="text" 
            value={ query } 
            onChange={ (e) => setQuery( e.target.value )} 
          />
        </div>
      </Overlay>
      { error.show && <div className="error">{ error.msg }</div> }
    </Form>
  )
}

const Form = styled.form`
  grid-row: 1 / span 2;
  min-height: 50rem;
  width: 100%;
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url("${({ bgImage }) => bgImage }");
  z-index: 0;
`

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba( 0, 0, 0, 0.65 );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  span {
    width: 15rem;
  }

  div {
    display: flex;
    align-items: center;
    max-width: 70rem;
    
    width: 100%;
    min-width: 28rem;

    @media screen and (max-width: 576px) {
      display: block;
    }
  }

  input {
    width: 100%;
    max-width: 70rem;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  }
`

export default SearchForm
