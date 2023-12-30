
import { useContext, useState } from 'react'
import './password.css'
import { UserContext } from '../../../Context/userContext'
import Modal from '../../modal/modal';
import buttonStyles from '../../myItems/styles';
import { isPasswordValid } from '../../Validators/validators';

function PasswordCard(){
    const [token] = useContext(UserContext);
    const [password,setPassword] =useState("");
    const [checkPassword,setCheckPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");

    const [isError,setIsError] = useState(false);
    const [messageLocal,setMessageLocal] = useState('');

    const[openModal,setOpenModal] = useState(false);
    const [ message,setMessage] = useState('');

    const [disable,setDisable] = useState(false)
    

    const sendRequest = async()=>{
        setDisable(true)
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


        const response = await fetch(`${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/user/changepassword`,requestOptions)
        const data = await response.json();
        setOpenModal(true);
        setMessage(data.message);
        if (response.ok){
            setPassword("");
            setCheckPassword("");
            setNewPassword("");
            
        }

        setDisable(false)

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
              {isError &&  

                                    <div  style={{color:"red" ,textAlign:"center"}}>
                                    <span>{messageLocal}</span>
                                    </div>
}


            <div  style={{padding:"5px"}}>              <button className='confirm-button' disabled={disable}
                 onClick={
    
                ()=>{
                    if(isPasswordValid(password) && isPasswordValid(newPassword)){
                        if (newPassword=== checkPassword){
                            setIsError(false);
                            sendRequest();
                            
                        }else{
                            setIsError(true)
                            setMessageLocal("Senha e confirmar senha nao sao iguais")
                        }

                    }else{
                        setIsError(true)
                        setMessageLocal("Senha Atual e novo senha deveria ter 8 digitos.")

                    }
                }


                    }>Confirm</button>    </div>

       



  
  
  
      
  
      
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
    )
}

export default PasswordCard