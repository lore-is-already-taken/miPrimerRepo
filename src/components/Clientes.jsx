import img1 from "../img/logo-anglo-american.png";
import img2 from "../img/logo-explo-mineras.png";
import img3 from "../img/coemin.png";
import img4 from "../img/atacama-kozan.png";
import img5 from "../img/logo-nittetsu.png";
import img6 from "../img/bhp-spence.jpg";

function Clientes() {
  return (
    <div className="Clientes">
      <h2 class="text-center h1">Empresas que confian en nosotros</h2>
      <div class="row mt-lg-5" id="logo-clientes">
        <div class="col-lg-2 col-4 align-self-center">
          <img src={img1} alt="" width="100%" />
        </div>
        <div class="col-lg-2 col-4 align-self-center">
          <img src={img2} alt="" width="100%" />
        </div>
        <div class="col-lg-2 col-4 align-self-center">
          <img src={img3} alt="" width="100%" />
        </div>
        <div class="col-lg-2 col-4 align-self-center">
          <img src={img4} alt="" width="100%" />
        </div>
        <div class="col-lg-2 col-4 align-self-center">
          <img src={img5} alt="" width="100%" />
        </div>
        <div class="col-lg-2 col-4 align-self-center">
          <img src={img6} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Clientes;

