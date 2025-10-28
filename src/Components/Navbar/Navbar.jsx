import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Início</Link></li>
            <li><Link to='about' smooth={true} offset={-200} duration={500}>Sobre nós</Link></li>
            <li><Link to='simplifique' smooth={true} offset={-150} duration={500}>Simplifique</Link></li>
            <li><Link to='feedbacks' smooth={true} offset={-260} duration={500}>Feedbacks</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'> Nos contate</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
