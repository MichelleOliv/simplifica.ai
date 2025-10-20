import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Feedbacks from './Components/Feedbacks/Feedbacks'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Quem somos nós?' title='Saiba quem está por trás da plataforma'/>
        <About/>
        <Title subTitle='Feedbacks' title='O que os usuários estão dizendo'/>
        <Feedbacks/>
        <Title subTitle='Nos Contate' title='Entre em contato'/>
        
      </div>
    </div>
  )
}

export default App
