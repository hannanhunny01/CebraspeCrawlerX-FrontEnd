import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/navbar"
import { useState } from "react"
import './resetPassword.css'
import { isPasswordValid } from "../../components/Validators/validators"

import Modal from "../../components/modal/modal"
import buttonStyles from "../../components/myItems/styles"
export default function ResetPassword (){

   const [password,setPassword] = useState(""); 
   const [confirmPassword,setConfirmPassword] = useState("");
   const [errorMessage,setErrorMessage]= useState(false);
   const [message,setMessage] = useState('');
   const {id} = useParams();
   const navigate = useNavigate();

   const[messageServer,setMessageServer] = useState('')


   const [openModal,setOpenModal] =useState(false);

   const [disable,setDisable] = useState(false)
 
   const resetPassword = async ()=>{
    setDisable(true);

    const requestOptions ={

        method:"PATCH",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            password:password
        })
    }

    const response = await fetch(`${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/user/resetPassword/${id}`,requestOptions)
    const data = await response.json()
    setOpenModal(true)
    setMessageServer(data.message)


    if (response.ok){
      setTimeout(()=>{
        setOpenModal(false)
        navigate('/login')

      },3000)
    }
    setDisable(false)
   
   }

    return (

        <div className="main-resetPassword">
        <Navbar />
  
        <div className="resetPassword-container">
          <div className="resetPassword-card">
            <h2>Define Novo Senha</h2>
            <div className="resetPassword-form-group">
              <label className="label" htmlFor="email-login">
                Senha
              </label>
              <input
               
                placeholder="Enter your email"
                type="password"
                id="email-login"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div className="resetPassword-form-group">
              <label className="label" htmlFor="email-login">
                Confirmar Senha
              </label>
              <input
               
                placeholder="Enter your email"
                type="password"
                id="email-login"
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
              />
            </div>
            {errorMessage  &&

                  <div  style={{color:"red" ,textAlign:"center"}}>
                 <span>{message}</span>
                </div>
    
}
         
            <button className="resetPassword-button"  disabled={disable} onClick={()=>{

                if(isPasswordValid(password)){
                    if(password === confirmPassword){
                        resetPassword();
                    }else{
                        setErrorMessage(true);
                        setMessage("Senha e Confirmar Senha nao sao iguais")
                    }

                }else{


                    setErrorMessage(true);
                    setMessage("Senha deveria ter no minimo 8 digitos")
                }


            }}>
              Manda Codigo
            </button>


    <Modal open={openModal} onClose={()=>setOpenModal(false)}>
            <div style={{ display:"flex",justifyContent:"center"}}>
          <div className='div-modal-notifications'>
          <h2>Mesagem</h2>
          <br />
          <p>{messageServer}</p>
        
          <div  style={buttonStyles.buttonContainer}> 

              <button onClick={()=>setOpenModal(false)} style={buttonStyles.noButton}>Fechar</button>
              
              </div>
          </div>
          </div>
        </Modal>
           
          
         
          </div>
        </div>
      </div>
    )
}