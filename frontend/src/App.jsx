import React from "react";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> About Page</h1>
      </section>
    </>
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
    <BrowserRouter>
    <Routes>
       <Route exact path="/contact" element={<Home />} />

       <Route exact path="/" element={<Home />} />

      

      <Route path="/about" element={<About />} />
      
      <Route path="/service" element={<Service />} />
     
      

      <Route path="/contact" element={<Contact />} />
       
    </Routes>
    </BrowserRouter>
  );
};

export default App;