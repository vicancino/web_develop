import React from "react";
import "../styles.css"

function Actvididades_cards() {
  return (
    <div className="actv-body">
      <div className="actv-card">
        <img src="src/assets/actividad_1.png" alt="" className="actv-img" />
        <div className="actv-desc">
          <h1 className="act-title">Actividad</h1>
          <p className="act-subtitle">Subtitulo</p>
          <p className="act-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            hic reprehenderit laudantium sed, inventore illum facilis
            architecto, quis neque nihil nobis numquam officia suscipit fuga
            magni nam veritatis beatae aliquam!
          </p>
          <button className="act-button">Ver mas</button>
        </div>
      </div>
    </div>
  );
}

export default Actvididades_cards;
