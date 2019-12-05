import React from "react";
import { Col, Row, Container } from "react-bootstrap";

class Resumen extends React.Component {
  render() {
    return (
      <div className="fotos">
        <img
          src="./imagenes/libros.jpg"
          className="img-fluid"
          alt="Responsive image"
          z-index="{0}"
          style={{ opacity: "0.6", position: "absolute" }}
        />
        <Container>
          <Row className="resumen">
            <Col>
              <span className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={85}
                  height={85}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="blue"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-briefcase"
                >
                  <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <h5 className="font-weight-bold">20</h5>
              <h6>Proyectos en proceso </h6>
            </Col>
            <Col>
              <span className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={85}
                  height={85}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="blue"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-check-circle"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </span>
              <h5 className="font-weight-bold">150</h5>
              <h6>Proyectos realizados</h6>
            </Col>
            <Col>
              <span className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={85}
                  height={85}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="blue"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-award"
                >
                  <circle cx={12} cy={8} r={7} />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </span>
              <h5 className="font-weight-bold">30</h5>
              <h6>Premios recibidos</h6>
            </Col>
            <Col>
              <span className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={85}
                  height={85}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="blue"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-heart"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>
              <h5 className="font-weight-bold">80</h5>
              <h6>Clientes satisfechos</h6>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Resumen;
