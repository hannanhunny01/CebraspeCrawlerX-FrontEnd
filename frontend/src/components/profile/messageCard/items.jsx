

/* this file has gotten very larg maybe in future someone can refactor this file  */
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
import { isValidEmail,isValidNumber } from '../../Validators/validators';

function Items(){

    const [token] = useContext(UserContext);
    const {userName,items,setRefreshItem} = useContext(ItemContext)
    const [edit,setEdit] = useState( Array(3).fill(false));         // to open which edit option is Open
    const [sendCode,setSendCode]= useState( Array(3).fill(false));     // to remember which code box is open
    const [newContact, setNewContact] = useState(["", "", ""]);    // new contact arry
    const [code,setCode] = useState(["","",""]);           // to register for codes of all functiond
    const [isProcessing, setIsProcessing] = useState(Array(3).fill(false));   // when onclick to wait for api response to not send multiple request at once
    const [processingLicense,setProcessingLicense] = useState(false);
    const [showModalTelegram,setShowModalTelegram] = useState(false);

    const [accessToken,setAccessToken] = useState('');    // token for whatsapp acess
    const [accessTokenInput,setAccessTokenInput] = useState(false);   // to make it visible
    const [accessTokenInputError,setAccessTokenInputError] = useState(false);   // to check if has error on whatsapp token
    const [hasTokenValidated,setHasTokenValidated] = useState(false);


    // modal part 

     const [openModal,setOpenModal] = useState(false);
     const [message,setMessage] =useState("");
   
     





    // edit input validation part in (red Error)
    const [inputError,setInputError] = useState(Array(3).fill(false));
    const [inputErrorMessage,setInputErrorMessage]= useState('');



    const isProcessingFunc = (index) => {
      setIsProcessing((prevIsProcessing) => {
        const updatedIsProcessing = [...prevIsProcessing];
        updatedIsProcessing[index] = !updatedIsProcessing[index];
        return updatedIsProcessing;
      });
    };

  


   
    const editFuc = (index)=>{

    if(index ===1 ){
      if(!hasTokenValidated){
        setAccessTokenInput(!accessTokenInput)
        return;
                  
      }
    }
       
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


    const CheckAcessToken = function (token){
      setProcessingLicense(true);
      if(token.length === 15){
        setAccessTokenInputError(false);
        sendAcessToken()
      }else{
      setAccessTokenInputError(true);}
    }

    const sendAcessToken = async ()=>{                 // to verify license of whatsapp registration
      setAccessTokenInputError(false);
      const requestOptions = {
        method:"POST",
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-type':"application/json"
        },
        body:JSON.stringify({
           accessToken:accessToken 

        })
      }
      const response = await fetch("http://localhost:3000/api/profile/verifyLicense",requestOptions)
      const data = await response.json();
      setMessage(data.message);
      setOpenModal(true);
      setTimeout(()=>{setOpenModal(false);
      },3000)
      if(response.ok){
        setAccessTokenInput(false);
        setHasTokenValidated(true);
        const myedit =[...edit];
        myedit[1]=true;
        setEdit(myedit);
      }
      setProcessingLicense(false);

     
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
      setMessage(data.message);
      setOpenModal(true);
      setTimeout(()=>{setOpenModal(false);
      },4000)
      console.log(response.status)
      if (response.status===201){
        sendCodeFuc(index)
      }else if(response.status === 200){
        if(sendCode[index]!==true){
        sendCodeFuc(index)}
      }
      isProcessingFunc(index)

          
    }
    const updateCodeValues = (index,event)=>{
        const tempCode =[...code]
        tempCode[index] = event.target.value
        setCode(tempCode)
        console.log(code[index])

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
      setMessage(data.message);
      setOpenModal(true);
      setTimeout(()=>{setOpenModal(false);
      },4000)
      if(response.ok){
          
        setEdit([false,false,false])
        setSendCode([false,false,false])
        setNewContact(["","",""]);
        setCode(['','','']);
        setRefreshItem(true);

       // alert(data.message)
      }else{
       // alert(data.message)
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
              {/* Edit Button  */}
              <button className='edit-button' onClick={()=>{

                                
                editFuc(index)}}>Editar</button>

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

            {/* whatsapp edit function for Token  */}

               {accessTokenInput 
                && item.name === "Whatsapp"   &&

            <div className="send-code-container">
            <input type="text" placeholder='Token Privado Recebido pelo Desenvolvedor' className="edit-number"  onChange={(event)=>{setAccessToken(event.target.value)}} value={accessToken}/>
        
             <button className="send-code-button"  onClick={()=>CheckAcessToken(accessToken)} disabled={processingLicense} >
               ZAP TOKEN
           </button>
           </div>
            }
             {accessTokenInput &&  accessTokenInputError && item.name === "Whatsapp" &&

           <div  style={{color:"red" ,textAlign:"center"}}>
            <span>esse token esta invalido</span>
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

            {/* whatsapp and general modal*/}
            <Modal open={openModal} onClose={()=>setOpenModal(false)}>
            <div style={{ display:"flex",justifyContent:"center"}}>
          <div className='div-modal-notifications'>
          <h2>Mensagem</h2>
          <br />
          <p>{message}</p>
        
          <div  style={buttonStyles.buttonContainer}> 

              <button onClick={()=>setOpenModal(false)} style={buttonStyles.noButton}>Fechar</button>
              
              </div>
          </div>
          </div>
        </Modal>

             
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
            <span>Foi eviada um Codigo  nesse {item.name}</span> <br />
            <div style={{display:"flex", justifyContent:"space-evenly" }}>
            <input type="text"   style={{width:"30%"}} onChange={(event)=>{updateCodeValues(index,event)}}/>
            <button  className='send-code-button'  onClick={()=>checkCode(item.name,index)}>OK</button>
            
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