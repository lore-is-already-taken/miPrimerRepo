function Row(props) {
  return (
    <div className="Row">
      <div class="row mt-5">
        <div class="col-lg-4">
          <img src={props.imagen} alt="" width="100%" />
        </div>
        <div class="col-lg-8 p-3">
          <h1>{props.title}</h1>
          <p class="h5">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Row;

