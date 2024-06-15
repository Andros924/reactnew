import React from 'react';

const Color = ({ color }) => {
  return <li key={color.id}>{color.name}</li>;
};

const Colors = ({ colors }) => {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
};

export default Colors;
