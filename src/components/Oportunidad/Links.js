import React from "react";

const Links = (docs) => {
  return (
    <>
      <h2>Lista de Documentos</h2>
      {docs.docs.map((doc, index) => {
        const id = doc.idDoc.split("(");
        const idFinal = id[1].split(")");

        const link =
          id[0] === "javascript:downloadFolderZip"
            ? `https://www.grants.gov/grantsws/rest/opportunity/folder/download/${idFinal[0]}`
            : `https://www.grants.gov/grantsws/rest/opportunity/att/download/${idFinal[0]}`;

        return (
          <div key={index}>
            <h3>{doc.fileDescription}</h3>

            <a href={link} className="btn btn-primary">
              Descargar
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Links;
