import React from 'react'
import './Logo.css'
import logo from '../Images/logo.svg'

const Logo = props => {
    return(
        <div>
            <img src={logo} alt="Logo Pokedex" srcset=""/>
        </div>
    )
}

export default Logo