import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Header from "./components/header";
import Introduccion from "./components/introduccion";
import Services from "./components/services";
import Inicio from "./components/inicio";
import Experiencia from "./components/experiencia";
import Trabajos from "./components/trabajos";
import Resumen from "./components/resumen";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import "./index.css";

class Obligatorio extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Inicio />
        <Introduccion />
        <Services />
        <Experiencia />
        <Trabajos />
        <Resumen />
        <Contacto />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Obligatorio />, document.getElementById("root"));
