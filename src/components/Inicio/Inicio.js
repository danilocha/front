import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import Lista from "./Lista";
import axios from "axios";

const Inicio = () => {
  const [ids, guardarIds] = useState([]);
  const traerIds = async () => {
    const registros = await axios.get("http://prueba.geinsoft.com/propuestas");

    guardarIds(registros.data.reverse());
  };

  traerIds();
  const contenidoPagina = ids ? (
    <Lista ids={ids} />
  ) : (
    <Spinner mensaje={"estamos obteniendo la Lista"} />
  );
  return (
    <>
      <h1 className="text-center my-5 ">Bienvenido a scrAPPing</h1>
      <table className="table table-striped mb-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">identificador</th>
            <th scope="col">Titulo</th>
            <th scope="col">oportunidad</th>
          </tr>
        </thead>

        <tbody>{contenidoPagina}</tbody>
      </table>
    </>
  );
};

export default Inicio;
