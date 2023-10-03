import React, { cloneElement } from "react";
import Person from "./persona"
import Data_personas from './data_personas'
import '../../styles.css'; 

function about() {
      return (
    <>
    <h1 className="about-Title">Profesores</h1>
    <div className='row'>
    {Data_personas.map(persona => <Person name={persona.nombre} img={persona.imagen} descripcion = {persona.descripcion}></Person>)}
    </div>
    <h1 className="about-Title">Ayudantes</h1>
    <div className="row">
    {Data_personas.map(persona => <Person name={persona.nombre} img={persona.imagen} descripcion = {persona.descripcion}></Person>)}
    </div>
    </>
  )
}

export default about;
