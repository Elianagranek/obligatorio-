import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <a class="navbar-brand">
            <img src="./imagenes/logo.png" alt="Logo de Meet me " />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end font-weight-bold">
            <div class="navbar-nav">
              <a class="nav-item nav-link-active pr-2 pt-2" href="#inicio">
                Inicio
              </a>
              <a class="nav-item nav-link" href="#intro">
                Sobre mi
              </a>
              <a class="nav-item nav-link" href="#services">
                Que hago?
              </a>
              <a class="nav-item nav-link" href="#experiencia">
                Experiencia
              </a>
              <a class="nav-item nav-link" href="#trabajos">
                Trabajos
              </a>
              <a class="nav-item nav-link" href="#contacto">
                Contacto
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
