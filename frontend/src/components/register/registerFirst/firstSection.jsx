import React from 'react';

const FirstSection = ({ nome, email, celular, setNome, setEmail, setCelular }) => {
  return (
    <div className="first-section">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Celular"
        value={celular}
        onChange={(e) => setCelular(e.target.value)}
      />
    </div>
  );
};

export default FirstSection;
