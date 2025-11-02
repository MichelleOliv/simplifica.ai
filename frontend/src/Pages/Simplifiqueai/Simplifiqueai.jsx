import React from 'react'
import './Simplifiqueai.css'

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
