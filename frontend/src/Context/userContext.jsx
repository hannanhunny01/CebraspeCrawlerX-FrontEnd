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

      const response = await fetch("http://localhost:3000/api/user/checkToken", requestOptions);

      if (!response.ok) {
        setToken(null);
        localStorage.removeItem("mytoken"); 
      }
    };

    fetchUser();
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
