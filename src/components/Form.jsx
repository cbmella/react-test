import React, { useState } from "react";

function Form() {
  const [fruta, setFruta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const guardarDatos = (e) => {
    e.preventDefault();

    if (!fruta.trim()) {
      console.log("fruta esta vacio");
      return;
    }

    if (!descripcion.trim()) {
      console.log("descripcion esta vacio");
      return;
    }

    console.log("procesando datos.." + fruta + descripcion);
    e.target.reset();
    setFruta("");
    setDescripcion("");
  };
  return (
    <div>
      <h2>Formualrio</h2>
      <form onSubmit={guardarDatos}>
        <input
          className="form-control mb-4"
          placeholder="Ingrese fruta"
          type="text"
          onChange={(e) => setFruta(e.target.value)}
        />
        <input
          className="form-control mb-4"
          placeholder="Ingrese descripcion"
          type="text"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="btn btn-primary">Agregar</button>
      </form>
    </div>
  );
}

export default Form;
