import React, { useState } from 'react';
import './message.css';
import { isValidEmail } from '../../Validators/validators';
import Modal from '../../modal/modal'; 
import buttonStyles from '../../myItems/styles';

function Message() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setModalMessage('Email inválido');
      setOpenModal(true);
      return;
    }
    if (nome.length < 3) {
      setModalMessage('O nome não pode estar vazio');
      setOpenModal(true);
      return;
    }
    if (mensagem.length < 10) {
      setModalMessage('A mensagem deve ter pelo menos 10 caracteres');
      setOpenModal(true);
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ name:nome, email, message:mensagem }),
    };

    const response = await fetch('http://localhost:3000/api/message', requestOptions);
    const data = await response.json();
    if (response.ok) {
      setNome('');
      setEmail('');
      setMensagem('');
      setModalMessage(data.message);
    }
    setOpenModal(true);

  };

  return (
    <div className="contact-messagecard-container">
      <div className="contact-messagecard-right">
        <div className="contact-messagecard-form">
          <h2>Entre em contato</h2>
          <div className="contact-messagecard-input-group">
            <label>Nome:</label>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>
          <div className="contact-messagecard-input-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="contact-messagecard-input-group">
            <label>Mensagem:</label>
            <textarea
              placeholder="Sua mensagem"
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
            ></textarea>
          </div>
          <button className="contact-messagecard-submit-button" onClick={handleSubmit}>
            Enviar mensagem
          </button>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="div-modal-notifications">
            <h2>Mensagem</h2>
            <br />
            <p>{modalMessage}</p>
            <div style={buttonStyles.buttonContainer}>
              <button onClick={() => setOpenModal(false)} style={buttonStyles.noButton}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Message;
