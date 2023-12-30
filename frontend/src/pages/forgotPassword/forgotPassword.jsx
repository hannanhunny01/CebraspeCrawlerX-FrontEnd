import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/navbar"
import { useState } from "react"
import './forgotPassword.css'
import { isValidEmail } from "../../components/Validators/validators"
import Modal from "../../components/modal/modal"
import buttonStyles from "../../components/myItems/styles"
export default function ForgotPassword (){

   const [email,setEmail] = useState("") 
   const [errorMessage,setErrorMessage] = useState(false);

   const [openModal,setOpenModal] = useState(false);
   const [message,setMessage]=useState("");

   const [disable,setDisable] = useState(false);


   const resetPassword = async ()=>{
    setDisable(true)
    setErrorMessage(false)

    const requestOptions ={

        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            email:email
        })
    }

    const response = await fetch(`${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/user/forgotPassword`,requestOptions)
    const data = await response.json()

    setOpenModal(true);
    setMessage(data.message);
    setDisable(false);
   }

    return (

        <div className="main-login">
        <Navbar />
  
        <div className="ForgotPassword-container">
          <div className="ForgotPassword-card">
            <h2>Esqueceu sua Senha?</h2>
            <div className="ForgotPassword-form-group">
              <label className="label" htmlFor="email-login">
                Email
              </label>
              <input
               
                placeholder="Enter your email"
                type="email"
                id="email-login"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            {errorMessage  &&

<div  style={{color:"red" ,textAlign:"center"}}>
<span>Email Invalido</span>
</div>
    
}
         
            <button className="forgotPassword-button"  disabled={disable} onClick={()=>{
                 
                if(isValidEmail(email)){
                    setErrorMessage(false)
                    resetPassword()
                }else{
                    setErrorMessage(true);
                }
            }}>
              Manda Codigo
            </button>

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
        </div>
        
      </div>
    )
}