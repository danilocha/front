import React from "react";
import Links from "./Links";

const Informacion = ({ data }) => {
  const linksDocumentos = data.docs ? (
    <Links docs={data.docs} />
  ) : (
    "no hay documentos"
  );

  return (
    <div className="row mb-5">
      <div className="card p-2 my-2 col-md-12">
        <h2 className="text-center card-title">General Info</h2>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {data.generalInfo.map((info, index) => (
              <li className="list-group-item" key={index}>
                {info.titulo} {info.contenido}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card p-2 my-2 col-md-12 ">
        <h2 className="text-center card-title">Elegibility</h2>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {data.elegibility.map((info, index) => (
              <li className="list-group-item" key={index}>
                {info.titulo} {info.contenido}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card p-2 my-2 col-md-12">
        <h2 className="text-center card-title">Aditional Information</h2>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {data.additionalInformation.map((info, index) => (
              <li className="list-group-item" key={index}>
                {info.titulo} {info.contenido}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card p-2 my-2 col-md-12">{linksDocumentos}</div>
    </div>
  );
};

export default Informacion;
