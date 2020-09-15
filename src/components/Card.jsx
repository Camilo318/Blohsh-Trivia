import React from 'react'
import Option from './Option'
import adventure from '../assets/images/undraw_adventure.svg'

const Card = () => {
    return (
        <div
        className='bg-white rounded-12 sm:rounded-24 px-3 sm:px-8 py-16 relative max-w-lg'>
            <h3 className='text-2xl font-bold text-heading'>What is tha capital Colombia?</h3>
            <Option />
            <Option />
            <Option />
            <Option />
            <img src={adventure}
            className='card-image absolute right-0 w-1/3 max-w-full'
            alt="Test"/>
        </div>
    )
}

export default Card
