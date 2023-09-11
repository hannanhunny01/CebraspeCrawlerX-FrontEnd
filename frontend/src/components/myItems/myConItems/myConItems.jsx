
import { useState,useEffect,useContext } from "react";
import { UserContext } from "../../../Context/userContext";
import Card from "../../cardVestibular/card";
import Modal from "../../modal/modal";
function MyConItems(){



    const [token] = useContext(UserContext);
    const [items, setItems] = useState([]); 
    const [render ,setRender] = useState(false);
    const [isOpen, setIsOpen] = useState(false)


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
          const response = await fetch("http://localhost:3000/api/items/getMyConcurso", requestOptions);
          
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
        concursoId:id
      })

     }
     const response = await fetch("http://localhost:3000/api/items/delteConcursoByUser", requestOptions)
     if(response.ok){
      setRender(!render);
     const data  = await response.json();
     alert(data.message);

      
     }
    }
  
    return (
      <>

      
         {items.map((item) => (
       
       <Card    name={item.name} date={item.vagas}  isSubscribed={true} onClick={()=>handleClick(item._id)}/>
       

     ))}
       <button onClick={()=>setIsOpen(true)}>hello</button>
       <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
          <div>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this item?</p>
           
          </div>
        </Modal>
      </>
    );
}

export default MyConItems