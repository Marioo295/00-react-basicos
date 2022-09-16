import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import RenderizadoElementos from './components/RenderizadoElementos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a  
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un componente funcional expresado desde una prop"/>
          <hr></hr>
          <Propiedades 
            cadena="Esto es una cadena de texto" 
            numero={19}
            booleano={false}
            arreglo={[1,2,3]}
            objeto={{nombre:"Mario",correo:"mario@gmail.com"}}
            elementoReact={<i>Esto es un elemento React</i>}
            funcion={num => num * num}
            componenteReact={<Componente msg="Soy un componente pasado como prop"/>}
          />
          <hr></hr>
          <Estado />
          <hr></hr>
          <RenderizadoCondicional />
          <hr></hr>
          <RenderizadoElementos />
          <hr></hr>
          <EventosES6 />
          <hr></hr>
          <EventosES7 />
          <hr></hr>
          <MasSobreEventos />
          <hr></hr>
          <ComunicacionComponentes />
        </section>
      </header>
    </div>
  );
}
export default App;
