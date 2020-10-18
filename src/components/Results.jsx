import React from 'react'
import {useAppState} from './AppContext'
import winnerPhoto from '../assets/images/undraw_winners.svg'

const Results = ({history}) => {
    const [state, dispatch] = useAppState()

    const restartGame = () => {
        history.push('/')
        dispatch({
            type: 'restart game'
        })
    }
    return (
        <div className='card'>
            <img src={winnerPhoto} alt="Winner"
            className='max-w-full mx-auto mb-16'/>
            <h3 className='text-3xl sm:text-5xl text-center font-bold text-heading'>
                Results
            </h3>
            <div className='font-normal text-xl sm:text-2xl text-center text-heading'>
                You got
                <span className='text-correct text-4xl font-bold'>
                    {` ${state.myCorrectQ} `}
                </span>
                correct answers
            </div>

            <button className='px-12 py-5 border-2 border-heading rounded-12 text-center font-bold text-heading text-xl mt-20 mx-auto block'
            onClick={restartGame}>
                Try Again
            </button>
        </div>
    )
}

export default Results
