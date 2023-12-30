import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [token] = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [refreshItem,setRefreshItem] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        try {
          const response = await fetch(
            `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/profile/sendUserProfile`,
            requestOptions
          );
          if (response.ok) {
            const data = await response.json();
            setItems(data.items);
            setUserName(data.name);
          } else {
            const data = await response.json();
            alert(data.message);
          }
          setIsLoading(false); // Set loading to false when data is fetched
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      setRefreshItem(false);

      fetchData();
    } else {
      navigate('/login');
    }
    console.log("running")
  }, [token, navigate ,refreshItem]);

  return (
    <ItemContext.Provider value={{ userName, items, isLoading ,setRefreshItem}}>
      {props.children}
    </ItemContext.Provider>
  );
};
