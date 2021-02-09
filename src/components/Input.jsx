import React, { useState } from 'react'

const Input = props => {

    const [ name, setName ] = useState('')

    function setDataInput(){
        props.quandoClicar(name)
    }

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
            <button onClick={ setDataInput }>Enviar</button>
        </div>
    )
}

export default Input
