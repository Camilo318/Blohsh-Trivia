import React from 'react'
import Results from './Results'
import { HashRouter, Route, Switch}  from 'react-router-dom'
import Game from './Game'

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Game}/>
                <Route exact path='/results' component={Results}/>
            </Switch>
        </HashRouter>
    )
}

export default App