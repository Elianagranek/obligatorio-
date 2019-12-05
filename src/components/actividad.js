import React from "react";
import { Col } from "react-bootstrap";

class Actividad extends React.Component {
  render() {
    const { img, title, text } = this.props;
    return (
      <Col>
        <div className="shadow rounded" style={{ width: "15rem" }}>
          <div className="card" style={{ width: "15rem", borderRadius: "5%" }}>
            <img className="card-img-top" src={img} alt="Card image cap"></img>
            <div className="card-body">
              <h6 className="card-title text-center">{title}</h6>
              <p className="card-text text-center">{text}</p>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default Actividad;
