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

      {/* Render Age component 5 times with different conditions */}
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index}>
          {/* Condition 1: Age greater than 18 */}
          {age > 18 && (
            <Age key={`age-${index}`} age={age} />
          )}

          {/* Condition 2 (Redundant):** Omitted as the Age component already handles the case where `age` is present. */}

          {/* Condition 3: Age between 18 and 65 (inclusive) */}
          {age >= 18 && age <= 65 && (
            <Age key={`age-${index}`} age={age} />
          )}

          {/* Condition 4: Age between 18 and 65 (inclusive) and name is "John" */}
          {age >= 18 && age <= 65 && name === 'John' && (
            <Age key={`age-${index}`} age={age} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Welcome;
