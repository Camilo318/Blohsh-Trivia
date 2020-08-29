import React, { useState } from 'react'
import data from './data.json'

const App = () => {
    const [list, setList] = useState([])
    const handleClick = () => {
        setList(data.loaders)
    }
    return (
        <div className="container mx-auto px-5">
            <h1 className="font-semibold text-blue-700 text-2xl">Billie Eilish</h1>
            <ul>
                {list.map(loader => (
                    <li key={loader.id}>
                        {loader.name}
                    </li>
                ))}
            </ul>

            <button onClick={handleClick}
            className="bg-purple-600 font-semibold text-white py-2 px-3 rounded-sm my-4 border border-purple-600 hover:bg-white hover:text-purple-600">
                Show Loaders
            </button>

            <div className="bg-red-100 border border-red-400
            text-red-700 px-4 py-3 rounded my-3 relative max-w-md">
                <strong className="font-bold">Holy Smokes! </strong>
                <span className="block sm:inline">Something seriously bad happened.</span>
                <span className="text-red-700 font-bold absolute top-0 right-0 bottom-0 px-4 py-3 text-xl leading-none cursor-pointer">&times;</span>
            </div>
            <div className="bg-green-200 border border-green-400
            text-green-700 px-4 py-3 rounded my-3 relative max-w-md">
                <strong className="font-bold">Holy Cow! </strong>
                <span className="block sm:inline">Something seriously good happened.</span>
                <span className="text-green-700 font-bold absolute top-0 right-0 bottom-0 px-4 py-3 text-xl leading-none cursor-pointer">&times;</span>
            </div>
        </div>
    )
}

export default App