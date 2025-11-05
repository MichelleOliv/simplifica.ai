import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to='hero-container' smooth={true} offset={0} duration={500}>Início</Link></li>
            <li><Link to='simplifiqueai' smooth={true} offset={-180} duration={500} className='btn'>Simplifique</Link></li>
            <li><Link to='about' smooth={true} offset={-200} duration={500}>Sobre nós</Link></li>
            <li><Link to='contact' smooth={true} offset={-300} duration={500}>Contato</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
