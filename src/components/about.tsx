import React, { cloneElement } from "react";
import "./about.css";
import Person from "./persona"
import Data_personas from './data_personas' 

function about() {
      return (
    <>
    <h1>Profesores</h1>
    <div className='row'>
    {Data_personas.map(persona => <Person name={persona.nombre} img={persona.imagen} descripcion = {persona.descripcion}></Person>)}
    </div>
    </>
  )
}

export default about;
