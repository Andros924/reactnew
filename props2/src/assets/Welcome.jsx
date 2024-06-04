function Welcome({ name = "Amico", age }) {
  return (
    <div>
      <p>Benvenuto, <strong>{name}</strong>!</p>
      {age && <p>Your age is: {age}</p>}
    </div>
  );
}

export default Welcome;
