import { useRef, useState } from 'react';

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  const directionRef = useRef(null); // Memorizza la direzione precedente

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    const direction = newCount > initialValue ? "up" : "down";
    if (direction !== directionRef.current) {
      directionRef.current = direction;
      console.log(`Direzione del cambiamento: ${direction}`);
    }
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    const direction = newCount > initialValue ? "up" : "down";
    if (direction !== directionRef.current) {
      directionRef.current = direction;
      console.log(`Direzione del cambiamento: ${direction}`);
    }
  };

  return (
    <div>
      Conteggio: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
