import React from "react";

const DatosDireccion = props =>{
  return(
    <div onKeyDown={props.handleKeyDown}>
      <h1 className="py-2">Datos Direccion:</h1>
      <div className="form-group">
        <label htmlFor="">Direccion:</label>
        <input
        type="text"
        name="direccion"
        className="form-control"
        onChange={props.handleInputChange}
        value={props.valores.direccion}
        autoFocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Barrio:</label>
        <input
        type="text"
        name="barrio"
        className="form-control"
        onChange={props.handleInputChange}
        value={props.valores.barrio}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Ciudad:</label>
        <input
        type="text"
        name="ciudad"
        className="form-control"
        onChange={props.handleInputChange}
        value={props.valores.ciudad}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Departamento:</label>
        <input
        type="text"
        name="departamento"
        className="form-control"
        onChange={props.handleInputChange}
        value={props.valores.departamento}
        />
      </div>

      <div className="text-right">
        <button
        className="btn btn-primary m-2" onClick={props.pasoSiguiente}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default DatosDireccion;