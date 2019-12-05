import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

class Trabajos extends React.Component {
  render() {
    return (
      <div className="trabajos" id="trabajos">
        <div className="trab">
          <h3
            className="display-3"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              position: "absolute"
            }}
          >
            {" "}
            Mis trabajos
          </h3>
          <Container>
            <Row className="work align-items-center">
              <Button variant="primary ml-1">Todos</Button>
              <Button variant="primary ml-1">Cuentos</Button>
              <Button variant="primary ml-1">Poemas</Button>
              <Button variant="primary ml-1">Articulos</Button>
            </Row>
            <div className="imagenes">
              <Row>
                <Col>
                  <img
                    src="./imagenes/tabla1.jpg"
                    className="img-fluid"
                    alt="Responsive image"
                  ></img>
                </Col>
                <Col>
                  <img
                    src="./imagenes/tabla 2.jpg"
                    className="img-fluid"
                    alt="Responsive image"
                  ></img>
                </Col>
                <Col>
                  <img
                    src="./imagenes/img-3.jpg"
                    className="img-fluid"
                    alt="Responsive image"
                  ></img>
                </Col>
              </Row>
              <Row className="jobs">
                <Col>
                  <img
                    src="./imagenes/img-4.jpg"
                    className="img-fluid"
                    alt="Responsive image"
                  ></img>
                </Col>
                <Col>
                  <img
                    src="./imagenes/img-5.jpg"
                    className="img-fluid"
                    alt="Responsive image"
                  ></img>
                </Col>
                <Col>
                  <img
                    src="./imagenes/img-6.jpg"
                    className="img-fluid"
                    alt="Responsive image"
                  ></img>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Trabajos;
