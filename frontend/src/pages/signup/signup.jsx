import React, { useState } from 'react';
import './signup.css';
import Navbar from '../../components/Navbar/navbar';
import FirstSection from '../../components/register/registerFirst/firstSection';
import SecondSection from '../../components/register/registerSecond/secondSection';
import ThirdSection from '../../components/register/registerthird/thirdSection';

const SignUpPage = () => {
  const [name ,setName] = useState('');
  const [email ,setEmail] = useState('');
  const [phone ,setPhone] = useState(0);
  const [password,setPassword] = useState('');
  const [code,setCode]= useState();

  const components =[<FirstSection/>,<SecondSection/>,<ThirdSection/>]
  const [currPage,setCurrPage] = useState(0);
  return (
    <div className='main-signup'>
     <Navbar/>
     <div className='signup-container'>
     <div className='signup-card'>
     <h2>Registrar</h2>
         
         {components[currPage]}

    <div>

    {  currPage>0?<button className="login-button" onClick={()=>{setCurrPage(currPage-1)}}>
            Voltar
          </button> :false}
          <button className="login-button" onClick={()=>{setCurrPage(currPage+1)}} >
            {currPage<=1?"Next":"confirm"}
          </button>
          
          </div>




     </div>
    </div>
    </div>
  );
};

export default SignUpPage;
