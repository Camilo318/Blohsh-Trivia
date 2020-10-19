import React, {useState, useLayoutEffect} from 'react'
import Card from './Card'
import  loader from '../assets/images/d1.gif'

const getData = api => fetch(api).then(res => res.json())

const Game = ({history}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useLayoutEffect(() => {
        getData('https://opentdb.com/api.php?amount=3&category=15&difficulty=easy&type=multiple')
        .then(data => {
            setData(data)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className='min-h-screen p-3 sm:p-6 grid grid-cols-1 content-center'>
            { isLoading ? 
            <img src={loader} alt="Doraemon getting the info"
            className='justify-self-center'/>
            :
            <Card data={data} history={history}/> }
        </div>
    )
    
}

export default Game
