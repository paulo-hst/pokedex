import React, { useState } from 'react'
import Input from '../components/Input'
import Pokemon from '../components/Pokemon'
import './Pokedex.css'

const Pokedex = props => {

    return(
        <main>
            <h1>Pokedex</h1>
            <Input></Input>
            <Pokemon></Pokemon>
        </main>
    )
}

export default Pokedex