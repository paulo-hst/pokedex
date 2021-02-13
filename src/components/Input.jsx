import React, { useState } from 'react'
import './Input.css'

const Input = props => {

    const [ name, setName ] = useState('')

    function getPokemon(event){
        setName(event.target.value)
    }

    function setDataInput(){
        props.getDataInput(name)
    }

    
    return(
        <div id="inputPokemon">
            <label htmlFor="input"></label>
            <input
                id="input"
                type="text"
                placeholder="Digite o nome do pokemon"
                onChange={getPokemon}
        
            />
            <button onClick={ setDataInput }>Pesquisar</button>
        </div>
    )
}

export default Input
