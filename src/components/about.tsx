import React, { cloneElement } from "react";
import "./about.css";

function about() {
  return (
    <>
      <div id="titulo">
        <h1>Profesorado</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="rounded-circle"
              src="src/assets/about_images/blank-person.jpg"
              alt="Generic"
            />
            <h2 className="subtitle">Primer Header</h2>
            <p className="paragraph">
              Descripcion del primer profesor esto puede incluir nombres fechas
              y roles principales
            </p>
          </div>
          <div className="col">
            <img
              className="rounded-circle"
              src="src/assets/about_images/blank-person.jpg"
              alt="Generic"
            />
            <h2 className="subtitle">Segundo Header</h2>
            <p className="paragraph">
              Descripcion del primer profesor esto puede incluir nombres fechas
              y roles principales
            </p>
          </div>
          <div className="col">
            <img
              className="rounded-circle"
              src="src/assets/about_images/blank-person.jpg"
              alt="Generic"
            />
            <h2 className="subtitle">Tercer Header</h2>
            <p className="paragraph">
              Descripcion del primer profesor esto puede incluir nombres fechas
              y roles principales
            </p>
          </div>
        </div>
      </div>
      <div id="titulo">
        <h1>Ayudantes de Laboratorio</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="rounded-circle"
              src="src/assets/about_images/blank-person.jpg"
              alt="Generic"
            />
            <h2 className="subtitle">Primer Header</h2>
            <p className="paragraph">
              Descripcion del primer profesor esto puede incluir nombres fechas
              y roles principales
            </p>
          </div>
          <div className="col">
            <img
              className="rounded-circle"
              src="src/assets/about_images/blank-person.jpg"
              alt="Generic"
            />
            <h2 className="subtitle">Segundo Header</h2>
            <p className="paragraph">
              Descripcion del primer profesor esto puede incluir nombres fechas
              y roles principales
            </p>
          </div>
          <div className="col">
            <img
              className="rounded-circle"
              src="src/assets/about_images/blank-person.jpg"
              alt="Generic"
            />
            <h2 className="subtitle">Tercer Header</h2>
            <p className="paragraph">
              Descripcion del primer profesor esto puede incluir nombres fechas
              y roles principales
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
