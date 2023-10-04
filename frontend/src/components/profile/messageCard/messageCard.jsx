
import './messageCard.css'
import ToggleSwitch from '../../button/toggleSwitch/switch'
import { useState } from 'react'
import CountdownTimer from '../../countDownTimer/countDown';

import Items from './items';

function MessageCard(){
// whatsapp
    const [editNumber,setEditNumber] = useState(false);
    const [sendCodeZap ,setSendCodeZap] = useState(false);
// telegram
const [editTel,setEditTel] = useState(false);
const [sendCodeTel ,setSendCodeTel] = useState(false);
// email
const [editEmail,setEditEmail] = useState(false);
const [sendCodeEmail ,setSendCodeEmail] = useState(false);

    return(
        <div className="messageCard">
        
  
        <div className="messageCard-container">
          <header>Meu Contatos</header>
  
       
        <Items/>

       



  
  
  
      
  
      
        </div>
      </div>
    )
}

export default MessageCard