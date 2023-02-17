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
  price,
}) => {
  return (
    <>
      <div className="container">
        <Image src={img} alt="" />
        <div className="text-box">
          <h1 className="card-header">{title}</h1>
          {type && <p className="text">Type: {type}</p>}
          <p className="text">Dimensjon: {dim}</p>
          {antTenner && <p className="text">Antall tenner: {antTenner}</p>}
          {antMaskin && <p className="text">Antall i maskin: {antMaskin}</p>}
          {maskin && <p className="text">Maskin: {maskin}</p>}
          {antall && <p className="text">Antall lager: {antall}</p>}
          {dName && <p className="text">Datanavn: {dName}</p>}
          {price && <p className="text">pris: {price}</p>}
          {art && <p className="text">Art.nr: {art}</p>}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 18rem;
            height: auto;
            background: var(--primary);

            margin-right: 2rem;
          }
          .card-header {
            font-weight: 600;
            margin: 0.5rem 0;
            font-size: 1rem;
            color: var(--text2);
          }
          .text {
            font-style: italic;
            color: var(--text3);
            font-size: 0.8rem;
            font-weight: 600;
          }
          .text-box {
            padding: 0.5rem;
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
