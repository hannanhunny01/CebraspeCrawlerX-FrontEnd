import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const initialTime = 10 * 60; // 10 minutes in seconds
  const storedInitialTime = parseInt(localStorage.getItem('initialTime')) || initialTime;

  const [timeRemaining, setTimeRemaining] = useState(storedInitialTime);

  useEffect(() => {
    localStorage.setItem('initialTime', timeRemaining.toString());

    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <p>{formatTime(timeRemaining)}</p>
    </div>
  );
};

export default CountdownTimer;
