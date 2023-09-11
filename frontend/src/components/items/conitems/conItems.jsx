
import { useState,useEffect,useContext } from "react";
import { UserContext } from "../../../Context/userContext";
import Card from "../../cardVestibular/card";
function ConItems(){

   






    const [token] = useContext(UserContext);
    const [items, setItems] = useState([]);
     
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
          const response = await fetch("http://localhost:3000/api/items/getConcurso", requestOptions);
          
          if (response.ok) {
            const itemsData = await response.json();
            setItems(itemsData)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchUser();
    }, [token]); 

    const handleClick = async function(id){
      
      console.log(id)
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           Authorization: `Bearer ${token}`,
        },
        body:JSON.stringify({
          concursoId: id
        })
      };

      const response = await fetch("http://localhost:3000/api/items/registerConcurso", requestOptions);
      

      if(response.ok){
        setItems(items.filter(item => item._id !== id));
        const data = await response.json();
        alert(data.message);
      }





    }
  
    return (
      <>
         {items.map((item, index) => (
         
       <Card  key={index} id={item._id}   onClick={()=>handleClick(item._id)}  name={item.name} date={item.vagas} isSubscribed={false} />
     ))}
      </>
    );
}

export default ConItems