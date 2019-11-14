import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class Obligatorio extends Reacts.Component {
render () { 
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <a className="navbar-brand" href="#"><img src="./imagenes/logo.png" alt="Logo de Meet me "/></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end font-weight-bold">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link-active pr-2 pt-2" href="#">Inicio</a>
                            <a className="nav-item nav-link" href="#">Sobre mi</a>
                            <a className="nav-item nav-link" href="#">Que hago?</a>
                            <a className="nav-item nav-link" href="#">Experiencia</a>
                            <a className="nav-item nav-link" href="#">Trabajos</a>
                            <a className="nav-item nav-link" href="#">Contacto</a>
                        </div>
                    </div>
                </nav> 
                <div className= "foto-container">
                    <img src="./imagenes/background.jpg" className="img-fluid" alt="Responsive image" z-index={0}></img>
                    <div className="foto-container-text">
                        <h3 className="display-3 font-italic text-center"> Yo soy</h3>
                        <h2 className="display-2 text-center"> Carol Milkewitz</h2>
                        <h4 className="display-4 font-italic text-center"> Escritora y Periodista</h4>
                        <div className= "botones-container">
                            <div>
                                <button type="button" className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></button>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-4" type="submit" style="z-index: 1; margin-left: 28%;">SOLICITE UN PRESUPUESTO</button>
                    </div>
                </div>
            </header>
        <div className="introduction">
            <div className="container-margin">
                <div className="row" style="margin-right: 0px !important; margin-left: 0px !important;margin-top: 7% !important;">
                    <div className="col">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <img
                            src="./imagenes/foto perfil.jpg" style="margin-left: 5%;"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <h1>Hola Chicos!</h1>
                        <dl className="row">
                            <p style= "margin-right: 12%;text-align: justify;"> Licenciada en Comunicación. Soy redactora, docente y autora de Adronitis (Premio de Narrativa Joven 2015, Casa de los Escritores). 
                            He participado en publicaciones de Uruguay, Argentina, España y Estados Unidos. En 2018 obtuve una mención en el Concurso Nacional de Poesía Joven Pablo Neruda.</p>
                            <dt className="col-sm-3">Nombre:</dt>
                            <dd className="col-sm-9">Carol Milkewitz</dd>
                            <dt className="col-sm-3"> Edad:</dt>
                            <dd className="col-sm-9">25</dd>
                            <dt className="col-sm-3">Experiencia:</dt>
                            <dd className="col-sm-9"> 4 Years </dd>
                            <dt className="col-sm-3 text-truncate">Pais:</dt>
                            <dd className="col-sm-9"> Uruguay</dd>
                            <dt className="col-sm-3">Ciudad:</dt>
                            <dd className="col-sm-9"> Montevideo</dd> 
                            <dt className="col-sm-3">e-mail:</dt>
                            <dd className="col-sm-9"> carolmilkewitz@hotmail.com</dd>
                            <dt className="col-sm-3">Teléfono:</dt>
                            <dd className="col-sm-9"> +(598) 98 679 948</dd>
                            <dt className="col-sm-3">Freelance:</dt>
                            <dd className="col-sm-9"> Available</dd>
                        </dl>
                        <button className="btn btn-primary ml-1 btn-lg" type="submit">Descargar CV</button>     
                        <button className="btn btn-danger ml-1 btn-lg" type="submit">Contactame</button>            
                    </div>
                </div>
            </div>
        </div>
        <div className= "services">
        <div className="container-services">
            <h3 className="display-3 text-center" style="font-size: 40px;font-weight: bold;padding-top: 1.5%;"> Que hago?</h3>
            <div className= "row" style="margin-left: 5%;padding-bottom: 3%;padding-top: 1.5%;margin-right: 5%">
                <div className="col">
                    <div className="shadow rounded" style="width:17rem">
                        <div className="card" style="width: 17rem;border-radius: 5%;">
                            <img className="card-img-top" src="./imagenes/talleres.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <h6 className="card-title text-center">Talleres de Escritura</h6>
                                <p className="card-text text-center">Espacios para desarrollar la escritura creativa en adultos</p>
                            </div>
                        </div> 
                    </div>      
                </div>
                <div className="col">
                    <div className="shadow rounded" style="width:17rem">
                        <div className="card" style="width: 17rem;border-radius: 5%;">
                            <img className="card-img-top" src="./imagenes/escritura.png" alt="Card image cap"></img>
                            <div className="card-body">
                            <h6 className="card-title text-center">Escritura</h6>
                            <p className="card-text text-center">Desarrollo de cuentos, cuentos cortos y poemas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="shadow rounded" style="width:17rem">
                        <div className="card" style="width: 17rem;border-radius: 5%;">
                            <img className="card-img-top" src="./imagenes/entrevista.png" alt="Card image cap"></img>
                            <div className="card-body">
                            <h6 class ="card-title text-center">Redacción</h6>
                            <p className="card-text text-center">Realización de entrevistas y redacción de articulos en base a las mismas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="shadow rounded" style="width:17rem">
                        <div className="card" style="width: 17rem;border-radius: 5%;">
                            <img className="card-img-top" src="./imagenes/Edicion.png" alt="Card image cap"></img>
                            <div className="card-body">
                            <h6 class ="card-title text-center">Edición de Textos</h6>
                            <p className="card-text text-center">Correción y edición de textos</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div> 
        </div> 
        </div>
        <div className="container">
            <div className="row" style="padding-top: 5%;padding-left: 20%;">
                <div className="col">
                    <ul className="cv">
                        <li>
                            <div className= "fondo">
                                <span className= "icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                </span>
                            </div>
                            <h4 className="font-weight-bold" style="font-size: 20px;margin-left: 10%;">EDUCACIÓN</h4>
                        </li>
                        <li className="lista">
                            <div className= "element-1">
                            </div>
                            <div className="info">
                                <h3 className="font-weight-bold" style="font-size: 15px;">Licenciatura en Comunicación, opción Periodismo- Universidad ORT</h3>
                                <h2 style="font-size: 10px;">2012-2015</h2>
                                <p>Expenses as material breeding insisted building to in.</p>
                            </div>
                        </li>
                        <li className="lista">
                            <div className= "element-1">
                            </div>
                            <div className="info" >
                                <h3 className="font-weight-bold" style="font-size: 15px;">Curso completo de dactilografía computarizada-Academias Pitman</h3>
                                <h2 style="font-size: 10px;">2013</h2>
                                <p>Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor</p> 
                            </div>
                        </li>
                        <li className="lista">
                            <div className= "element-1">
                            </div>
                            <div className="info" >
                                <h3 className="font-weight-bold" style="font-size: 15px;">Curso completo de Portugués-ICUB</h3>
                                <h2 style="font-size: 10px;">2006-2009</h2>
                                <p>Expenses as material breeding insisted building to in. </p> 
                            </div>
                        </li>
                    </ul> 
                </div>
                <div className="col">
                <ul className="cv">
                        <li>
                            <div className= "fondo">
                                <span className= "icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </span>
                            </div>
                            <h4 className="font-weight-bold" style="font-size: 20px;margin-left: 10%;">EXPERIENCIA</h4>
                        </li>
                        <li className="lista">
                            <div className= "element-1">
                            </div>
                            <div className="info">
                                <h3 className="font-weight-bold" style="font-size: 15px;">Universidad ORT- Redactora </h3>
                                <h2 style="font-size: 12px;">Febrero 2017-Actualidad</h2>
                                <p>Expenses as material breeding insisted building to in. </p>
                            </div>
                        </li>
                        <li className="lista">
                            <div className= "element-1">
                            </div>
                            <div className="info" >
                                <h3 className="font-weight-bold" style="font-size: 15px;"> Escuela Integral-Docente</h3>
                                <h2 style="font-size: 10px;">Marzo 2018-Febrero 2019</h2>
                                <p>A cargo del Taller de Literatura para los niños de 1ºA, 1ºB, 2.ºA y 2ºB de la Escuela Integral.</p> 
                            </div>
                        </li>
                        <li className="lista">
                            <div className= "element-1">
                            </div>
                            <div className="info" >
                                <h3 className="font-weight-bold" style="font-size: 15px;">TedxMontevideo- Redactora</h3>
                                <h2 style="font-size: 10px;">2018</h2>
                                <p>Participación en la organización de las charlas TEDxMontevideo 2018 ("La Revolución Creativa").</p> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="trabajos">
            <div className= "trabajos-container">
                <h3 className="display-3" style="font-weight:bold; text-align: center; position:absolute"> Mis trabajos</h3>
                <div className="row align-items-center" style="position: absolute;margin-top: 8%;margin-left: 38%;">
                    <button type="button" className="btn btn-outline-primary ml-1">Todos</button>
                    <button type="button" className="btn btn-primary ml-1" >Cuentos</button>
                    <button type="button" className="btn btn-primary ml-1">Poemas</button>
                    <button type="button" className="btn btn-primary ml-1">Articulos</button>
                </div>
                <div className="imagenes">
                    <div className="row">
                        <div className="col ml-1">
                            <img src="./imagenes/tabla1.jpg" className="img-fluid"alt="Responsive image"></img>
                        </div>
                        <div className="col ml-1">
                            <img
                            src="./imagenes/tabla 2.jpg"
                            className="img-fluid"
                            alt="Responsive image"></img>
                        </div>
                        <div className="col ml-1">
                            <img
                            src="./imagenes/img-3.jpg"
                            className="img-fluid"
                            alt="Responsive image"></img>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col ml-1">
                            <img
                            src="./imagenes/img-4.jpg"
                            className="img-fluid"
                            alt="Responsive image"></img>
                        </div>
                        <div className="col ml-1">
                            <img
                            src="./imagenes/img-5.jpg"
                            className="img-fluid"
                            alt="Responsive image"></img>
                        </div>
                        <div className="col ml-1">
                            <img
                            src="./imagenes/img-6.jpg"
                            className="img-fluid"
                            alt="Responsive image"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className= "fotos-container" style="padding-top: 0%;">
            <img src="./imagenes/libros.jpg" className="img-fluid" alt="Responsive image" z-index={0} style="opacity: 0.6;position: absolute;"></img>
            <div className= "row" style="width:100% ; z-index:1;padding: 5%;margin-left: 7%;">
                <div className="col ml-1">
                    <span className= "icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </span>
                    <h5 className="font-weight-bold">20</h5>
                    <h6>Proyectos en proceso </h6>
                </div>
                <div className="col ml-1">
                    <span className= "icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </span>
                    <h5 className="font-weight-bold">150</h5>
                    <h6>Proyectos realizados</h6>
                </div>
                <div className="col ml-1">
                    <span className= "icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                    </span>
                    <h5 className="font-weight-bold">30</h5>
                    <h6>Premios recibidos</h6>
                </div>
                <div className="col ml-1">
                    <span className= "icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </span>
                    <h5 className="font-weight-bold">80</h5>
                    <h6>Clientes satisfechos</h6>
                </div>
            </div>
        </div>
        <div className="formulario-container" style="margin-top: 7%;padding-bottom: 3%">
            <div className="shadow p-3 mb-5 bg-white rounded" style= "width:76%;margin-left:12%;margin-right: 12%;">
                <div className= "final-container" style=" padding: 5%">
                    <div className="row mb-4">
                        <div className="col">
                            <h6 className="font-weight-bold" style="font-size: 30px;" > FORMULARIO DE CONTACTO  </h6>
                            <form>
                                <div className="form-row">
                                    <div className="col">
                                    <input type="text" className="form-control mb-4" placeholder="Nombre"></input>
                                    </div>
                                    <div className="col">
                                    <input type="email" className="form-control mb-4" placeholder="Email"></input>
                                    </div>
                                </div>
                                <input className="form-control mb-4" type="text" placeholder="Asunto"></input>
                                <textarea className="form-control mb-4" id="Tu mensaje"  placeholder="Tu mensaje" ></textarea>    
                            </form>
                            <button className="btn btn-primary" type="submit">ENVIAR MENSAJE</button>
                        </div>
                        <div className="col">
                            <h6 className="font-weight-bold" style="font-size: 30px;" > INFORMACION DE CONTACTO  </h6>
                            <div className= "contacto-container" style="border: 1px solid #8a777773;">
                                <ul style="list-style: none;">
                                    <li style="margin-top: 2%;">
                                        <span className= "icon">   
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin" style="margin-top: 0.5%; margin-left:-3%"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>    
                                        </span>
                                        <p>Montevideo,UY</p>
                                    </li>
                                    <li>
                                        <span className= "icon"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail" style="margin-top: 4%; margin-left:-3%"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </span>
                                        <p>carolmilkewitz@hotmail.com</p>
                                        <p>carolmilkewitz@gmail.com</p>
                                    </li>
                                    <li>
                                        <span className= "icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone" style="margin-top: 4%; margin-left:-3%"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </span>
                                        <p>+ (598) 98679948</p>
                                        <p>+ (598) 93767484</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <img src="./imagenes/Mapa.JPG" className="img-fluid P-2" alt="Responsive image"></img>
                </div>
            </div>
        </div>
         <div className="container" style="background-color:#1c1c20;max-width:100%;padding:3%;">
            <footer className= "footer-container">
                <div className= "botones-container" style="
                margin-left: 33%;">
                    <div>
                        <button type="button" className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></button>
                    </div>
                </div>
                <p>Copyright © 2018 UIdeck All Right Reserved</p>
            </footer>
        </div>
        </div>   
    )
}}


ReactDOM.render(<Obligatorio/>, document.getElementById("root"));