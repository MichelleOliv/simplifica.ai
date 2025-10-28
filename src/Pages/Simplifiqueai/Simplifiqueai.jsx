import React from 'react'
import './Simplifiqueai.css'
import white_arrow from '../../assets/white-arrow.png'

const Simplifiqueai = () => {
    return (
        <div className='simplifiqueai'>
            <div className='chat'>
                <form>
                    <textarea name="message" rows="6" placeholder='Escreva sua mensagem' required></textarea>
                    <button type='submit' className='dark-btn'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Simplifiqueai;
