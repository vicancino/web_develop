import React from "react";
import './styles.css'
function persona(props) {
  return (
    <>
      <div className="col container-img">
        <img className="rounded-circle" src={props.img} />
        <div>
          <h2 className="subtitle">{props.name}</h2>
          <p className="description">{props.descripcion}</p>
        </div>
      </div>
    </>
  );
}

export default persona;
