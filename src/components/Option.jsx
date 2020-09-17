import React from 'react'

const Option = ({opt, value}) => {
    return (
        <div
        className='option text-base sm:text-lg'>

        <span className='text-2xl mr-12'>{opt}</span>    
        <span>{value}</span>
        </div>
    )
}

export default Option
