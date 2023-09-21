
import { useContext, useState } from 'react'
import './password.css'
import { UserContext } from '../../../Context/userContext'


function PasswordCard(){
    const [token] = useContext(UserContext);
    const [password,setPassword] =useState("");
    const [checkPassword,setCheckPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");

    const verifyPassword=()=>{
        if(newPassword===checkPassword){
            sendRequest();
        }return false;
    }
    const sendRequest = async()=>{
        const requestOptions ={

             method:"PATCH",
             headers:{
                'Content-Type': 'application/json',
                authorization:`Bearer ${token}`

             },
             body:JSON.stringify({
                password:password,
                newpassword:newPassword
             })
        }


        const response = await fetch("http://localhost:3000/api/user/changepassword",requestOptions)
        const data = await response.json()
        if (response.ok){
            setPassword("");
            setCheckPassword("");
            setNewPassword("");
            alert(data.message)
        }else{
            alert(data.message)
        }
    }
    return(
        <div className="passwordCard">
        
  
        <div className="password-container">
          <header>Redefine Senha</header>
         <h3>Novo Senha</h3>


             <div style={{display:"flex"}}  className='password-div'>
                 
                 <label htmlFor="label-senha"> Senha Atual</label>
                 <input type="password"  onChange={(e)=>setPassword(e.target.value)} value={password} className='label-senha' />
              </div> 
              <div style={{display:"flex"}}  className='password-div'>
                 
                 <label htmlFor="label-senha"> Novo Senha</label>
                 <input type="password"  onChange={(e)=>setNewPassword(e.target.value)} value={newPassword} className='label-senha' />
              </div>   
              <div style={{display:"flex"}}  className='password-div'>
                 
                 <label htmlFor="label-senha"> Re-<br/>Escrevar Senha</label>
                 <input type="password"  onChange={(e)=>setCheckPassword(e.target.value)} value={checkPassword} className='label-senha' />
              </div>      

<div  style={{padding:"5px"}}>              <button className='confirm-button' onClick={verifyPassword}>Confirm</button>    </div>

       



  
  
  
      
  
      
        </div>
      </div>
    )
}

export default PasswordCard