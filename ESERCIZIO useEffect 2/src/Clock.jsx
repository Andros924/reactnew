import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);


    return () => clearInterval(timerId);
  }, []);

  return (
    <h2>{currentTime.toLocaleTimeString()}</h2>
  );
}

export default Clock;
