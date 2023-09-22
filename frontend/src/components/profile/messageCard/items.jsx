
import { useContext, useEffect, useState } from 'react';
import './items.css';
import ToggleSwitch from '../../button/toggleSwitch/switch';
import CountdownTimer from '../../countDownTimer/countDown';
import { UserContext } from '../../../Context/userContext'; 
import { ItemContext } from '../../../Context/itemContext';
function Items(){

    const [token] = useContext(UserContext);
  
    const [edit,setEdit] = useState( Array(3).fill(false));
    const editFuc = (index)=>{
      const updateEdit =[...edit];
      updateEdit[index] = !updateEdit[index];
      setEdit(updateEdit);
      if(updateEdit[index]===false){
        const updateSendCode = [...sendCode]
        updateSendCode[index]= false
        setSendCode(updateSendCode);
      }

    }
    const [sendCode,setSendCode]= useState( Array(3).fill(false));  
    const sendCodeFuc = (index)=>{
         if(edit[index]){
            const updateSendCode = [...sendCode];
            
            updateSendCode[index] =!updateSendCode[index]
            setSendCode(updateSendCode); 
         }
    }

    const [newContact, setNewContact] = useState(["", "", ""]);

    const newContactFunc = (index, event) => {
      const copy = [...newContact];
      copy[index] = event.target.value;
      setNewContact(copy);
    };

    const registerProfile = async (item,index)=>{
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
        sendCodeFuc(index)
      }else{
        alert(data.message)
      }
          
    }
    const [code,setCode] = useState(["","",""]);
    const updateCodeValues = (index,event)=>{
        const tempCode =[...code]
        tempCode[index] = event.target.value
        setCode(tempCode)

    }

    const checkCode = async (item,index)=>{
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
          verificationCode:code
           

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





  const {userName,items} = useContext(ItemContext)

  

    return(

        
         <div> 
              { items.map((item ,index)=>(
           <div key={index}>
            <h3  className='title-whatsapp-container'> {item.name}</h3>
            <div  className='whastsapp-container'style={{display:"flex",flexDirection:"row"}} >
              <div className='whastsapp-container-input' style={{display:"flex", flexDirection:"column"}}>
                 
                 <label htmlFor="label-numero"> contato</label>
                 <input type="text"  value={item.value} className='label-numero' disabled/>
              </div>

              <div className='whastsapp-container-verified' style={{display:"flex",flexDirection:"column"}} >

                <label htmlFor="notifications-button"   style={{marginBottom:"10px",marginRight:"10px"}}>Notificacoes</label> 
                 <div style={{textAlign:"center"}}>  <ToggleSwitch value={item.status}  method={item.name} /> </div>
                
              </div>

              <div>

              <label htmlFor="edit-button"  > Editar</label> 
              <button className='edit-button' onClick={()=>editFuc(index)}>Editar</button>

              </div>

              
              

            </div>
            {edit[index] && (
            <div className="send-code-container">
            <input type="text" placeholder='(61) 98625-0932' className="edit-number"  onChange={(event)=>newContactFunc(index,event)} value={newContact[index]}/>
             <button className="send-code-button" onClick={()=>registerProfile(item.name,index)}>
                Send Code
           </button>
           </div>)}

          {sendCode[index] && 
          
          <div>
            <span>Foi eviada um Codigo no seu whatsapp</span> <br />
            <div style={{display:"flex", justifyContent:"space-evenly" }}>
            <input type="text"   style={{width:"30%"}}/>
            <button  className='send-code-button' onClick={()=>checkCode(item.name,index)}>OK</button>
            
            <div><span>tempo Restante</span> <CountdownTimer timerName={item.name}/></div>

            </div>
          </div>
       
          }
          </div>
        


          ))}
           
         </div>
        


        )
}

export default Items;