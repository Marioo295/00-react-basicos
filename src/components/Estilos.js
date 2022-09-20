import React from 'react';
import './Estilos.css';
import './Estilos.scss';
import moduleStyles from './Estilos.module.css';

export default function Estilos() {
    let myStyles = {
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%",
    };

    return(
        <section className="estilos">
            <h2>Estilos CSS en React</h2>
            {/* CSS con una hoja estilos aparte. Se crea el archivo Estilos.css */}
            <h3 className="bg-react">Estilos en una hoja CSS externa</h3>
            {/* CSS con estilos en línea */}
            <h3 className="bg-react" style={{borderRadius:".25rem", margin:".1rem"}}>Estilos en línea (atributo style)</h3>
            {/* CSS con estilos en línea creando función aparte. Se crea la función Estilos() */}
            <h3 className="bg-react" style={myStyles}>Estilos en línea</h3>
            {/* CSS agregando el paquete @import-normalize a la hoja de estilos. Se importa en el index.css */}
            <h3 className="bg-react" style={myStyles}>Agregando normalize con <br></br><code>@import-normalize;</code></h3>
            {/* CSS agregando estilos a través de módulos. Se crea el archivo Estilo.modules.css */}
            <h3 className={moduleStyles.error}>Estilos con módulos</h3>
            <h3 className={moduleStyles.success}>Estilos con módulos</h3>
            {/* CSS con SASS */}
            <h3 className="bg-sass">Estilos con SASS</h3>
        </section>
    );
}