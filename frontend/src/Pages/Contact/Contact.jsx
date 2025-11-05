import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", "440c570e-5e60-42e6-843e-cceeef21bce7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        console.log("Sucesso", data);
        setResult("Email enviado com sucesso!");
        event.target.reset();
    } else {
        console.log("Erro", data);
        setResult(data.message);
    }
  };

    return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Mande-nos uma mensagem <img alt="" /></h3>
        <p>Fique à vontade para nos mandar suas dúvidas, críticas ou sugestões nos contatos abaixo ou preenchendo o formulário ao lado.</p>
        <p>Suas opniões e dúvidas são muito importantes para nós!</p>
        <ul>
            <li><img src={mail_icon} alt="" />michelleoliveira.ss004@academico.ifsul.edu.br</li>
            <li><img src={mail_icon} alt="" />brunamotta.ss001@academico.ifsul.edu.br</li>
            <li><img src={phone_icon} alt="" />+55 (51) 98993-0250</li>
            <li><img src={location_icon} alt="" />Av. Copacabana - Piratini, Sapucaia do Sul<br/> RS, 93216-120</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label htmlFor="">Seu nome</label>
            <input type="text" name='name' placeholder='Coloque seu nome' required/>
            <label htmlFor="">Número de telefone</label>
            <input type="text" name='phone' placeholder='Coloque seu número de telefone' required/>
            <label htmlFor="">Escreva sua mensagem aqui</label>
            <textarea name="message" rows="6" placeholder='Escreva sua mensagem' required></textarea>
            <button type='submit' className='dark-btn'>Enviar</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
