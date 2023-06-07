import React from 'react';

function Card(props) {
  console.log(props.id)
  return (
    <div className="row featurette">
      {props.item.id % 2 === 0 ? (
        <>
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Mensaje en una botella.{" "}
              <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to give
              you an idea of how this layout would work with some actual real-world
              content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1" key={props.key} >
            <img
              src="https://img.freepik.com/vector-gratis/ejemplo-lindo-icono-vector-historieta-ballena-concepto-icono-naturaleza-animal-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3706.jpg?w=2000"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </>
      ) : (
        <>
          <div className="col-md-7 order-md-1" key={props.key}>
            <h2 className="featurette-heading fw-normal lh-1">
              Mensaje en una botella.{" "}
              <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to give
              you an idea of how this layout would work with some actual real-world
              content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-2">
            <img
              src="https://img.freepik.com/vector-gratis/ejemplo-lindo-icono-vector-historieta-ballena-concepto-icono-naturaleza-animal-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3706.jpg?w=2000"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </>
      )}
      <hr className="featurette-divider" />
    </div>
  );
}

export default Card;
