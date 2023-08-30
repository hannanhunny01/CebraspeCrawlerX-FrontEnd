
import { useState,useEffect,useContext } from "react";
import { UserContext } from "../../../Context/userContext";
import Card from "../../cardVestibular/card";
function ConItems(){



    const [token] = useContext(UserContext);
    const [items, setItems] = useState([]); // Manage items using state
  
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
            console.log(items)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchUser();
    }, [token]); // Include token in the dependency array
  
    return (
      <>
         {items.map((item, index) => (
       
       <Card key={index}   name={item.name} date={item.vagas} />
     ))}
      </>
    );
}

export default ConItems