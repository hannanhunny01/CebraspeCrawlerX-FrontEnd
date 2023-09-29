import React, { useState } from 'react';
import './signup.css';
import Navbar from '../../components/Navbar/navbar';
import FirstSection from '../../components/register/registerFirst/firstSection';
import SecondSection from '../../components/register/registerSecond/secondSection';
import ThirdSection from '../../components/register/registerthird/thirdSection';
import { useNavigate } from 'react-router-dom';


import {isValidNumber,isValidEmail,isPasswordValid }from '../../components/Validators/validators';

import Modal from '../../components/modal/modal'
import buttonStyles from '../../components/myItems/styles';

const SignUpPage = () => {
  const [name ,setName] = useState('');
  const [email ,setEmail] = useState('');
  const [confirmEmail ,setConfirmEmail] = useState("");
  const [password,setPassword] = useState('');
  const [rePassword,setRePassword] = useState('');
  const navigate = useNavigate();
  const [code,setCode]= useState("");
  const [timer,setTimer] = useState(false);
  const [sendFirstTime , setSendFirstTime] = useState(true)

  const [disable,setDisable] = useState(false);

  const [message ,setMessage] = useState("")
  const [isError,setIsError] = useState(false)
  
  const [isErrorPassword,setIsErrorPassword] =useState(false);
  const [messagePassword ,setMessagePassword] = useState("");

  //modal part
  const [ openModal,setOpenModal] = useState(false);
  const [codeMessage,setCodeMessage] = useState("")


  const components =[<FirstSection name={name} email={email} phone={confirmEmail} setEmail={setEmail} setName={setName} setPhone={setConfirmEmail}  message={message}  isError={isError} setIsError={setIsError} />,
                     <SecondSection password={password} setPassword={setPassword} rePassword={rePassword} setRePassword={setRePassword} isErrorPassword={isErrorPassword} message={messagePassword}/>,
                     <ThirdSection phone={email} code={code} setCode={setCode} timer={timer} setTimer={setTimer} />]
  const [currPage,setCurrPage] = useState(0);

  const checkEmail = async function(){   
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email: email        })
      };

      try {
        const response = await fetch("http://localhost:3000/api/user/checkUser", requestOptions);
        
        if (response.ok) {

          setCurrPage(currPage+1)
          setIsError(false)
          
        }else{
          const data = await response.json()
          setIsError(true)
          setMessage(data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }}

    const checkPassword = ()=>{
      try{
        if(isPasswordValid(password)){
        if (password == rePassword){
          setIsErrorPassword(false);

          setCurrPage(currPage+1);

    
              sendCode();
           
                   
        }else{
          setIsErrorPassword(true);
          setMessagePassword("Senha e confirmar Senha deveria ser igual")
        }}else{
          setIsErrorPassword(true);
          setMessagePassword("Senha deveria ter no minimo 8 digitos")

        }


      }catch(error){
        console.log(error)
        }

        }


      const sendCode = async()=>{
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            contactMethod:"email",
            contactValue: email
          })
        };
  
        try {
          const response = await fetch("http://localhost:3000/api/user/sendCode", requestOptions);
          const data = await response.json();
          setCodeMessage(data.message);
          setOpenModal(true);
          setTimeout(()=>{setOpenModal(false);},3000)




         
        }
          catch(error){
            console.log(error)
          }

      }

      const verifyAndRegister = async ()=>{

        setDisable(true);
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            username:name,
            email:email,
            password:password,
            code:code
          })
        };
        try {
          const response = await fetch("http://localhost:3000/api/user/register", requestOptions);
          const data = await response.json()
          setCodeMessage(data.message)
          setOpenModal(true);
          setTimeout(()=>{setOpenModal(false)},3000)


          if (response.ok) {
            setTimeout(()=>{  navigate('/login')},3000)

            
          
          
          }
        }
          
          catch(error){
            console.log(error)
          }


         setTimeout(()=>{setDisable(false);},3000) 

          

        
      }
  

  
  return (
    <div className='main-signup'>
     <Navbar/>
     <div className='signup-container'>
     <div className='signup-card'>
     <h2>Registration</h2>
         
         {components[currPage]}

    <div>

    {  currPage>0?<button className="login-button" onClick={()=>{setCurrPage(currPage-1)}}>
            Voltar
          </button> :false}
          <button className="login-button"  disabled={ disable} onClick={()=>{
            if (currPage ==0){

              if (email === confirmEmail ){

                if (isValidEmail(email)){
                  checkEmail()
                 }else{
                  setIsError(true)
                  setMessage("PorFavor Digite email valido")

    
                 }

              }else{
                setIsError(true)

                setMessage("Email e Confirmar Email nao sao igauais")
              }

           


              
            }
            if (currPage ==1){
             
               checkPassword()
            }
            if(currPage==2){
               verifyAndRegister();
            }
            
            }} >
            {currPage<=1?"Next":"confirm"}
          </button>
         
          <Modal open={openModal} onClose={()=>setOpenModal(false)}>
            <div style={{ display:"flex",justifyContent:"center"}}>
          <div className='div-modal-notifications'>
          <h2>Mesagem</h2>
          <br />
          <p>{codeMessage}</p>
        
          <div  style={buttonStyles.buttonContainer}> 

              <button onClick={()=>setOpenModal(false)} style={buttonStyles.noButton}>Fechar</button>
              
              </div>
          </div>
          </div>
        </Modal>
          
          </div>




     </div>
    </div>
    </div>
  );
};

export default SignUpPage;
