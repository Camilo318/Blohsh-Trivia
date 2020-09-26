import React, { useEffect, useState } from 'react'
import Option from './Option'
import questions from './data.json'


const Card = () => {
    const [data , setData] = useState([
        {
            capital: ''
        }
    ])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/name/colombia')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(console.log)

    }, [])

    return (
        <div className='bg-white rounded-24 px-4 sm:px-8 py-8 sm:py-16 relative max-w-lg'>
            <img src={data[0].flag} alt="Country Flag"
            className="w-32 mx-auto rounded"/>
            <h3 className='text-lg sm:text-2xl font-bold text-heading mt-6'>{questions.questions[0]}</h3>
            <Option opt='A' value={data[0].capital}/>
            <Option opt='B' value={'Billie'}/>
            <Option opt='C' value={'Billie'}/>
            <Option opt='D' value={'Billie'}/>
        </div>
    )
}

export default Card
