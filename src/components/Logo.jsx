import React from 'react'
import './Logo.css'
import logo from '../Images/logo.svg'

const Logo = props => {
    return(
        <div id="logo-pokedex">
            <img src={logo} alt="Logo Pokedex" srcSet=""/>
        </div>
    )
}

export default Logo