import React from 'react';

function Age({ age }) {
  return (
    <div>
      {age ? (
        <p>Your age is: {age}</p>
      ) : (
        <p>Age information not provided.</p>
      )}
    </div>
  );
}

function Welcome({ name, age }) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>

      {}
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index}>
          {}
          {age > 18 && (
            <Age key={`age-${index}`} age={age} />
          )}

          {}

          {}
          {age >= 18 && age <= 65 && (
            <Age key={`age-${index}`} age={age} />
          )}

          {}
          {age >= 18 && age <= 65 && name === 'John' && (
            <Age key={`age-${index}`} age={age} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Welcome;
