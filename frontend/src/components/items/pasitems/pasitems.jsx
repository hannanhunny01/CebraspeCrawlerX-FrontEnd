import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/userContext";
import Card from "../../cardVestibular/card";
function PasItems() {
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
        const response = await fetch("http://localhost:3000/api/items/getPas", requestOptions);
        
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
  }, [token]); 


  const handleClick = async function(id){
      
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify({
        pasId: id
      })
    };

    const response = await fetch("http://localhost:3000/api/items/registerPas", requestOptions);
    

    if(response.ok){
      setItems(items.filter(item => item._id !== id));
      const data = await response.json();
      alert(data.message);
    }





  }

  return (
   
    <>
       {items.map((item, index) => (
     
     <Card key={index}   name={item.stage_pas} date={item.year_pas} isSubscribed={false} onClick={()=>handleClick(item._id)}/>
   ))}
    </>
   
  );
}

export default PasItems;
