import React from 'react'
import './Hero.css'
import estudoIgualitario3 from '../../assets/estudoIgualitario3.jpg'
import icone from '../../assets/icone.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <div className='hero-left'>
          <div className='hero-text'>
            <img src={icone} alt="icone" />
            <h1>Buscamos um mundo igualitário</h1>
            <p>Pois a educação é para todos</p>
            <button className='button'><Link to='simplifiqueai' smooth={true} offset={-200} duration={500} >Simplifique</Link></button>
          </div>
        </div>
        <div className='hero-right'>
          <img src={estudoIgualitario3} alt="estudoIgualitario3"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
