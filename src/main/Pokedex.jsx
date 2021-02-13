import React, { useState } from 'react'
import Input from '../components/Input'
import Pokemon from '../components/Pokemon'
import Logo from '../components/Logo'

import './Pokedex.css'

const Pokedex = props => {

    const [ name, setName ] = useState('')

    function getData(name){
        setName(name)
    }
    
    return(
        <main id="main-container">
            <Logo />
            <Input getDataInput={getData}></Input>
            <Pokemon sendPokemonName={name}></Pokemon>
        </main>
    )
}

export default Pokedex