import React from 'react'

const Option = ({q, check}) => {
    return (
        <div onClick={check} data-q={q}
        className='option text-base sm:text-lg'>

        <span className='text-2xl mr-12'>A</span>    
        <span>{q}</span>
        </div>
    )
}

export default Option
