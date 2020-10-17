import React, { useLayoutEffect, useState, useMemo } from 'react'
import Option from './Option'
import questions from './data.json'

const getData = api => fetch(api).then(res => res.json())

const Card = () => {
    console.log('I am running 😁')
    const [data , setData] = useState([])
    const [counter, setCounter] = useState(0)
    const [options, setOptions] = useState([])
    const [correct, setCorrect] = useState('')
    const [showNext, setShowNext] = useState(false)

    useLayoutEffect(() => {
        getData('https://opentdb.com/api.php?amount=15&category=15&difficulty=easy&type=multiple')
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
        setCounter(counter => counter + 1)
        setShowNext(false)
    }
    const checkAnswer = (e) => {
        const selectedOption = e.currentTarget.dataset.q
        
        if (selectedOption === correct) {
            e.currentTarget.classList.add('correct')
            setShowNext(true)
        } else {
            e.currentTarget.classList.add('wrong')
        }
    }


    return (
        <div className='bg-white rounded-24 px-4 sm:px-8 py-8 relative w-full max-w-lg mx-auto'>
            <h3
            className='text-lg sm:text-2xl font-bold text-heading'>
                {data.results && data.results[counter].question}
            </h3>

            <div>
            {  useMemo(() => {
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
            </div>

            {   showNext &&
                <button onClick={nextQ}
                className='bg-select rounded-12 text-lg font-bold px-8 py-4 mt-6 text-white float-right shadow-md active:bg-white active:outline-none active:text-select border-2 border-select  active:border-select'>
                    Next
                </button>
            }
        </div>
    )
}

export default Card
