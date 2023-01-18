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
  dName,
  antall,
  art,
}) => {
  return (
    <>
      <div className="container">
        <Image src={img} alt="" />
        <h1 className="card-header">{title}</h1>
        {type && <p className="text">Type: {type}</p>}
        <p className="text">{dim}</p>
        {antTenner && <p className="text">Antall tenner: {antTenner}</p>}
        {antMaskin && <p className="text">Antall i maskin: {antMaskin}</p>}
        {maskin && <p className="text">Maskin: {maskin}</p>}
        {antall && <p className="text">Antall lager: {antall}</p>}
        {dName && <p className="text">Datanavn: {dName}</p>}
        {art && <p className="text">Art.nr: {art}</p>}
      </div>
      <style jsx>
        {`
          .container {
            width: 18rem;
            height: auto;
            background: var(--primary);
            padding: 1rem;
            margin-right: 2rem;
            border-radius: 15px;
          }
          .card-header {
            font-weight: 600;
            margin: 0.5rem 0;
            font-size: 1rem;
            color: var(--text2);
          }
          .text {
            font-style: italic;
            color: var(--middle);
            font-size: 0.8rem;
          }
          @media only screen and (max-width: 1000px) {
            .container {
              height: auto;
            }
          }
        `}
      </style>
    </>
  );
};

export default ToolImageCard;
