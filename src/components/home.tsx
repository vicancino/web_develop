import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./home.css"
import dataNoticias from "./data_noticia"
import Noticia from "./noticia"


function home() {
  return (
    <>
      <div>
        <div className="Titulo">
          <h1>Aspectos generales</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean dignissim tortor vitae lorem pulvinar tempus. Cras venenatis est eget mi euismod sagittis.
            Donec dapibus diam vel elit consectetur, quis aliquam enim rutrum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque ipsum lorem, sodales ut porta sed, accumsan nec massa.
            Sed id sem eget felis sodales luctus a ut sem. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Maecenas vel lectus dui. Vestibulum nec nibh et est pulvinar
            fringilla vitae ut mauris. Aenean at leo eget neque efficitur imperdiet et sed libero. Aenean et neque quam.
            Ut luctus enim interdum gravida lacinia. Sed condimentum mauris et elit ultricies semper.
            Mauris consequat lorem sed lectus facilisis rutrum.
          </p>
        </div>
        <div className="sub_titulo">
          <h2>Noticias</h2>
        </div>
        <div className = "container">
          <div className = "row">
            {dataNoticias.map(noticia =>
              <Noticia Img={noticia.Img} title={noticia.title} desc={noticia.desc}></Noticia>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
