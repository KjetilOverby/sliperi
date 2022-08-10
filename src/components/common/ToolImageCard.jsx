import React from "react";
import Image from "next/image";

const ToolImageCard = ({
  title,
  img,
  type,
  dim,
  antTenner,
  antMaskin,
  maskin,
}) => {
  return (
    <>
      <div className="container">
        <Image src={img} />
        <h1 className="card-header">{title}</h1>
        {type && <p className="text">Type: {type}</p>}
        <p className="text">{dim}</p>
        {antTenner && <p className="text">antall tenner: {antTenner}</p>}
        {antMaskin && <p className="text">Antall i maskin: {antMaskin}</p>}
        {maskin && <p className="text">Maskin: {maskin}</p>}
      </div>
      <style jsx>
        {`
          .container {
            width: 20rem;
            height: 25rem;
            background: lightgrey;
            padding: 1rem;
            margin-right: 2rem;
          }
          .card-header {
            font-weight: 600;
            margin: 0.5rem 0;
            font-size: 1rem;
          }
          .text {
            font-style: italic;
            color: grey;
          }
        `}
      </style>
    </>
  );
};

export default ToolImageCard;
