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

        let plainText = responseElement.innerText || ''
        
         plainText = plainText
        .replace(/<\/h[1-6]>/g, '\n\n')   // quebra após títulos
        .replace(/<\/p>/g, '\n\n')        // quebra após parágrafos
        .replace(/<br\s*\/?>/g, '\n')     // mantém <br> como quebra de linha
        .replace(/<[^>]+>/g, '')          // remove o resto das tags
        .replace(/\n{3,}/g, '\n\n')       // reduz múltiplas quebras a apenas uma dupla
        .trim();

        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4'
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 15;
        const maxWidth = pageWidth - margin * 2;

        pdf.setFontSize(16);
        pdf.setTextColor(40);

        const lineHeight = 8; // espaçamento entre linhas
        const lines = pdf.splitTextToSize(plainText, maxWidth);

        let y = 35; // posição inicial vertical

        lines.forEach((line) => {
            if (y + lineHeight > pageHeight - margin) {
                pdf.addPage();
                y = margin + 10; // nova posição no topo da página
            }
            pdf.text(line, margin, y);
            y += lineHeight;
        });

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
            {resposta && (
                <div className='texto'>
                    <div 
                        className="response-box"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(resposta)
                        }}
                        />
                    <button type='button' className='dark-btn-pdf' onClick={handleDownloadPDF}>Baixar PDF</button>
                </div>
            )}
            </form>                
        </div>
        </div>
    )
}

export default Simplifiqueai;
