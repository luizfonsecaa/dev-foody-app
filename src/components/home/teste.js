import React from 'react'

export default (props) => {
    const soma = () => {
        props.addNum(10)
    }


    return (
        <>
            <p>Componente  teste { props.numero } </p>
            <button onClick={soma}>+</button>
        </>

        
    )
}