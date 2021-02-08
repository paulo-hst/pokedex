import React, { useState } from 'react'

const Input = props => {

    const [ name, setName ] = useState('')

    function getPokemon(event){
        const pokemonName = event.target.value
        setName(pokemonName)
    }
    
    return(
        <div>
            <label htmlFor="input"></label>
            <input
                id="input"
                type="text"
                onChange={getPokemon}
            />
            <button onClick={() => console.log('teste')}>Enviar</button>
            <span>{name}</span>
        </div>
    )
}

export default Input
