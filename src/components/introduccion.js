import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

class Introduccion extends React.Component {
  render() {
    return (
      <div className="introduction" id="intro">
        <Container>
          <div className="int">
            <Row
              style={{
                marginRight: "0px !important",
                marginLeft: "0px !important",
                marginTop: "7% !important"
              }}
            >
              <Col>
                <div className="shadow p-3 mb-5 bg-white rounded">
                  <img src="./imagenes/foto perfil.jpg" />
                </div>
              </Col>
              <Col>
                <h1>Hola Chicos!</h1>
                <Row>
                  <p style={{ marginRight: "12%", textAlign: "justify" }}>
                    {" "}
                    Licenciada en Comunicación. Soy redactora, docente y autora
                    de Adronitis (Premio de Narrativa Joven 2015, Casa de los
                    Escritores). He participado en publicaciones de Uruguay,
                    Argentina, España y Estados Unidos. En 2018 obtuve una
                    mención en el Concurso Nacional de Poesía Joven Pablo
                    Neruda.
                  </p>
                  <Col sm={3}>Nombre:</Col>
                  <Col sm={9}>Carol Milkewitz</Col>
                  <Col sm={3}> Edad:</Col>
                  <Col sm={9}>25</Col>
                  <Col sm={3}>Experiencia:</Col>
                  <Col sm={9}> 4 Years </Col>
                  <Col sm={3}>Pais:</Col>
                  <Col sm={9}> Uruguay</Col>
                  <Col sm={3}>Ciudad:</Col>
                  <Col sm={9}> Montevideo</Col>
                  <Col sm={3}>e-mail:</Col>
                  <Col sm={9}> carolmilkewitz@hotmail.com</Col>
                  <Col sm={3}>Teléfono:</Col>
                  <Col sm={9}> +(598) 98 679 948</Col>
                  <Col sm={3}>Freelance:</Col>
                  <Col sm={9}> Available</Col>
                </Row>
                <Button variant="primary ml-1 btn-lg" type="submit">
                  Descargar CV
                </Button>
                <Button variant="danger ml-1 btn-lg" type="submit">
                  Contactame
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Introduccion;
