import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import {EventosES6, EventosES7, MasSobreEventos} from './components/EventosES6ES7';
import RenderizadoElementos from './components/RenderizadoElementos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloDeVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/HooksContador';
import ScrollHooks from './components/HooksScroll';
import RelojHooks from './components/HooksReloj';
import HooksAjaxApis from './components/HooksAjaxApis';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/ReferenciasPosibleMenu';
import Formularios from './components/FormulariosCompleto';
import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';
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
          <hr></hr>
          <CicloVida />
          <hr></hr>
          <AjaxApis />
          <hr></hr>
          <ContadorHooks />
          <hr></hr>
          <ScrollHooks />
          <hr></hr>
          <RelojHooks />
          <hr></hr>
          <HooksAjaxApis />
          <hr></hr>
          <HooksPersonalizados />
          <hr></hr>
          <Referencias />
          <hr></hr>
          <Formularios />
          <hr></hr>
          <Estilos />
          <hr></hr>
          <ComponentesEstilizados />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </section>
      </header>
    </div>
  );
}
export default App;
