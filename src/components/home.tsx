import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./home.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



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
        <div className="container">
          <div className="row">
            <div className="col">
              <Card style={{ width: '18rem', height: '25rem' }}>
                <div className="image-overlay">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <div className="overlay-text">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card style={{ width: '18rem', height: '25rem' }}>
                <div className="image-overlay">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <div className="overlay-text">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card style={{ width: '18rem', height: '25rem' }}>
                <div className="image-overlay">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <div className="overlay-text">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card style={{ width: '18rem', height: '25rem' }}>
                <div className="image-overlay">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <div className="overlay-text">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Card style={{ width: '18rem', height: '25rem' }}>
                <div className="image-overlay">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <div className="overlay-text">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card style={{ width: '18rem', height: '25rem' }}>
                <div className="image-overlay">
                  <Card.Img variant="top" src="holder.js/100px1000" />
                  <div className="overlay-text">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card style={{ width: '18rem', height: '25rem' }}>
                <div className="image-overlay">
                  <Card.Img src="src\assets\home_images\ig_noti.jpg" />
                  <div className="overlay-text">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card>
                  <Card.Img variant="top" src="src\assets\home_images\ig_noti.jpg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
