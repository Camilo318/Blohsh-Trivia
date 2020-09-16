import React from 'react'

const Option = ({opt, value}) => {
    return (
        <div
        className='option'>

        <span className='text-2xl mr-12'>{opt}</span>    
        <span>{value}</span>
        </div>
    )
}

export default Option
