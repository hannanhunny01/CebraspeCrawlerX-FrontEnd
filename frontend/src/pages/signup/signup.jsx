import React, { useState } from 'react';
import './signup.css';



import FirstSection from '../../components/register/registerFirst/firstSection';
import SecondSection from '../../components/register/registerSecond/secondSection';
const SignUp = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [reSenha, setReSenha] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
  };

  return (
    <div className="sign-up-form">
      <form onSubmit={handleSignUp}>
        <FirstSection
          nome={nome}
          email={email}
          celular={celular}
          setNome={setNome}
          setEmail={setEmail}
          setCelular={setCelular}
        />
        <SecondSection
          senha={senha}
          reSenha={reSenha}
          setSenha={setSenha}
          setReSenha={setReSenha}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
