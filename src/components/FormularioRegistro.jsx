import React from "react";
import DatosUsuario from "./DatosUsuario";
import DatosDireccion from "./DatosDireccion";
import Confirmar from "./Confirmar";

class FormularioRegistro extends React.Component{
  state = {
    paso: 1,
    contraseña: "",
    nombre: "",
    apellido: "",
    direccion: "",
    barrio: "",
    ciudad: "",
    departamento: ""
  };

  pasoSiguiente = () => {
    const { paso } = this.state;
    this.setState({
      paso: paso + 1
    });
  };

  pasoAnterior = () => {
    const { paso } = this.state;
    this.setState({
      paso: paso - 1
    });
  };

  handleKeyDown = event => {
    if(event.keyCode === 13) {
      this.pasoSiguiente();
    }
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    switch (this.state.paso){
      case 1:
        return(
          <DatosUsuario
          handleInputChange={this.handleInputChange}
          pasoSiguiente={this.pasoSiguiente}
          handleKeyDown={this.handleKeyDown}
          valores={this.state}
          />
        );
      case 2:
        return(
          <DatosDireccion
          handleInputChange={this.handleInputChange}
          pasoSiguiente={this.pasoSiguiente}
          pasoAnterior={this.pasoAnterior}
          handleKeyDown={this.handleKeyDown}
          valores={this.state}
          />
        );
      case 3:
        return(
          <Confirmar
          valores={this.state}
          pasoSiguiente={this.pasoSiguiente}
          pasoAnterior={this.pasoAnterior}
          />
        );
      case 4:
        return <h1 className="display-1 text-success text-center">Exito!</h1>
        default:
          return <div>Error</div>;
    }
  }
}

export default FormularioRegistro;