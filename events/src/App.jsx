import React from 'react';
import AlertClock from './AlertClock';

function App() {
  const handleClick = () => {
    const now = new Date().toLocaleTimeString();
    alert(`The current time is ${now}`);
  };

  return (
    <div>
      <AlertClock handleClick={handleClick} />
    </div>
  );
}

export default App;
