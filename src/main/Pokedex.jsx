import React, { useState } from 'react'
import Input from '../components/Input'
import Pokemon from '../components/Pokemon'
import './Pokedex.css'


const Pokedex = props => {

    const [ name, setName ] = useState('')

    function getData(name){
        setName(name)
    }

    return(
        <main>
            <h1>Pokedex</h1>
            <h1>Nome: { name }</h1>
            <Input quandoClicar={getData}></Input>
            <Pokemon></Pokemon>
        </main>
    )
}

export default Pokedex