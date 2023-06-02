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
        <div className="text-box">
          <h1 className="card-header">{title}</h1>
          <div className="img-box">
            <Image src={img} alt="" />
          </div>
          {type && <p className="text">Type: {type}</p>}
          <p className="text">Dimensjon: {dim}</p>
          {antTenner && <p className="text">Antall tenner: {antTenner}</p>}
          {antMaskin && <p className="text">Antall i maskin: {antMaskin}</p>}
          {maskin && <p className="text">Maskin: {maskin}</p>}
          {antall && <p className="text">Antall lager: {antall}</p>}
          {dName && <p className="text">Datanavn: {dName}</p>}
          {art && <p className="text">Art.nr: {art}</p>}
          {price && <p className="text">Pris:</p>}
          {price && (
            <div>
              {price.map((item) => {
                return (
                  <ul key={item.type}>
                    <li style={{ marginBottom: "-10px" }} className="text">
                      {item} kr.
                    </li>
                  </ul>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 18rem;
            height: auto;
            background: white;
            margin-right: 2rem;
            box-shadow: 5px 5px 30px gainsboro;
            border-radius: 10px;
          }
          .card-header {
            font-weight: 600;
            margin: 0.5rem 0 2rem 0;
            font-size: 1rem;
            color: black;
          }
          .img-box {
            margin-bottom: 2rem;
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
