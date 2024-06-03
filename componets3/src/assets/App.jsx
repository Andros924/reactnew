import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />  {/* Rendering Hello una volta */}
      <Hello />  {/* Rendering Hello un'altra volta */}
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div>
//       <h2>Ciao, Mondo!</h2> {/* Renderizza direttamente un tag h2 */}
//     </div>
//   );
// }

// export default App;
