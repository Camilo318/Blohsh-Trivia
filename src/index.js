import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { AppStateProvider } from './components/AppContext'
import './assets/styles/main.css'



ReactDOM.render(
    <AppStateProvider>
        <App /> 
    </AppStateProvider>,
    document.getElementById('root'))


