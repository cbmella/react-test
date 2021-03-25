import React, { useState } from "react";

function Objectos() {
  const estadoInicial = [
    { id: 1, texto: "tarea 1" },
    { id: 2, texto: "tarea 2" },
    { id: 3, texto: "tarea 3" },
  ];
  const [lista, setLista] = useState(estadoInicial);

  const AgregarElemento = () => {
    console.log("Agregando al state");
    setLista([...lista, { id: 4, texto: "tarea 4" }]);
  };
  return (
    <div>
      <h1>Listas</h1>
      {lista.map((item, index) => (
        <h4 key={index}>{item.texto}</h4>
      ))}
      <button className="btn btn-primary" onClick={() => AgregarElemento()}>
        Agregar Elemento
      </button>
    </div>
  );
}

export default Objectos;
