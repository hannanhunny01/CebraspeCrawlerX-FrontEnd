import React, { useContext } from "react";
import Navbar from "./components/Navbar/navbar";
import "./App.css"
import MyRoutes from "./routes/routes";
import { UserContext } from "./Context/userContext";
import './styles/modal.css'






const App = () => {
  const token = useContext(UserContext)
  console.log(import.meta.env.VITE_HOST_PORT)
  return (
    <div className="app">
    <MyRoutes/>
    </div>
  );
};

export default App;