import React from "react";

function Saludo(props) {
  return (
    <div>
      <h1>Ejemplo de props</h1>
      <p>{props.message}</p>
    </div>
  );
}

export default Saludo;
