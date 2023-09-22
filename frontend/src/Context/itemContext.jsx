import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [token] = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
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
            "http://localhost:3000/api/profile/sendUserProfile",
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

      fetchData();
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <ItemContext.Provider value={{ userName, items, isLoading }}>
      {props.children}
    </ItemContext.Provider>
  );
};
