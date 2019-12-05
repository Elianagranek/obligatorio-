import React from "react";
import Actividad from "./actividad";
import { Row, Container } from "react-bootstrap";

class Services extends React.Component {
  render() {
    return (
      <div className="services" id="services">
        <div className="serv">
          <h3
            className="display-3 text-center"
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              paddingTop: "1.5%"
            }}
          >
            {" "}
            Que hago?
          </h3>
          <Container>
            <Row className="tarjetas">
              <Actividad
                img="./imagenes/talleres.png"
                title="Talleres de Escritura"
                text="Espacios para desarrollar la escritura creativa en adultos"
              />
              <Actividad
                img="./imagenes/escritura.png"
                title="Escritura"
                text="Desarrollo de cuentos, cuentos cortos y poemas"
              />
              <Actividad
                img="./imagenes/entrevista.png"
                title="Redacción"
                text="Realización de entrevistas y redacción de articulos en
              base a las mismas"
              />
              <Actividad
                img="./imagenes/Edicion.png"
                title="Edición de Textos"
                text="Correción y edición de textos"
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Services;
