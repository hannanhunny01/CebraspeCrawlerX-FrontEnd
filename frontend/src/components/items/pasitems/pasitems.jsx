import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/userContext";
import Card from "../../cardVestibular/card";
function PasItems() {
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
  }, [token]); // Include token in the dependency array

  return (
   
    <>
       {items.map((item, index) => (
     
     <Card key={index}   name={item.stage_pas} date={item.year_pas} isSubscribed={false} />
   ))}
    </>
   
  );
}

export default PasItems;
