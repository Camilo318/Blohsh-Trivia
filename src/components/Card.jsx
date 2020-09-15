import React from 'react'
import Option from './Option'
import adventure from '../assets/images/undraw_adventure.svg'

const Card = () => {
    return (
        <div
        className='bg-white rounded-24 px-2 sm:px-8 py-16 relative w-full sm:max-w-lg mx-auto'>
            <h3 className='text-2xl font-bold text-heading'>What is tha capital Colombia?</h3>
            <Option />
            <Option />
            <Option />
            <Option />
            <img src={adventure}
            className='absolute right-0 top-0 -mt-20'
            alt="Test"/>
        </div>
    )
}

export default Card
