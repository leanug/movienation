import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './theme/globalStyles';
import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies/:id" children={ <Movie /> } />
      </Switch>
    </>
  )
}

export default App
