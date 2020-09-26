import React, { useEffect, useState } from 'react'
import Option from './Option'
import questions from './data.json'

const getData = (api) => fetch(api)
    .then(res => res.json())

const Card = () => {
    const [data , setData] = useState([])
    const [counter, setCounter] = useState(0)
    const [options, setOptions] = useState([])
    const [correct, setCorrect] = useState('')
    useEffect(() => {
        getData('https://opentdb.com/api.php?amount=15&category=15&difficulty=easy&type=multiple')
        .then(data => setData(data))

    }, [])

    useEffect(() => {
        const correctAnswer = data.results && 
        data.results[counter].correct_answer

        const incorrectAnswers = data.results && 
        data.results[counter].incorrect_answers

        const newOptions = incorrectAnswers && [...incorrectAnswers, correctAnswer]
        setCorrect(correctAnswer)
        setOptions(newOptions)

    }, [counter, data])

    const checkAnswer = (e) => {
        const selectedOpt = e.target.dataset.q
        if (selectedOpt === correct) {
            console.log('You go pal!')
            setCounter(counter => counter + 1)
            e.target.classList.add('correct')
        } else {
            console.log('Shame on you')
            e.target.classList.add('wrong')

        }
    }

    return (
        <div className='bg-white rounded-24 px-4 sm:px-8 py-8 relative w-full max-w-lg mx-auto'>
            <h3 className='text-lg sm:text-2xl font-bold text-heading'>
                {data.results && data.results[counter].question}
            </h3>

            {
                options &&
                options.map(opt => ({q: opt, num: Math.random()}))
                .sort((a, b) => a.num - b.num)
                .map((item, i) => {
                    return (
                        <Option q={item.q} key={i}
                        check={checkAnswer}/>
                    )
                })
            }

            <button className='bg-select rounded-12 text-lg font-bold px-8 py-4 mt-6 text-white float-right shadow-md'>
                Next
            </button>
        </div>
    )
}

export default Card
