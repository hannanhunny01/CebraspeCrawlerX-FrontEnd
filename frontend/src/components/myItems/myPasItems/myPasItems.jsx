import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/userContext";
import Card from "../../cardVestibular/card";

function MyPasItems() {
  const [token] = useContext(UserContext);
  const [items, setItems] = useState([]); 
  const [render ,setRender] = useState(false)
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
    alert(data.message);

     
    }
   }

  return (
    <>
       {items.map((item) => (
     
     <Card name={item.stage_pas} date={item.year_pas} isSubscribed={true} onClick={()=>handleClick(item._id)} />
   ))}
    </>
  );
}

export default MyPasItems;
