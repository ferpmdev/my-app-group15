import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './App.css';
import particlesOptions from './particles.json';
import ComponentHijo from './componenteHijo1/ComponentHijo';

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const grupo15 = ['Tobi', 'Lou', 'Luciano', 'Lucas', 'Camila', 'David'];

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <header className="App-header">
        <a
          className="App-link"
          href="https://particles.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {}
        </a>
        <h1>componentes saludando</h1>
        <ul>
          {grupo15.map((nombre, index) => (
            <li key={index}>
              <ComponentHijo texto={nombre} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
