import React, { useState } from 'react'
import DOMPurify from 'dompurify'
import './Simplifiqueai.css'

const Simplifiqueai = () => {
    const [texto, setTexto] = useState('')
    const [resposta, setResposta] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch('http://localhost:8000/api/adaptor/adapt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    original_text: texto,
                    user_observation: ''
                })
            })

            if (response.ok) {
                const data = await response.json();
                console.log('Resposta:', data);
                // Sanitiza e define o HTML formatado
                const sanitizedHtml = DOMPurify.sanitize(data.adapted_text);
                setResposta(sanitizedHtml);
            } else {
                const errorData = await response.json().catch(e => ({ error: 'Erro desconhecido' }));
                console.error('Erro ao enviar texto:', errorData);
            }
        } catch (error) {
            console.error('Erro:', error)
        }
    }

    return (
        <div className='simplifiqueai'>
            <div className='chat'>
                <form className='texto' onSubmit={handleSubmit}>
                    <textarea 
                        name="message" 
                        rows="6" 
                        placeholder='Cole aqui o texto que você deseja adaptar.' 
                        required
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                    />
                    <button type='submit' className='dark-btn'>Enviar</button>
                </form>
            </div>
            {resposta && (
                <div className='texto'>
                    <div 
                        className="response-box"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(resposta)
                        }}
                        />
                </div>
            )}
        </div>
    )
}

export default Simplifiqueai;
