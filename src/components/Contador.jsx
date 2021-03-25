import React, { useState } from "react";

function Contador() {
  // Declara una nueva variable de estado, que llamaremos 'count'.
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>clicks {count} </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Contador;
