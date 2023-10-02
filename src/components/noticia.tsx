import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function noticia (props) {
  return (
    <div className = "col">
        <Card style={{ width: '18rem', height: '25rem' }}>
                <div className="image-overlay">
                  <Card.Img variant="top" src= {props.Img} />
                  <div className="overlay-text">
                    <Card.Body>
                      <Card.Title>{props.title}</Card.Title>
                      <Card.Text>
                        {props.desc}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </div>
                </div>
        </Card>
    </div>
  )
}

export default noticia