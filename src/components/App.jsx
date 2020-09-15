import React, { useState } from 'react'
import Card from './Card'
import data from './data.json'

const App = () => {
    return (
        <main className='bg-indigo-700 h-screen p-3 sm:p-6 grid place-items-center'>
            <Card />
        </main>
        
    )
}

export default App