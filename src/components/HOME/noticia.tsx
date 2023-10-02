import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../../styles.css'

function noticia(props) {
  return (
    <div className="col">
      <div className="custom-card">
        <Card className="custom-card">
          <div className="image-overlay">
            <Card.Img src={props.Img} />
            <div className="overlay-text">
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default noticia;
