import React, { useState } from 'react';

const MouseClicker = () => {
  const [clicked, setClicked] = useState(false);
  const imageUrl = './image/button.png;'; 

  const handleClick = (event) => {
    
    event.stopPropagation();
    console.log(imageUrl);
    setClicked(true);
  };

  return (
    <button name="one" onClick={handleClick}>
      {clicked ? 'Cliccato!' : <img src={imageUrl} alt="Immagine" />}
    </button>
  );
};

export default MouseClicker;
