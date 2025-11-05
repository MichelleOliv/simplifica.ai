import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import michelleImg from '../../assets/michelleImg.png'
import brunaImg from '../../assets/brunaImg.png'
import icone from '../../assets/icone.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-top">
                <div className='fotos'>
                    <div className='foto'>
                        <img src={michelleImg} alt="" />
                        <div className="caption">
                            <h1>Michelle Gonçalves</h1>
                            <p>Michelle cursa Análise e Desenvolvimento de Sistemas (ADS) no IFSUL, desde 2023 e trabalha há um ano e meio na SAP como engenheira de suporte técnico.
                            </p>
                            <p>Em seu tempo livre, ela gosta de se dedicar a jogos de FPS, assistir doramas e fazer crochê.</p>
                        </div>
                    </div>
                    <div className='foto'>
                        <img src={brunaImg} alt="" />
                        <div className="caption">
                            <h1>Bruna Motta</h1>
                            <p>Bruna também cursa Análise e Desenvolvimento de Sistemas (ADS) no IFSUL, desde 2023 e está há 10 meses no Sicredi como estagiária de infraestrutura de software.
                            </p>
                            <p>Em seu tempo livre, ela gosta de assistir séries e sair com a família e amigos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-down">
                <div className='about-left'>
                    <img src={icone} alt="" className='icone' />
                </div>
                <div className='about-right'>
                    <h1>De onde surgiu?</h1>
                    <h2>SOBRE O SIMPLIFICA.AI</h2>
                    <p>O projeto, originado de um TCC, tem como objetivo auxiliar professores na adaptação de materiais didáticos com a técnica de Leitura Fácil por meio de Inteligência Artificial, promovendo acessibilidade e inclusão nos cursos técnicos do IFSUL.</p>
                    <p>A Leitura Fácil torna os textos mais claros e compreensíveis, atendendo à diversidade de alunos e suas diferentes necessidades de aprendizagem. Além de facilitar a criação de materiais acessíveis, o projeto busca conscientizar sobre a importância da inclusão e do respeito às diferenças, contribuindo para uma educação mais igualitária e democrática</p>
                </div>
            </div>
        </div>
    )
}

export default About
