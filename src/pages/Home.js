import React, { useState } from 'react'
import Teste from '../components/home/teste'

export default () => {
    const [num, setNum] = useState(0)

    const trocaNumero = () => {
        
    }

    return (
        <>
            <h1>Home {num}</h1> 
            <Teste  numero={num} addNum={trocaNumero} />
        </>
    )
}