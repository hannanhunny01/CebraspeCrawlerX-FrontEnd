
import { UserContext } from "../../../Context/userContext";
import { useContext ,useState,useEffect} from "react";
import Card from "../../cardVestibular/card";
import buttonStyles from "../styles";
import Modal from "../../modal/modal";
import NoDataComponent from "../noData";
function MyVestItems(){

    const [token] = useContext(UserContext);
    const [items, setItems] = useState([]); // Manage items using state
    const [render,setRender] = useState(false);
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
          const response = await fetch(`${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/items/getMyVestibular`, requestOptions);
          
          if (response.ok) {
            const itemsData = await response.json();
            setItems(itemsData)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchUser();
    }, [token ,render]); 

    if(items.length === 0){
      return (
    
      <div>  <NoDataComponent name="Vestibular"/></div>
      )
    }


    const handleClick = async (id) =>{
      const requestOptions = {
         method: 'DELETE' ,
         headers:{
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`
         },
         body:JSON.stringify({ 
          vestibularId:id
       })
  
      }
      const response = await fetch(`${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/items/delteVestibularByUser`, requestOptions)
      if(response.ok){
       setRender(!render);
      const data  = await response.json();
      onSuccess(data.message);
  
       
      }
     }
  
    return (
      <>
         

         {items.map((item,index) => (
       
       <Card  key={index} name={item.name} date={""} isSubscribed={true} onClick={()=>{setIsOpen(true); setSelectedId(item._id)}} />
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

        <Modal open={sucessModal} onClose={()=>setSucessModal(false)}>
            <div style={{ display:"flex",justifyContent:"center"}}>
          <div className='div-modal-notifications'>
          <h2>Mesagem</h2>
          <br />
          <p>{modalMessage}</p>
        
          <div  style={buttonStyles.buttonContainer}> 

              <button onClick={()=>setSucessModal(false)} style={buttonStyles.noButton}>Fechar</button>
              
              </div>
          </div>
          </div>
        </Modal>
      </>
    );
}

export default MyVestItems