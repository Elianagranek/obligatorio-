import React from "react";
import { Button, Col, Row, Form, Container } from "react-bootstrap";

class Contacto extends React.Component {
  render() {
    return (
      <div className="formulario" id="contacto">
        <Container>
          <div
            className="shadow p-3 mb-5 bg-white rounded"
            style={{ width: "76%", marginLeft: "15%" }}
          >
            <Container>
              <div className="final">
                <Row className="cont">
                  <Col>
                    <h6
                      className="font-weight-bold"
                      style={{ fontSize: "30px" }}
                    >
                      {" "}
                      FORMULARIO DE CONTACTO
                    </h6>
                    <form>
                      <Form.Row>
                        <Col>
                          <input
                            type="text"
                            className="form-control mb-4"
                            placeholder="Nombre"
                          />
                        </Col>
                        <Col>
                          <input
                            type="email"
                            className="form-control mb-4"
                            placeholder="Email"
                          />
                        </Col>
                      </Form.Row>
                      <input
                        className="form-control mb-4"
                        type="text"
                        placeholder="Asunto"
                      />
                      <textarea
                        className="form-control mb-4"
                        id="Tu mensaje"
                        placeholder="Tu mensaje"
                        defaultValue={""}
                      />
                    </form>
                    <Button variant="primary mb-2 btn-lg" type="submit">
                      ENVIAR MENSAJE
                    </Button>
                  </Col>
                  <Col>
                    <h6
                      className="font-weight-bold"
                      style={{ fontSize: "30px" }}
                    >
                      {" "}
                      INFORMACION DE CONTACTO
                    </h6>
                    <div className="contacto">
                      <ul style={{ listStyle: "none" }}>
                        <li style={{ marginTop: "2%" }}>
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
                              className="feather feather-map-pin"
                              style={{ marginTop: "0.5%", marginLeft: "-3%" }}
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                          </span>
                          <p>Montevideo,UY</p>
                        </li>
                        <li>
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
                              className="feather feather-mail"
                              style={{ marginTop: "4%", marginLeft: "-3%" }}
                            >
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                          </span>
                          <p>carolmilkewitz@hotmail.com</p>
                          <p>carolmilkewitz@gmail.com</p>
                        </li>
                        <li>
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
                              className="feather feather-phone"
                              style={{ marginTop: "4%", marginLeft: "-3%" }}
                            >
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </span>
                          <p>+ (598) 98679948</p>
                          <p>+ (598) 93767484</p>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <img
                  src="./imagenes/Mapa.JPG"
                  className="img-fluid P-2"
                  alt="Responsive image"
                />
              </div>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contacto;
