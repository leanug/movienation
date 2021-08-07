import React from 'react'
import GlobalStyle from './theme/globalStyles';
import Home from './Home'
import Movie from './SingleMovie'
import { Switch, Route } from 'react-router-dom'

const App = ()=> {
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
