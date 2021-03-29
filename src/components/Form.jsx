import React, { useState } from "react";

function Form() {
  const [nombre, setFruta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [lista, setLista] = useState([]);
  const guardarDatos = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      console.log("nombre esta vacio");
      return;
    }

    if (!descripcion.trim()) {
      console.log("descripcion esta vacio");
      return;
    }

    console.log("procesando datos" + nombre + " " + descripcion);
    setLista([...lista, { nombre: nombre, descripcion: descripcion }]);

    e.target.reset();
    setFruta("");
    setDescripcion("");
  };
  return (
    <div>
      <h2>Formulario</h2>
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
      <hr />
      <h3>Listado de frutas</h3>
      <br />
      {lista.map((item, index) => (
        <div key={index}>
          <h3>{item.nombre}</h3>
          <h4>{item.descripcion}</h4>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Form;
