import React, { useRef} from 'react'
import {createMarkup} from './Card'
const letters = ['A', 'B', 'C', 'D']


const Option = ({q, check, index}) => {
    const option = useRef(null)
    return (
        <div
        ref={option}
        onClick={e => check(e)}
        data-q={q}
        className='option text-base sm:text-lg'>

        <span className='text-2xl mr-12'>{letters[index]}</span>    
        <span dangerouslySetInnerHTML={createMarkup(q)}></span>
        </div>
    )
}

export default Option
