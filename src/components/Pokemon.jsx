import React, { useState, useEffect } from 'react'
import './Pokemon.css'
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

    useEffect(() => {
        if(props.sendPokemonName !== ''){
            findPokemon(props.sendPokemonName.toLowerCase())
        }
    }, [props.sendPokemonName])

    function showPokemonData(){
        const data = document.querySelector('#pokemon-data')  
        data.style.display = 'block'  
    }

    async function findPokemon(pokemonName){
        

        try {

            let response = await api.get(`/pokemon/${pokemonName}`)

            let { id, name, height, weight, sprites: { front_default } } = response.data
            let type = response.data.types[0].type.name
            let ability = response.data.moves.slice(0,50).map(item => ' ' + item.move.name).toString()
            
            setId(id)
            setName(name)
            setHeight(height)
            setWeight(weight)
            setType(type)
            setImg(front_default)
            setAbility(ability) 

            showPokemonData()           

        } catch (error) {
            alert('Pokemon não encontrado!')
        }
    }

    return(
        <section id="pokemon-data">
            <img src={img} alt=""/>
            <h2>{ name }</h2>
            {/* <p>ID: { id }</p> */}
            <p><strong>Tipo:</strong> { type }</p>
            <p><strong>Peso:</strong> { (weight / 10).toFixed(1).replace('.',',') } kg</p>
            <p><strong>Altura:</strong> { (height / 10).toFixed(2).replace('.',',')  } m</p>
            <p><strong>Habilidades:</strong> { ability }</p>
        </section>
    )
}

export default Pokemon
