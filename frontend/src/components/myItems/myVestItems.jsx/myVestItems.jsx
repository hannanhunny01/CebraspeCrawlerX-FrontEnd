
import { UserContext } from "../../../Context/userContext";
import { useContext ,useState,useEffect} from "react";
import Card from "../../cardVestibular/card";
function MyVestItems(){

    const [token] = useContext(UserContext);
    const [items, setItems] = useState([]); // Manage items using state
    const [render,setRender] = useState(false);
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
          const response = await fetch("http://localhost:3000/api/items/getMyVestibular", requestOptions);
          
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
    }, [token ,render]); 


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
      const response = await fetch("http://localhost:3000/api/items/delteVestibularByUser", requestOptions)
      if(response.ok){
       setRender(!render);
      const data  = await response.json();
      alert(data.message);
  
       
      }
     }
  
    return (
      <>
         

         {items.map((item) => (
       
       <Card  name={item.name} date={""} isSubscribed={true} onClick={()=>handleClick(item._id)} />
     ))}

        {items.length>0?"": <div> hello</div>}
      </>
    );
}

export default MyVestItems