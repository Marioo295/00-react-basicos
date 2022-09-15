import React, {Component} from "react";

function EstadoHijo(props) {
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

export default class Estado extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contador:0,
        };
        setInterval(() => {
            // this.state.contado += 1   ASÍ NO SE ACTUALIZA EL ESTADO //
            this.setState({
                contador:this.state.contador + 1
            });
        }, 1000);
    }

    render() {
        return (
             <div>
                <h2>El state</h2>
                <p>{this.state.contador}</p>
                <EstadoHijo contadorHijo={this.state.contador}/>
             </div>
        );
    }
}