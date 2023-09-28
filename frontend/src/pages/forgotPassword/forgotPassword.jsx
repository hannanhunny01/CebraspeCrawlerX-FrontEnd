import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/navbar"
import { useState } from "react"
import './forgotPassword.css'
import { isValidEmail } from "../../components/Validators/validators"
export default function ForgotPassword (){

   const [email,setEmail] = useState("") 
   const [errorMessage,setErrorMessage] = useState(false);


   const resetPassword = async ()=>{

    const requestOptions ={

        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            email:email
        })
    }

    const response = await fetch("http://localhost:3000/api/user/forgotPassword",requestOptions)
    const data = await response.json()
    alert(data.message)
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
         
            <button className="forgotPassword-button" onClick={()=>{

                if(isValidEmail(email)){
                    setErrorMessage(false)
                    resetPassword()
                }else{
                    setErrorMessage(true);
                }
            }}>
              Manda Codigo
            </button>

           
          
         
          </div>
        </div>
      </div>
    )
}