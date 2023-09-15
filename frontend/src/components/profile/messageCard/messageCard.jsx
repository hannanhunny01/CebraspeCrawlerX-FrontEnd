
import './messageCard.css'
import ToggleSwitch from '../../button/toggleSwitch/switch'
import { useState } from 'react'
import CountdownTimer from '../../countDownTimer/countDown';
function MessageCard(){

    const [editNumber,setEditNumber] = useState(false);
    const [sendCode ,setSendCode] = useState(true);
    return(
        <div className="messageCard">
        
  
        <div className="messageCard-container">
          <header>Meu Contatos</header>
  
          <div>
            <h3> Whatsapp</h3>
            <div  className='whastsapp-container'style={{display:"flex",flexDirection:"row"}} >
              <div className='whastsapp-container-input' style={{display:"flex", flexDirection:"column"}}>
                 
                 <label htmlFor="label-numero"> contato</label>
                 <input type="text"  className='label-numero'/>
              </div>

              <div className='whastsapp-container-verified' style={{display:"flex",flexDirection:"column"}} >

                <label htmlFor="notifications-button"  >Notificacoes</label> 
                 <div style={{textAlign:"center"}}>  <ToggleSwitch /> </div>
                
              </div>

              <div>

              <label htmlFor="edit-button"  > Editar</label> 
              <button className='edit-button' onClick={()=>setEditNumber(!editNumber)}>Editar</button>

              </div>
              

            </div>
          </div>
          {editNumber && (
          <div className="send-code-container">
          <input type="text" placeholder='(61) 98625-0932' className="edit-number" />
           <button className="send-code-button" onClick={() => setSendCode(!sendCode)}>
              Send Code
         </button>
         </div>
)}

          {sendCode && 
          
          <div>
            <span>Foi eviada um Codigo no seu whatsapp</span> <br />
            <div style={{display:"flex", justifyContent:"space-evenly" }}>
            <input type="text"   style={{width:"30%"}}/>
            
            <div><span>tempo Restante</span> <CountdownTimer/></div>

            </div>
          </div>
       
          }



  
  
  
      
  
      
        </div>
      </div>
    )
}

export default MessageCard