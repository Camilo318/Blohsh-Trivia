import React, { useLayoutEffect, useState, useMemo } from 'react'
import Option from './Option'
import {useAppState} from './AppContext'

const getData = api => fetch(api).then(res => res.json())

const Card = ({history}) => {
    console.log('I am running 😁')
    const [data , setData] = useState([])
    const [counter, setCounter] = useState(0)
    const [options, setOptions] = useState([])
    const [correct, setCorrect] = useState('')
    const [showNext, setShowNext] = useState(false)

    const [state, dispatch] = useAppState()

    useLayoutEffect(() => {
        getData('https://opentdb.com/api.php?amount=3&category=15&difficulty=easy&type=multiple')
        .then(data => setData(data))

    }, [])

    useLayoutEffect(() => {
        const correctAnswer = data.results && 
        data.results[counter].correct_answer

        const incorrectAnswers = data.results && 
        data.results[counter].incorrect_answers

        const newOptions = incorrectAnswers &&
        [...incorrectAnswers, correctAnswer]
        setCorrect(correctAnswer)
        setOptions(newOptions)

    }, [counter, data])

    const nextQ = () => {
        if (state.myCorrectQ === state.totalQ) {
            winGame()
        } else {
            setCounter(counter => counter + 1)
            setShowNext(false)
        }
    }

    const winGame = () => {
        console.clear()
        console.log('You won')
        history.push('/results')
    }
    const checkAnswer = (e) => {
        console.log('Checking')
        const selectedOption = e.currentTarget.dataset.q

        if (selectedOption === correct) {
            e.currentTarget.classList.add('correct')
            setShowNext(true)
            dispatch({
                type: 'correct answer',
                payload: ''
            })
        } else {
            e.currentTarget.classList.add('wrong')
        }
    }


    return (
        <div className='card sm:px-8'>
            <h3
            className='text-lg sm:text-2xl font-bold text-heading'>
                {data.results && data.results[counter].question}
            </h3>
            { useMemo(() => {
                return (
                    options &&
                    options
                    .map(opt => ({q: opt, num: Math.random()}))
                    .sort((a, b) => a.num - b.num)
                    .map((item, i) => {
                        return (
                            <Option q={item.q} key={item.num}
                            check={checkAnswer} index={i}/>
                        )
                    })
                )}, [options])
            }    
            <p>
                {state.myCorrectQ} correct question out of
                {' ' + state.totalQ}
            </p>
            {   showNext &&
                <button onClick={nextQ} className='btn'>
                    Next
                </button>
            }
        </div>
    )
}

export default Card
