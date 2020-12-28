import { createElement } from "react";

function CenterRow(props) {
  return (
    <div className="CenterRow">
      <div class="row text-center">
        <div class="col-lg-8 p-3" id="proyectos">
          <h1>
            <i class="fas fa-check-circle"></i> Proyectos Exitosos
          </h1>
          <p class="num">
            200 <i class="fad fa-award"></i>
          </p>
          <p class="h5">Proyectos realizados de forma exitosa.</p>
        </div>
        <div class="col-lg-4">
          <img src={props.imagen} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
}
export default CenterRow;

