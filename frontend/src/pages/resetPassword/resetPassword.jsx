import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/navbar"
import { useState } from "react"
import './resetPassword.css'
import { isPasswordValid } from "../../components/Validators/validators"
export default function ResetPassword (){

   const [password,setPassword] = useState(""); 
   const [confirmPassword,setConfirmPassword] = useState("");
   const [errorMessage,setErrorMessage]= useState(false);
   const [message,setMessage] = useState('');
   const {id} = useParams();
   const navigate = useNavigate();
 
   const resetPassword = async ()=>{

    const requestOptions ={

        method:"PATCH",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            password:password
        })
    }

    const response = await fetch(`http://localhost:3000/api/user/resetPassword/${id}`,requestOptions)
    const data = await response.json()

    if (response.ok){
        alert(data.message)
        navigate('/login')
    }else{
        alert(data.message)
    }
   
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
         
            <button className="resetPassword-button" onClick={()=>{

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

           
          
         
          </div>
        </div>
      </div>
    )
}