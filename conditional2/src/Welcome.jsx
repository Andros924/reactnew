import Age from './Age'; // Importiamo il componente Age

function Welcome({ name = "Amico", age }) {
  return (
    <div>
      <p>Benvenuto, <strong>{name}</strong>!</p>
      {age && <Age age={age} />}  {/* Passiamo l'età ad Age */}
    </div>
  );
}

export default Welcome;
