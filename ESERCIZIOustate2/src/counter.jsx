import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay'; 


function Counter({ initialCount = 0, decrementBy = 1 }) {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(Math.max(0, count - decrementBy));
  };

  const handleReset = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement ({decrementBy})</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
