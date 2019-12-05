import React from "react";
import { Col, Row, Container } from "react-bootstrap";

class Experiencia extends React.Component {
  render() {
    return (
      <Container id="experiencia">
        <Row className="exp">
          <Col>
            <ul className="cv">
              <li>
                <div className="fondo">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-book"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </span>
                </div>
                <h4
                  className="font-weight-bold"
                  style={{ fontSize: "20px", marginLeft: "10%" }}
                >
                  EDUCACIÓN
                </h4>
              </li>
              <li className="lista">
                <div className="element-1"></div>
                <div className="info">
                  <h3 className="font-weight-bold" style={{ fontSize: "15px" }}>
                    Licenciatura en Comunicación, opción Periodismo- Universidad
                    ORT
                  </h3>
                  <h2 style={{ fontSize: "10px" }}>2012-2015</h2>
                  <p>Expenses as material breeding insisted building to in.</p>
                </div>
              </li>
              <li className="lista">
                <div className="element-1"></div>
                <div className="info">
                  <h3 className="font-weight-bold" style={{ fontSize: "15px" }}>
                    Curso completo de dactilografía computarizada-Academias
                    Pitman
                  </h3>
                  <h2 style={{ fontSize: "10px" }}>2013</h2>
                  <p>
                    Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor
                  </p>
                </div>
              </li>
              <li className="lista">
                <div className="element-1"></div>
                <div className="info">
                  <h3 className="font-weight-bold" style={{ fontSize: "15px" }}>
                    Curso completo de Portugués-ICUB
                  </h3>
                  <h2 style={{ fontSize: "10px" }}>2006-2009</h2>
                  <p>Expenses as material breeding insisted building to in. </p>
                </div>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="cv">
              <li>
                <div className="fondo">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-briefcase"
                    >
                      <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </span>
                </div>
                <h4
                  className="font-weight-bold"
                  style={{ fontSize: "20px", marginLeft: "10%" }}
                >
                  EXPERIENCIA
                </h4>
              </li>
              <li className="lista">
                <div className="element-1"></div>
                <div className="info">
                  <h3 className="font-weight-bold" style={{ fontSize: "15px" }}>
                    Universidad ORT- Redactora{" "}
                  </h3>
                  <h2 style={{ fontSize: "12px" }}>Febrero 2017-Actualidad</h2>
                  <p>Expenses as material breeding insisted building to in. </p>
                </div>
              </li>
              <li className="lista">
                <div className="element-1"></div>
                <div className="info">
                  <h3 className="font-weight-bold" style={{ fontSize: "15px" }}>
                    {" "}
                    Escuela Integral-Docente
                  </h3>
                  <h2 style={{ fontSize: "10px" }}>Marzo 2018-Febrero 2019</h2>
                  <p>
                    A cargo del Taller de Literatura para los niños de 1ºA, 1ºB,
                    2.ºA y 2ºB de la Escuela Integral.
                  </p>
                </div>
              </li>
              <li className="lista">
                <div className="element-1"></div>
                <div className="info">
                  <h3 className="font-weight-bold" style={{ fontSize: "15px" }}>
                    TedxMontevideo- Redactora
                  </h3>
                  <h2 style={{ fontSize: "10px" }}>2018</h2>
                  <p>
                    Participación en la organización de las charlas
                    TEDxMontevideo 2018 ("La Revolución Creativa").
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Experiencia;
