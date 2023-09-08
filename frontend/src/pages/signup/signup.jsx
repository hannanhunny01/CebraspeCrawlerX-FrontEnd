import React, { useState } from 'react';
import './signup.css';
import Navbar from '../../components/Navbar/navbar';
import FirstSection from '../../components/register/registerFirst/firstSection';
import SecondSection from '../../components/register/registerSecond/secondSection';
import ThirdSection from '../../components/register/registerthird/thirdSection';
import { useNavigate } from 'react-router-dom';
const SignUpPage = () => {
  const [name ,setName] = useState('');
  const [email ,setEmail] = useState('');
  const [phone ,setPhone] = useState("");
  const [password,setPassword] = useState('');
  const [rePassword,setRePassword] = useState('');
  const navigate = useNavigate();
  const [code,setCode]= useState("");
  const [timer,setTimer] = useState(false);
  const [sendFirstTime , setSendFirstTime] = useState(true)


  const components =[<FirstSection name={name} email={email} phone={phone} setEmail={setEmail} setName={setName} setPhone={setPhone} />,
                     <SecondSection password={password} setPassword={setPassword} rePassword={rePassword} setRePassword={setRePassword}/>,
                     <ThirdSection phone={phone} code={code} setCode={setCode} timer={timer} setTimer={setTimer} />]
  const [currPage,setCurrPage] = useState(0);

  const checkEmail = async function(){   
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email: email,
          phone: phone
        })
      };

      try {
        const response = await fetch("http://localhost:3000/api/user/checkUser", requestOptions);
        
        if (response.ok) {

          setCurrPage(currPage+1)
          
        }else{
          const data = await response.json()
          alert(data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }}

    const checkPassword = ()=>{
      try{
        if (password == rePassword){
         
          setCurrPage(currPage+1);

    
              sendCode();
           
                   
          console.log("hhello")
        }else{
          alert("password not same")
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
            phone: phone
          })
        };
  
        try {
          const response = await fetch("http://localhost:3000/api/user/sendCode", requestOptions);
          console.log(response.body.message);
          if (response.ok) {alert("code Created SucessFully")}
           setTimer(true)    
        }
          catch(error){
            console.log(error)
          }

      }

      const verifyAndRegister = async ()=>{
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            username:name,
            email:email,
            password:password,
            phone:phone,
            code:code
          })
        };
        try {
          const response = await fetch("http://localhost:3000/api/user/register", requestOptions);
          const message = await response.json()
          console.log(message);
          if (response.ok) {alert(message.message )
            navigate('/login')
          
          }else{alert(message.message)}}
          
          catch(error){
            console.log(error)
          }

        
      }
  

  
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
          <button className="login-button" onClick={()=>{
            if (currPage ==0){
              checkEmail()
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
          
          </div>




     </div>
    </div>
    </div>
  );
};

export default SignUpPage;
