import React, { useState } from 'react'
import DOMPurify from 'dompurify'
import './Simplifiqueai.css'
import jsPDF from 'jspdf'

const Simplifiqueai = () => {
    const [texto, setTexto] = useState('')
    const [resposta, setResposta] = useState('')
    const [userObservation, setUserObservation] = useState('')
    const [statusMsg, setStatusMsg] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        setStatusMsg('Enviando...');

        setTimeout(() => {
            setStatusMsg('Adaptando...')
        }, 2500);

        try {
            const response = await fetch('http://localhost:8000/api/adaptor/adapt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    original_text: texto,
                    user_observation: userObservation
                })
            })

            if (response.ok) {
                const data = await response.json();
                console.log('Resposta:', data);
                // Sanitiza e define o HTML formatado
                const sanitizedHtml = DOMPurify.sanitize(data.adapted_text);
                setResposta(sanitizedHtml);
                setStatusMsg('Texto adaptado com sucesso!');
            } else {
                const errorData = await response.json().catch(e => ({ error: 'Erro desconhecido' }));
                console.error('Erro ao enviar texto:', errorData);
                setStatusMsg('Erro ao adaptar o texto');
            }
        } catch (error) {
            console.error('Erro:', error)
            setStatusMsg('Falha na conexão com o servidor')
        }
    }

    const handleDownloadPDF = () => {
    const responseElement = document.querySelector('.response-box')
    if (!responseElement) return

    const plainText = responseElement.innerText || ''

        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4'
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const margin = 15;
        const maxWidth = pageWidth - margin * 2;

        pdf.setFontSize(16);
        pdf.text('Resposta Adaptada:', margin, 20);
        pdf.setFontSize(12);
        pdf.setTextColor(40);

        const lines = pdf.splitTextToSize(plainText, maxWidth);
        pdf.text (lines, margin, 35);

        const dataAtual = new Date().toLocaleDateString('pt-BR').replace(/\//g, '-');
        pdf.save(`resposta_adaptada_${dataAtual}.pdf`);
    }

    return (
        <div className='simplifiqueai'>
            <div className='chat'>
                <form className='form' onSubmit={handleSubmit}>                  
                    <div className='texto'>
                        <label htmlFor="message">Cole aqui o texto que você deseja adaptar:</label>
                        <textarea 
                            name="message" 
                            rows="6" 
                            placeholder='Digite ou cole o texto aqui...' 
                            required
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                        />
                    </div>
                    <div className='observacao'>
                        <label htmlFor="observation">Case queira, adicione observações adicionais:</label>
                        <textarea
                            id="observation"
                            name="observation"
                            rows="3"
                            placeholder='Ex: Retorne o texto em letras maiúsculas.'
                            value={userObservation}
                            onChange={(e) => setUserObservation(e.target.value)}
                        />
                    </div>
                    {statusMsg && (
                        <p className='status-msg'>{statusMsg}</p>
                    )}
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
                    <button className='dark-btn-pdf' onClick={handleDownloadPDF}>Baixar PDF</button>
                </div>
            )}
        </div>
    )
}

export default Simplifiqueai;
