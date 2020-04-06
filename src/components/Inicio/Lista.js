import React from "react";
import { Link } from "react-router-dom";

const Lista = ({ ids }) => {
  return ids.map((id, index) => (
    <tr key={index}>
      <th scope="col">{index + 1}</th>
      <th scope="col">{id.id}</th>
      <th scope="col">{id.entidad}</th>
      <th scope="col">
        <Link className="btn btn-warning" to={`/oportunidad/${id.id}`}>
          Ver Oportunidad
        </Link>
      </th>
    </tr>
  ));
};

export default Lista;
