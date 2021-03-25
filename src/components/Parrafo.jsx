import React from "react";

const Parrafo = () => {
  const saludo = "soy un saludo";
  const imagen =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD05vl823kj2LkohTOoHcMc6g_OEBe-CFFUg&usqp=CAU";
  return (
    <div className="parrafo">
      <h2>Hoola {saludo}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta modi
        molestiae neque architecto sunt ipsam sint natus perferendis nostrum
        facilis impedit sequi expedita quae unde, repellat minus itaque
        reiciendis minima?
      </p>
      <img src={imagen} alt="imagen" />
    </div>
  );
};

export default Parrafo;
