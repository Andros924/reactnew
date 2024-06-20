import { useState } from "react";
import "./App.css";
import Container from "./Container";

function App() {
  return (
    <>
      <div className="App">
        <Container title="Lupoidi">
          <p>Pastore tedsco</p>
          <p>Husky</p>
          <p>Malinuar</p>
          <p>husky Malamut</p>
        </Container>
        <Container title="molossoidi">
          <p>Bulldog francese</p>
          <p>Carlino</p>
          
        </Container>
      </div>
    </>
  );
}

export default App;
