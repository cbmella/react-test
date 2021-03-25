import React, { useState } from "react";

function Lista() {
  const estadoInicial = [1, 2, 3, 4, 5];
  const [lista] = useState(estadoInicial);
  return <div>
      <h1>Listas</h1>
        {
            lista.map((item, index) => (
                <h4 key={index}>
                    {item}
                </h4>
            ))
        }     
  </div>;
}

export default Lista;
