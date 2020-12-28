import Footer from "./components/Footer.jsx";
import logo from "./img/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NuestraEmpresa from "./components/NuestraEmpresa";
import Inicio from "./components/Inicio";
import Calidad from "./components/Calidad";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div>
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
                      to="/components/Inicio"
                    >
                      <i class="fas fa-home"></i>Inicio
                    </Link>
                  </li>
                  <li class="navItem">
                    <Link
                      class="nav-link active h5"
                      aria-current="page"
                      to="/components/NuestraEmpresa"
                    >
                      <i class="fas fa-user-tie"></i>Nuestra Empresa
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active h5" to="/components/Calidad">
                      <i class="fas fa-clipboard-check"></i> Calidad
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active h5" to="/components/Contacto">
                      <i class="fas fa-phone-alt"></i> Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/components/Inicio">
              <Inicio />
            </Route>
            <Route path="/components/NuestraEmpresa" exact>
              <NuestraEmpresa />
            </Route>
            <Route path="/components/Calidad">
              <Calidad />
            </Route>
            <Route path="/components/Contacto">
              <Contacto />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
