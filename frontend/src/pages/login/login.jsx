import React, { useState ,useContext, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import facebook from "../../assets/icons/facebookicon.png"
import google from "../../assets/icons/googleicon.png"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { isValidEmail,isPasswordValid } from "../../components/Validators/validators";
import Modal from "../../components/modal/modal";
import buttonStyles from "../../components/myItems/styles";

const LoginPage = () => {
  //
  const [token, setToken] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isError,setIsError] = useState(false);


  const [openModal,setOpenModal]= useState(false);
  const [message,setMessage]= useState("");
  const [disable,setDisable] = useState(false);
  const navigate = useNavigate()




  useEffect(() => {
    if (token) {
navigate('/items')    } 
  }, [token]);

   
 const postData = async ()=>{
  setDisable(true)

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      email: email,
      password: password
    })
  };

   try{
    console.log(`${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/user/login`);

    const response = await fetch(`${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/user/login`, requestOptions);
    const data = await response.json()
    setOpenModal(true);
    setMessage(data.message)
   

    if (response.ok){
      setTimeout(()=>{
        setOpenModal(false);
        setToken(data.token);
        navigate('/items')
      },2000)

     
     
     

    }
    setTimeout(()=>{ setDisable(false)
    },3000)


   }
   catch(error){
    console.log(error)
   }
 }
 
 
  

  
   



  return (
    <div className="main-login">
      <Navbar />

      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <div className="form-group">
            <label className="label" htmlFor="email-login">
              Email
            </label>
            <input
              className="input-field"
              placeholder="Enter your email"
              type="email"
              id="email-login"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="senha-login">
              Password
            </label>
            <input
              className="input-field"
              placeholder="Enter your password"
              type="password"
              id="senha-login"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          {isError &&  

              <div  style={{color:"red" ,textAlign:"center"}}>
           <span>{errorMessage}</span>
            </div>
}

          <button className="login-button"  disabled={disable} onClick={
            ()=>{

              if(isValidEmail(email)){
                if(isPasswordValid(password)){

                 setIsError(false)
                  postData();

                }else{
                  setIsError(true);
                  setErrorMessage("Senha deve ter no minimo 8 digitos")



                }
              }else{
                setIsError(true);
                  setErrorMessage("Esse Email nao esta valido")


              }
              }
              
              }>
            Login
          </button>
          <div className="login-forgotpassword">   <Link to="/forgotpassword"> Esqueceu Senha?</Link></div>
           <div style={{'textAlign':'center','fontSize':'15px'}} >Ou Entrar usando</div>
          <div className="login-icon-container">
            <img
              className="login-icon"
              src={google}
              alt="Google Icon"
              onClick={()=>{
                console.log('hello')
              }}
            />
            <img
              className="login-icon"
              src={facebook}
              alt="Facebook Icon"
            />
          </div>
          <div className="login-signup" style={{'textAlign':'center' ,'fontSize':'15px' ,'color':'black'}}> <Link to='/signup'>Ou Registrar</Link></div>
        </div>
      </div>
       
      <Modal open={openModal} onClose={()=>setOpenModal(false)}>
            <div style={{ display:"flex",justifyContent:"center"}}>
          <div className='div-modal-notifications'>
          <h2>Mesagem</h2>
          <br />
          <p>{message}</p>
        
          <div  style={buttonStyles.buttonContainer}> 

              <button onClick={()=>setOpenModal(false)} style={buttonStyles.noButton}>Fechar</button>
              
              </div>
          </div>
          </div>
        </Modal>
    </div>
  );
};

export default LoginPage;
