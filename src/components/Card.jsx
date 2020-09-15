import React from 'react'
import Option from './Option'

const Card = () => {
    return (
        <div
        className='bg-white rounded-lg px-4 sm:px-8 py-8 sm:py-16 relative w-full sm:max-w-lg mx-auto'>
            <h3 className='text-2xl font-bold text-blue-800'>What is tha capital Colombia?</h3>
            <Option />
            <Option />
            <Option />
            <Option />
        </div>
    )
}

export default Card
