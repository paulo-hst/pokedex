import React from 'react'
import axios from 'axios'

const Pokemon = props => {
    
    const URL = 'https://pokeapi.co/api/v2/'
    const pokemonName = 'pikachu'

    async function find(){

        const pokemons = []
        
        const api = axios.create({ baseURL: URL })
        const response = await api.get(`/pokemon/${pokemonName}`)
    
    
        const type = response.data.types[0].type.name
        const { id, name, height, weight } = response.data

        pokemons.push({
            id,
            name,
            height, 
            weight, 
            type, 
        })
    }

    find()

    return(
        <section>
            <h2>{  }</h2>
            <p>Tipo: {  }</p>
            <p>Peso: { }</p>
            <p>Altura: { }</p>
            <p>Habilidades: { }</p>
        </section>
    )
}

export default Pokemon
