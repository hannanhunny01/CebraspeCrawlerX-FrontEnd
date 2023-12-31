import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ timerName }) => {
  const initialTime = 10 * 60; // 10 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const storedInitialTime = parseInt(localStorage.getItem(`${timerName}_initialTime`));
    const storedStartTime = parseInt(localStorage.getItem(`${timerName}_startTime`));

    if (storedInitialTime && storedStartTime) {
      const currentTime = Math.floor(Date.now() / 1000);
      const elapsedTime = currentTime - storedStartTime;
      const remainingTime = storedInitialTime - elapsedTime;

      if (remainingTime > 0) {
        setTimeRemaining(remainingTime);
      } else {
        // Timer has expired, reset to initial time
        localStorage.setItem(`${timerName}_initialTime`, initialTime.toString());
        localStorage.setItem(`${timerName}_startTime`, currentTime.toString());
        setTimeRemaining(initialTime);
      }
    } else {
      // Initial setup
      const currentTime = Math.floor(Date.now() / 1000);
      localStorage.setItem(`${timerName}_initialTime`, initialTime.toString());
      localStorage.setItem(`${timerName}_startTime`, currentTime.toString());
    }

    const timerInterval = 1000;
    const updateTimer = () => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    };

    const timerId = setInterval(updateTimer, timerInterval);

    return () => {
      clearInterval(timerId);
    };
  }, [timerName, timeRemaining]);

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
