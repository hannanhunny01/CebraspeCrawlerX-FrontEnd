import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/userContext";
import Card from "../../cardVestibular/card";
import Modal from "../../modal/modal";
import buttonStyles from "../styles";
function MyPasItems() {
  const [token] = useContext(UserContext);
  const [items, setItems] = useState([]); 
  const [render ,setRender] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedId,setSelectedId] = useState(null); 
  const [sucessModal,setSucessModal] = useState(false)
  const [modalMessage ,setModalMessage] = useState("");  
    const yesButton = () =>{
      if(selectedId){
      handleClick(selectedId);
      setIsOpen(false);
      setSelectedId(null);
    }

    }
    const onSuccess = (message)=>{
      setModalMessage(message);
      setSucessModal(true);
      setTimeout(() => {
        setSucessModal(false);
      }, 3000);
  }

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch("http://localhost:3000/api/items/getMyPas", requestOptions);
        
        if (response.ok) {
          const itemsData = await response.json();
          setItems(itemsData)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUser();
  }, [token,render]); 

  const handleClick = async (id) =>{
    const requestOptions = {
       method: 'DELETE' ,
       headers:{
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`
       },
       body:JSON.stringify({ 
        pasId:id
     })

    }
    const response = await fetch("http://localhost:3000/api/items/deltePasByUser", requestOptions)
    if(response.ok){
     setRender(!render);
    const data  = await response.json();
    onSuccess(data.message);

     
    }
   }

  return (
    <>
       {items.map((item,index) => (
     
     <Card key={index}  name={item.stage_pas} date={item.year_pas} isSubscribed={true} onClick={()=>{setIsOpen(true); setSelectedId(item._id)}} />
   ))}

       <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
          <div>
            <h2>Confirmação</h2>
            <p>tem certeza de que deseja cancelar a inscrição para receber mesagens</p>
            <div  style={buttonStyles.buttonContainer}> 

                <button style={buttonStyles.yesButton} onClick={yesButton}>Sim</button>
              <button onClick={()=>setIsOpen(false)} style={buttonStyles.noButton}>Nao</button>
              
              </div>
          </div>
        </Modal>

        <Modal open={sucessModal} onClose={()=>setSucessModal(false)} >  
          <div>
            <br />
            <br />
             <h2> {modalMessage}</h2>
             <br /> <br />

          </div>

         </Modal>
    </>
  );
}

export default MyPasItems;
