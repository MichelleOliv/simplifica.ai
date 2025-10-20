import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Início</li>
            <li>Sobre nós</li>
            <li>Simplifique</li>
            <li>Feedbacks</li>
            <li><button className='btn'>Nos contate</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
