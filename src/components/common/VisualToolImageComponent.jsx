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
  price,
}) => {
  return (
    <>
      <div className="container">
        <div>
          <h3 className="card-header">{title}</h3>
          <Image src={img} alt="" />
          <div className="text-box">
            <p className="text">Type: {type}</p>
            <p className="text">Dimmensjon: {dim}</p>
            {zAnt && <p className="text">Antall tenner: {zAnt}</p>}
            {angle && <p className="text">Brystvinkel: {angle} grader</p>}
            {antall && <p className="text">Antall lager: {antall} stk</p>}
            {dataName && <p className="text">Datanavn: {dataName}</p>}
            {art && <p className="text">Art. nr: {art}</p>}
            <p className="text">Pris:</p>
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
      </div>
      <style jsx>
        {`
          .container {
            width: 18rem;
            height: auto;
            background: white;
            box-shadow: 15px 15px 25px grey;
            border-radius: 10px;
            padding-top: 2rem;
          }
          .card-header {
            font-weight: 600;
            margin: 0.5rem 0 2rem 0.5rem;
            color: black;
            font-size: 1rem;
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
