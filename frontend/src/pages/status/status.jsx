import React, { useState, useEffect } from 'react';
import Terminal from '../../components/terminal/terminal';
import Navbar from '../../components/Navbar/navbar';

import './status.css';

function Status() {
  const h1Styles = {
    textAlign: "center",
    marginTop: "3rem",
    marginBottom: "2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.2rem",
    color: "#333"
  };

  const [status, setStatus] = useState([]);
  const [updateScreen, setUpdateScreen] = useState(false);

  const getCachedData = () => {
    try {
      const cachedData = localStorage.getItem('cachedStatus');
      const cachedTimestamp = localStorage.getItem('cachedStatusTimestamp');

      if (cachedData && cachedTimestamp) {
        const currentTime = Date.now();
        const cachedTime = parseInt(cachedTimestamp, 10);

        if (currentTime - cachedTime < 3 * 60 * 60 * 1000) {
          setStatus(JSON.parse(cachedData));
          return true; 
        }
      }
    } catch (error) {
      console.error('Error retrieving cached data:', error);
    }
    return false; 
  };

  const getData = async () => {
    if (getCachedData()) {
      return; 
    }

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/status`, requestOptions);
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('cachedStatus', JSON.stringify(data));
        localStorage.setItem('cachedStatusTimestamp', Date.now().toString());

        setStatus(data);
      } else {
        setStatus([{ status: false, action: "error loading data from server", date: Date.now() }]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
      <Navbar />
      <h1 className="h1titlestatus" style={h1Styles}>Status do sistema</h1>

      <div style={{ width: "100%", maxWidth: "800px", maxHeight: "60vh", display: "flex", justifyContent: "center" }}>
        <Terminal commands={status} />
      </div>
    </div>
  );
}

export default Status;
