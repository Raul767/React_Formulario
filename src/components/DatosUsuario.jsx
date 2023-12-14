import React from "react";

const DatosUsuario = props => {
  return (
    <div onKeyDown={props.handleKeyDown}>
      <h1 className="py-2">Registro</h1>
      <div className="form-group">
        <label htmlFor="">Nombre:</label>
        <input
        type="text"
        name="nombre"
        className="form-control"
        onChange={props.handleInputChange}
        value={props.valores.nombre}
        autoFocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Apellido:</label>
        <input
        type="text"
        name="apellido"
        className="form-control"
        onChange={props.handleInputChange}
        value={props.valores.apellido}
        autoFocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="text-left">
          Contraseña:
        </label>
        <input
        type="password"
        name="contraseña"
        className="form-control"
        onChange={props.handleInputChange}
        value={props.valores.contraseña}
        />
      </div>
      <div className="text-right">
        <button className="btn btn-primary m-2" onClick={props.pasoSiguiente}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default DatosUsuario;