import React from "react";
import Image from "next/image";

const VisualToolImageComponent = ({
  img,
  title,
  type,
  dim,
  zAnt,
  angle,
  dataName,
  antall,
  art,
}) => {
  return (
    <>
      <div className="container">
        <Image src={img} alt="" />
        <div>
          <h3 className="card-header">{title}</h3>
          <p className="text">Type: {type}</p>
          <p className="text">Dimmensjon: {dim}</p>
          <p className="text">Antall tenner: {zAnt}</p>
          <p className="text">Brystvinkel: {angle} grader</p>
          <p className="text">Antall lager: {antall} stk</p>
          <p className="text">Datanavn: {dataName}</p>
          <p className="text">Art. nr: {art}</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 18rem;
            height: auto;
            padding: 1rem;
            border-radius: 15px;
            background: var(--primary);
          }
          .card-header {
            font-weight: 600;
            margin: 0.5rem 0;
            color: var(--text2);
          }
          .text {
            font-style: italic;
            color: var(--middle);
            font-size: 0.8rem;
            font-weight: 600;
          }
          @media only screen and (max-width: 600px) {
            .container {
              height: auto;
            }
          }
        `}
      </style>
    </>
  );
};

export default VisualToolImageComponent;
