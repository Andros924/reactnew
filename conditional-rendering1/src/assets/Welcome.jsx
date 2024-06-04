import Age from './Age'; // Importiamo il componente Age

function Welcome({ name = "Amico", age }) {
  return (
    <div>
      <p>Benvenuto, <strong>{name}</strong>!</p>
      {/* renderizza age.jsx 5 volte */}
      {[1, 2, 3, 4, 5].map((iteration) => (
        <div key={iteration}>
          {age > 18 && <Age age={age} key={`age-${iteration}`} />}  {/* Condizione 1 */}
          {age !== undefined && <Age age={age} key={`age-${iteration}`} />}  {/* Condizione 2 */}
          {age > 18 && age < 65 && <Age age={age} key={`age-${iteration}`} />}  {/* Condizione 3 */}
          {age > 18 && age < 65 && name === "John" && <Age age={age} key={`age-${iteration}`} />}  {/* Condizione 4 */}
        </div>
      ))}
    </div>
  );
}

export default Welcome;
