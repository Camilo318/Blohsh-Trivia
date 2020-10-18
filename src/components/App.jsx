import React from 'react'
import Card from './Card'
import Results from './Results'
import { HashRouter, Route, Switch}  from 'react-router-dom'

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Card}/>
                <Route exact path='/results' component={Results}/>
            </Switch>
        </HashRouter>
    )
}

export default App