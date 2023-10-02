import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function BasicExample() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">
                Quienes somos
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Carousel className="Slider">
          <Carousel.Item className="Slider">
            <Link to="/about">
              <img
                className="d-block w-100"
                src="src\assets\slider_1.png"
                alt="Primera Imagen"
              />
              <Carousel.Caption className="Slider">
                <h3>Conocenos!</h3>
                <p>
                  Acercate a nuestro equipo de trabajo y conoce a tus compañeros
                  de laboratorio
                </p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item className="Slider">
            <img
              className="d-block w-100"
              src="src\assets\slider_1.png"
              alt="Primera Imagen"
            />
            <Carousel.Caption className="Slider">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="Slider">
            <img
              className="d-block w-100"
              src="src\assets\slider_1.png"
              alt="Primera Imagen"
            />
            <Carousel.Caption className="Slider">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default BasicExample;
