import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import Informacion from "./Informacion";

const Oportunidad = (props) => {
  const [datos, guardarDatos] = useState();
  const id = props.match.params.id;
  useEffect(() => {
    const registro = async () => {
      const $registro = await axios.get(
        `https://prueba.geinsoft.com/propuestas/${id}`
      );
      console.log($registro.data[0].data);
      guardarDatos($registro.data[0].data);
    };
    registro();
  }, []);

  console.log(datos);
  const contenidoPagina = datos ? (
    <Informacion data={datos} />
  ) : (
    <Spinner mensaje={"estamos obteniendo la informacion"} />
  );
  return (
    <>
      <h1 className="text-center my-5">Informacion de la oportunidad</h1>
      {contenidoPagina}
    </>
  );
};

export default Oportunidad;
