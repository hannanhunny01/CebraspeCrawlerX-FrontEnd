
import { useContext, useEffect, useState } from 'react';
import './items.css';
import ToggleSwitch from '../../button/toggleSwitch/switch';
import CountdownTimer from '../../countDownTimer/countDown';
import { UserContext } from '../../../Context/userContext'; 
import { ItemContext } from '../../../Context/itemContext';
import Modal from '../../modal/modal';
import buttonStyles from '../../myItems/styles';
import telegramCode from '../../../assets/telegram_code.jpeg'
import telegramToken from '../../../assets/telegram_sendToken.jpeg'
import telegramShowToken from '../../../assets/telegram_showToken.png'
import './telegramModal.css'

function Items(){

    const [token] = useContext(UserContext);
    const {userName,items} = useContext(ItemContext)
    const [edit,setEdit] = useState( Array(3).fill(false));         // to open which edit option is Open
    const [sendCode,setSendCode]= useState( Array(3).fill(false));     // to remember which code box is open
    const [newContact, setNewContact] = useState(["", "", ""]);    // new contact arry
    const [code,setCode] = useState(["","",""]);           // to register for codes of all functiond
    const [isProcessing, setIsProcessing] = useState(Array(3).fill(false));   // when onclick to wait for api response to not send multiple request at once
    const [showModalTelegram,setShowModalTelegram] = useState(false);

    const isProcessingFunc = (index) => {
      setIsProcessing((prevIsProcessing) => {
        const updatedIsProcessing = [...prevIsProcessing];
        updatedIsProcessing[index] = !updatedIsProcessing[index];
        return updatedIsProcessing;
      });
    };
  
    const editFuc = (index)=>{
     
      const updateEdit =[...edit];
      updateEdit[index] = !updateEdit[index];
      setEdit(updateEdit);
      if(updateEdit[index]===false){
        const updateSendCode = [...sendCode]
        updateSendCode[index]= false
        setSendCode(updateSendCode);
      }
      if(index===0 && updateEdit[index]===true){
        setShowModalTelegram(true);
     }

    }
    const sendCodeFuc = (index)=>{
         if(edit[index]){
            const updateSendCode = [...sendCode];
            
            updateSendCode[index] =!updateSendCode[index]
            setSendCode(updateSendCode); 
         }
    }


    const newContactFunc = (index, event) => {
      const copy = [...newContact];
      copy[index] = event.target.value;
      setNewContact(copy);
    };

    const registerProfile = async (item,index)=>{           //api to initiate Code Sending  on desired profile

      isProcessingFunc(index)
      let contactMethod ;
      if(item==="Whatsapp"){
        contactMethod= "phone"
      }else{
        contactMethod = item.toLowerCase();
      }

      const requestOptions={
        method:"POST",
        headers:{
          Authorization:`Bearer ${token}`,
          "Content-type":"application/json"
        },
        body: JSON.stringify({

          contactMethod: contactMethod,
          contactValue:newContact[index]
           

        })
      }

      const response = await fetch("http://localhost:3000/api/profile/sendCode",requestOptions)
      const data = await response.json()
      console.log(response.status)
      if (response.status===201){
        alert(data.message)
        sendCodeFuc(index)
      }else if(response.status === 200){
        alert(data.message)
        if(sendCode[index]!==true){
        sendCodeFuc(index)}
      }else{
        alert(data.message)
      }
      isProcessingFunc(index)

          
    }
    const updateCodeValues = (index,event)=>{
        const tempCode =[...code]
        tempCode[index] = event.target.value
        setCode(tempCode)

    }

    const checkCode = async (item,index)=>{                 // sendCode api
      let contactMethod ; 
      if(item==="Whatsapp"){
        contactMethod= "phone"
      }else{
        contactMethod = item.toLowerCase();
      }
      const requestOptions={
        method:"POST",
        headers:{
          Authorization:`Bearer ${token}`,
          "Content-type":"application/json"
        },
        body: JSON.stringify({

          contactMethod: contactMethod,
          contactValue:newContact[index],
          verificationCode:code[index]
           

        })
      }
      const response = await fetch("http://localhost:3000/api/profile/registerProfile",requestOptions)
      const data = await response.json()
      if(response.ok){
        alert(data.message)
      }else{
        alert(data.message)
      }



    }

    const verifyTelegram = async (index)=>{                // send telegram token to back
      isProcessingFunc(index)

      const requestOptions={
        method:"POST",
        headers:{
          Authorization:`Bearer ${token}`,
          "Content-type":"application/json"
        },
        body: JSON.stringify({

          code: newContact[index],
          
           

        })
      }
      const response = await fetch("http://localhost:3000/api/profile/verifyTelegram",requestOptions)
      const data = await response.json()
      if(response.ok){
        alert(data.message)
      }else{
        alert(data.message)
      }
      isProcessingFunc(index)


      
    }






  

    return(

        
         <div> 
              { items.map((item ,index)=>(
           <div key={index}>
            <h3  className='title-whatsapp-container'> {item.name?item.name:"Sem Cadastro"}</h3>
            <div  className='whastsapp-container'style={{display:"flex",flexDirection:"row"}} >
              <div className='whastsapp-container-input' style={{display:"flex", flexDirection:"column"}}>
                 
                 <label htmlFor="label-numero"> Contato</label>
                 <input type="text"  value={item.value?item.value:"Sem Cadastro"} className='label-numero' disabled/>
              </div>

              <div className='whastsapp-container-verified' style={{display:"flex",flexDirection:"column"}} >

                <label htmlFor="notifications-button"   style={{marginBottom:"10px",marginRight:"10px"}}>Notificacoes</label> 
                 <div style={{textAlign:"center"}}>  <ToggleSwitch value={item.status}  method={item.name} /> </div>
                
              </div>

              <div>

              <label htmlFor="edit-button"  > Editar</label> 
              <button className='edit-button' onClick={()=>{editFuc(index)}}>Editar</button>

              </div>

              
              

            </div>

                  {/* telegram part */}
            
           
            {edit[index] && item.name === "Telegram"   &&

            <div className="send-code-container">
            <input type="text" placeholder='Digite Token' className="edit-number"  onChange={(event)=>newContactFunc(index,event)} value={newContact[index]}/>
        
             <button className="send-code-button" onClick={()=>{

              if(!isProcessing[index]){
              verifyTelegram(index)
            }
            }} >
               Validar Token
           </button>
           </div>
            }

            {/*telegram Modal*/}
            {edit[index] && item.name === "Telegram" && 

          <Modal open={showModalTelegram} onClose={()=>setShowModalTelegram(false)}>
              <div className='modal-telegram-container'>
               <h2>Passos para Cadastar</h2>
               <span>Passo 1</span>  <p>Escaneie o código ou Busca <span> cebraspecrawlerx-bot</span> no telegram</p>
               <img  className="telegramModalImage"src={telegramCode}    alt="hello" />
                   
                   <span>Passo 2</span>  <p>Manda /novotoken para receber Token</p>   
               <img  className="telegramModalImage"src={telegramToken}    alt="hello" />
               <span>Passo 3</span>  <p>Escreva o código corretamente  </p> 
               <img  className="telegramModalImage"src={telegramShowToken}    alt="hello" />

               <span>Apos fazer corretamente você receberá mensagem de sucesso no Telegram</span>
                         <div  style={buttonStyles.buttonContainer}> 

                          <button   onClick={()=>setShowModalTelegram(false)} style={buttonStyles.noButton}>Fechar</button>
    
                          </div>
              </div>
          </Modal>
            }

             
              {/* zap and email part */}

            {edit[index] &&  item.name!=="Telegram" &&(
            <div className="send-code-container">
            <input type="text" placeholder='(61) 98625-0932' className="edit-number"  onChange={(event)=>newContactFunc(index,event)} value={newContact[index]}/>
             <button className="send-code-button" onClick={()=>{
              if(!isProcessing[index]){
              registerProfile(item.name,index)
            }
            }}>
                Send Code
           </button>
           </div>)}

          {sendCode[index] &&  item.name!=="Telegram" &&
          
          <div>
            <span>Foi eviada um Codigo no seu whatsapp</span> <br />
            <div style={{display:"flex", justifyContent:"space-evenly" }}>
            <input type="text"   style={{width:"30%"}}/>
            <button  className='send-code-button' onClick={()=>checkCode(item.name,index)}>OK</button>
            
            <div><span>tempo Restante</span> <CountdownTimer timerName={item.name} /></div>

            </div>
          </div>
       
          }
          </div>
        


          ))}

        
           
         </div>
        


        )
}

export default Items;