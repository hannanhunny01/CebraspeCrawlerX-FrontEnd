import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("mytoken"));

  useEffect(() => {

    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch(`${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/user/checkToken`, requestOptions);

      if (!response.ok) {
        setToken(null);
        localStorage.removeItem("mytoken"); 
      }
    };

    if(localStorage.getItem("mytoken") !== null){

    fetchUser();}
  }, [token]);

  useEffect(() => {
    if (token !== null) {
      localStorage.setItem("mytoken", token); 
    }
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
