// //import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Canvas } from "react-three-fiber";
// import "./styles.css";

// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// }
// export default function App() {
//   return <Canvas></Canvas>;
// }
import './App.css';
import FlippableCard from './components/flippable-card';

function App () {
  return (
    <div className="App">
      <FlippableCard/>
    </div>
  )
}

export default App;