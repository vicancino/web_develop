import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Outlet, Link } from "react-router-dom";

function carousel_event(props) {
  return (
 
          <Carousel.Item className="Slider">
            <Link to="/about">
              <img
                className="d-block w-100"
                src={props.image}
                alt="Imagen"
              />
              <Carousel.Caption className="Slider">
                <h3>{props.title}</h3>
                <p>
                  {props.desc}
                </p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          
  )
}

export default carousel_event