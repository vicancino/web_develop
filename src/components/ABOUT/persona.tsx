import React from "react";
import '../../styles.css'

function persona(props) {
  return (
    <>
      <div className="col about-container-img">
        <img className="rounded-circle" src={props.img}/>
        <div>
          <h2 className="about-subtitle">{props.name}</h2>
          <p className="descrip">{props.descripcion}</p>
        </div>
      </div>
    </>
  );
}

export default persona;
