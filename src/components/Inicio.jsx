import React from "react";
import Row from "./Row.jsx";
import CenterRow from "./CenterRow.jsx";
import Clientes from "./Clientes.jsx";
import Slider from "./Slider.jsx";

import img1 from "../img/collage01.jpg";
import img2 from "../img/collage02.jpg";
import img3 from "../img/collage03.jpg";

export const Inicio = () => {
  return (
    <main>
      <Slider />
      <div class="container" id="main">
        <Row
          title="Experiencia"
          description="Más de 15 años de experiencia en el rubro de la minería."
          imagen={img1}
        />
        <hr class="mt-lg-5 mb-lg-5" />
        <CenterRow imagen={img3} />
        <hr class="mt-lg-5 mb-lg-5" />
        <Clientes />
        <hr class="mt-lg-5 mb-lg-4" />
        <Row
          title="Calidad"
          description="Resultados, procesos y servicios de primera calidad dentro del mercado."
          imagen={img2}
        />
      </div>
    </main>
  );
};
export default Inicio;
