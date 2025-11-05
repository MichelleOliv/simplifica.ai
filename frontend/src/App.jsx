import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'
import Footer from './Components/Footer/Footer'
import Hero from './Pages/Hero/Hero'
import About from './Pages/About/About'
import Feedbacks from './Pages/Feedbacks/Feedbacks'
import Contact from './Pages/Contact/Contact'
import Simplifiqueai from './Pages/Simplifiqueai/Simplifiqueai'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Simplifique' title='Adapte o seu material em um estalar de dedos'/>
        <Simplifiqueai/>
        <Title subTitle='Quem somos nós?' title='Saiba quem está por trás da plataforma'/>
        <About/>
        <Title subTitle='Nos contate' title='Entre em contato'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
