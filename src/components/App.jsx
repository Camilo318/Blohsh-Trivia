import React, { useState } from 'react'
import Card from './Card'
import data from './data.json'

const App = () => {
    return (
        <main className='bg-indigo-700 h-screen p-4 sm:p-6'>
            <Card />
        </main>
        
    )
}

export default App