import React, { useLayoutEffect, useState, useMemo } from 'react'
import Option from './Option'
import {useAppState} from './AppContext'

const getData = api => fetch(api).then(res => res.json())

const Card = ({history}) => {
    
    const [data , setData] = useState([])
    const [counter, setCounter] = useState(0)
    const [options, setOptions] = useState([])
    const [correct, setCorrect] = useState('')

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
        dispatch({
            type: 'correct answer',
            payload: ''
        })
        console.log(state)

        if (state.myCorrectQ === state.totalQ - 1) {
            endGame()
        } else {
            setCounter(counter => counter + 1)
        }
    }

    const endGame = () => {
        history.push('/results')
    }
    const checkAnswer = (e) => {
        const selectedOption = e.currentTarget.dataset.q
        if (selectedOption === correct) {
            e.currentTarget.classList.add('correct')
            setTimeout(() => {
                nextQ()
            }, 800);
        } 
        else {
            e.currentTarget.classList.add('wrong')
            setTimeout(() => {
                endGame()
            }, 800);
        }
    }


    return (
        <div className='card sm:px-8'>
            <h3
            className='text-lg sm:text-2xl font-bold text-heading'>
                {data.results && data.results[counter].question}
            </h3>
            { options &&
            options
            .map(opt => ({q: opt, num: Math.random()}))
            .sort((a, b) => a.num - b.num)
            .map((item, i) => {
                return (
                    <Option q={item.q} key={item.num}
                    check={checkAnswer} index={i}/>
                )
            }) } 
            <p className='text-base font-light text-heading mt-3'>
                {state.myCorrectQ} correct question out of
                {' ' + state.totalQ}
            </p>
        </div>
    )
}

export default Card
