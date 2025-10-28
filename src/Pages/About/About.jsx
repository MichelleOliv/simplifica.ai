import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import michelleImg from '../../assets/michelleImg.png'
import brunaImg from '../../assets/brunaImg.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-top">
                <div className='fotos'>
                    <div className='foto'>
                        <img src={michelleImg} alt="" />
                        <div className="caption">
                            <h1>Michelle Gonçalves</h1>
                            <p>23 anos, nascida em Betim, Minas gerais. Atualmente, cursa Análise e Desenvolvimento de Sistemas (ADS) no IFSUL, desde 2023, quando descobriu sua paixão pela área da tecnologia. 
                            </p>
                            <p>Trabalha há um ano e meio na SAP como engenheira de suporte técnico, desempenhando um papel crucial na resolução de desafios tecnológicos e contribuindo para a inovação dentro da empresa. 
                            </p>
                            <p>Em seu tempo livre, Michelle gosta de se dedicar a jogos de FPS, assistir doramas e fazer crochê.</p>
                        </div>
                    </div>
                    <div className='foto'>
                        <img src={brunaImg} alt="" />
                        <div className="caption">
                            <h1>Bruna Motta</h1>
                            <p>breve apresentação</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-down">
                <div className='about-left'>
                    <img src={about_img} alt="" className='about-img' />
                </div>
                <div className='about-right'>
                    <h1>De onde surgiu?</h1>
                    <h2>SOBRE O SIMPLIFICA.AI</h2>
                    <p>O projeto nasceu a partir de um Trabalho de Conclusão de Curso (TCC) e tem como objetivo principal auxiliar os professores a adaptarem materiais didáticos para a técnica de Leitura Fácil com a utilização de Inteligência Artificial. Essa iniciativa é voltada para promover a acessibilidade e a igualdade de oportunidades nos cursos técnicos de ensino superior do Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense (IFSUL).</p>
                    <p>A Leitura Fácil é uma abordagem que busca adaptar textos para torná-los mais compreensíveis, mantendo as informações essenciais, mas usando linguagem clara e direta. Com o aumento da diversidade nas salas de aula e a presença de estudantes com diferentes necessidades de aprendizagem, essa técnica se mostra fundamental para garantir que todos possam ter acesso ao conteúdo de maneira igualitária.</p>
                    <p>O projeto não apenas oferece suporte para que os educadores possam criar materiais didáticos mais acessíveis, mas também visa conscientizar sobre a importância da inclusão e do respeito às diferenças no ambiente acadêmico. Ao adotar estratégias de Leitura Fácil, busca-se não apenas melhorar a compreensão dos estudantes, mas também incentivar uma educação mais inclusiva e democrática.</p>
                </div>
            </div>
        </div>
    )
}

export default About
