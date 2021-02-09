import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = props => {    

    // Valor recebido via INPUT: props.sendPokemonName

    const [ id, setId ] = useState('')
    const [ name, setName ] = useState('')
    const [ height, setHeight ] = useState('')
    const [ weight, setWeight ] = useState('')
    const [ type, setType ] = useState('')
    const [ img, setImg ]= useState('')


    const URL = 'https://pokeapi.co/api/v2/'
    const pokemonName = 'entei'

    async function find(){
        
        let api = axios.create({ baseURL: URL })
        let response = await api.get(`/pokemon/${pokemonName}`)

        let { id, name, height, weight } = response.data
        let type = response.data.types[0].type.name

        console.log(response.data.sprites.front_default)

        setId(id)
        setName(name)
        setHeight(height)
        setWeight(weight)
        setType(type)
        setImg(response.data.sprites.front_default)
    }
    find()
    


    return(
        <section>
            <h2>Nome: { name }</h2>
            <p>ID: { id }</p>
            <p>Tipo: { type }</p>
            <p>Peso: { (weight / 10).toFixed(1).replace('.',',') } kg</p>
            <p>Altura: { (height / 10).toFixed(2).replace('.',',')  } m</p>
            <p>Habilidades: { }</p>
            <img src={img} alt=""/>
        </section>
    )
}

export default Pokemon
