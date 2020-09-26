import React, { useState } from 'react'
import Card from './Card'
import data from './data.json'

const App = () => {
    return (
        <main className='min-h-screen p-3 sm:p-6 grid grid-cols-1 content-center'>
            <Card />
        </main>
        
    )
}

export default App