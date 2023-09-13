import React, { useContext } from "react";
import Navbar from "./components/Navbar/navbar";
import "./App.css"
import MyRoutes from "./routes/routes";
import { UserContext } from "./Context/userContext";

const About = () => {
  return (
    
    <div className="about">
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> About Page</h1>
      </section>
    
    </div>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Contact Page</h1>
      </section>
    </>
  );
};
const App = () => {
  const token = useContext(UserContext)
  return (
    <div className="app">
    <MyRoutes/>
    </div>
  );
};

export default App;