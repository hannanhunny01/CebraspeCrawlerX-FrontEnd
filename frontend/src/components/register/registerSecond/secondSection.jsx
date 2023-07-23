import React from 'react';

const SecondSection = ({ senha, reSenha, setSenha, setReSenha }) => {
  return (
    <div className="second-section">
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <input
        type="password"
        placeholder="Reescreve Senha"
        value={reSenha}
        onChange={(e) => setReSenha(e.target.value)}
      />
    </div>
  );
};

export default SecondSection;
