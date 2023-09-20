
import { useContext, useEffect, useState } from 'react';
import './items.css';
import ToggleSwitch from '../../button/toggleSwitch/switch';
import CountdownTimer from '../../countDownTimer/countDown';
import { UserContext } from '../../../Context/userContext'; 
function Items(){

    const [token] = useContext(UserContext);
    const [items, setItems] = useState([]);

  
    const [edit,setEdit] = useState([]);
    const editFuc = (index)=>{
      const updateEdit =[...edit];
      updateEdit[index] = !updateEdit[index];
      setEdit(updateEdit);

    }
    const [sendCode,setSendCode]= useState([]);
    const sendCodeFuc = (index)=>{
         if(edit[index]){
            const updateSendCode = [...sendCode];
            if(update)
            updateSendCode[index] =!updateSendCode[index]
            setSendCode(updateSendCode); 
         }
    }




    
    useEffect(  ()=>{
        const fetchData = async ()=>{
            const requestOptions ={
                method :"GET" ,
                headers:{
                    "Content-Type": "application/json",
                    Authorization:`Bearer ${token}`}       
            }
            const response =  await fetch("http://localhost:3000/api/profile/sendUserProfile",requestOptions)
    
            if (response.ok){
                const data = await response.json()
                setItems(data)
                
            }else{
                const data = await response.json()
                alert(data.message)
            }
    
               
            }
        fetchData()

    },[])

    const [newInput,setNewInput] = useState(new Array(3).fill("hello"))
    console.log(newInput)
    async function verify(){
      
   return "hello";
    }

    

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
            <input type="text" placeholder='(61) 98625-0932' className="edit-number" />
             <button className="send-code-button" onClick={() => sendCodeFuc(index)}>
                Send Code
           </button>
           </div>)}

          {sendCode[index] && 
          
          <div>
            <span>Foi eviada um Codigo no seu whatsapp</span> <br />
            <div style={{display:"flex", justifyContent:"space-evenly" }}>
            <input type="text"   style={{width:"30%"}}/>
            <button  className='send-code-button'>OK</button>
            
            <div><span>tempo Restante</span> <CountdownTimer/></div>

            </div>
          </div>
       
          }
          </div>
        


          ))}
           
         </div>
        


        )
}

export default Items;