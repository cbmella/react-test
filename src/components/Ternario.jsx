import React from "react";

function Ternario(props) {
  const temperature = 20;
  const max_temp = props.max_temp;
  return (
    <div>
      <h1>Ejemplo ternario (temp max - {max_temp})</h1>
      <p className={`alert ${temperature  > max_temp ?  'alert-danger' : 'alert-success'}`}>
        {temperature > max_temp
          ? "es mayor a " + temperature + " que calor!"
          : "es menor a " + temperature + " esta fresco :)"}
      </p>
    </div>
  );
}

export default Ternario;
