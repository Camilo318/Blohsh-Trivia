import React, { useEffect, useState } from 'react'
import Option from './Option'
import adventure from '../assets/images/undraw_adventure.svg'



const Card = () => {
    const [data , setData] = useState([
        {
            capital: ''
        }
    ])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/name/colombia')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
        .catch(console.log)

    }, [])

    return (
        <div className='bg-white rounded-24 px-4 sm:px-8 py-8 sm:py-16 relative max-w-lg'>
            <h3 className='text-2xl font-bold text-heading'>What is the capital Colombia?</h3>
            <Option opt='A' value={data[0].capital}/>
            <Option opt='B' value={'Billie'}/>
            <Option opt='C' value={'Billie'}/>
            <Option opt='D' value={'Billie'}/>
            <img src={adventure}
            className='card-image absolute right-0 w-1/3 max-w-full'
            alt="Test"/>
        </div>
    )
}

export default Card
