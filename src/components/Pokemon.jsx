import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'https://pokeapi.co/api/v2/'
const api = axios.create({ baseURL: URL })

const Pokemon = props => {

    const [ id, setId ] = useState('')
    const [ name, setName ] = useState('')
    const [ height, setHeight ] = useState('')
    const [ weight, setWeight ] = useState('')
    const [ type, setType ] = useState('')
    const [ ability, setAbility ] = useState('')
    const [ img, setImg ]= useState('')

    // if(props.sendPokemonName !== ''){
    //     findPokemon(props.sendPokemonName.toLowerCase())
    // }

    useEffect(() => {
        if(props.sendPokemonName !== ''){
            findPokemon(props.sendPokemonName.toLowerCase())
        }
    }, [props.sendPokemonName])

    async function findPokemon(pokemonName){        
        try {
            let response = await api.get(`/pokemon/${pokemonName}`)

            let { id, name, height, weight, sprites: { front_default } } = response.data
            let type = response.data.types[0].type.name
            let ability = response.data.moves.slice(0,50).map(item => ' ' + item.move.name).toString()

            console.log(ability)
            
            setId(id)
            setName(name)
            setHeight(height)
            setWeight(weight)
            setType(type)
            setImg(front_default)
            setAbility(ability)            

        } catch (error) {
            alert('Pokemon não encontrado!')
        }
    }

    return(
        <section>
            <h2>Nome: { name }</h2>
            <p>ID: { id }</p>
            <p>Tipo: { type }</p>
            <p>Peso: { (weight / 10).toFixed(1).replace('.',',') } kg</p>
            <p>Altura: { (height / 10).toFixed(2).replace('.',',')  } m</p>
            <p>Habilidades: { ability }</p>
            <img src={img} alt=""/>
        </section>
    )
}

export default Pokemon
