import logo from "../img/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NuestraEmpresa from "./NuestraEmpresa";
import App from "../App";
import Calidad from "./Calidad";
import Contacto from "./Contacto";

function Navnbar() {
  return (
    <Router>
      <div classname="Navnbar">
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light sticky-top "
          id="navbar"
        >
          <div class="container justify-content-lg-center">
            <a class="navbar-brand" href="#">
              {" "}
              <img src={logo} alt="" width="" height=""></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav">
                <li class="navItem">
                  <Link
                    class="nav-link active h5"
                    aria-current="page"
                    to="/App"
                  >
                    <i class="fas fa-home"></i>Inicio
                  </Link>
                </li>
                <li class="navItem">
                  <Link
                    class="nav-link active h5"
                    aria-current="page"
                    to="/NuestraEmpresa"
                  >
                    <i class="fas fa-user-tie"></i>Nuestra Empresa
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link h5" to="/Calidad">
                    <i class="fas fa-clipboard-check"></i> Calidad
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link h5" to="/Contacto">
                    <i class="fas fa-phone-alt"></i> Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="./App">
            <App />
          </Route>
          <Route path="/NuestraEmpresa" exact>
            <NuestraEmpresa />
          </Route>
          <Route path="/Calidad">
            <Calidad />
          </Route>
          <Route path="/Contacto">
            <Contacto />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navnbar;

