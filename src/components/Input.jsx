import React, { useState } from 'react'

const Input = props => {

    const [ name, setName ] = useState('')

    function setDataInput(){
        props.getDataInput(name)
    }

    function getPokemon(event){
        setName(event.target.value)
    }
    
    return(
        <div>
            <label htmlFor="input"></label>
            <input
                id="input"
                type="text"
                onChange={getPokemon}
            />
            <button onClick={ setDataInput }>Enviar</button>
        </div>
    )
}

export default Input
