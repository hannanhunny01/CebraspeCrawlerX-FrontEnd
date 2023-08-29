import { useContext } from "react"
import { UserContext } from "../../Context/userContext"


function PasItems (){
     const token = useContext(UserContext)
     const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
     
     const sendResquest = async () =>{
              
     }

    return(
      
      
      <div></div>

    
    )
}

export default PasItems