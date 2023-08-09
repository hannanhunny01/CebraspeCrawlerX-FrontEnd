import React from "react";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"


import Home from "./pages/home/home";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/signup/signup";
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
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
       <Route exact path="/contact" element={<Home />} />

       <Route exact path="/" element={<Home />} />

      

      <Route path="/about" element={<About />} />
      
      <Route path="/service" element={<Service />} />
     
      

      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignUpPage />} />
       
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;