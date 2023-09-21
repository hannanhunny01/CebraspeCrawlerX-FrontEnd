import { createContext,useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";



export const ItemContext = createContext();

export const ItemProvidor = (props)=>{

    const [token] = useContext(UserContext)
    const [items,setItems] = useState([]);
    const [userName,setUserName] = useState('');
    const navigate = useNavigate();
    useEffect(  ()=>{

        if(token){
        const fetchData = async ()=>{
            const requestOptions ={
                method :"GET" ,
                headers:{
                    "Content-Type": "application/json",
                    Authorization:`Bearer ${token}`}       
            }
            const response =  await fetch("http://localhost:3000/api/profile/sendUserProfile",requestOptions)
    
            if (response.ok){
                const data = await response.json()
                setItems(data.items)
                setUserName(data.name)
                alert('hello')
                
            }else{
                const data = await response.json()
                alert(data.message)
            }
         alert(namee)
               
            }
        fetchData()}else{
           navigate('/login')
        }

    },[])

    return(

        <ItemContext.Provider  value={{userName,items}}>

        {props.children}

        </ItemContext.Provider>
    )
}