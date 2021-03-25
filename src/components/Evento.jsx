import React from "react";

function Evento() {
  const eventoClick = () => {
    console.log("clickkkk");
  };
  return (
    <div>
      <h2>Eventos</h2>
      <button onClick={eventoClick}>Dame click</button>
    </div>
  );
}

export default Evento;
