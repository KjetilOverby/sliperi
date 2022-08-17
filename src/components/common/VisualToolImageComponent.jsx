import React from "react";
import Image from "next/image";

const VisualToolImageComponent = ({ img, title, type, dim, zAnt, angle }) => {
  return (
    <>
      <div className="container">
        <Image src={img} />
        <div>
          <h3 className="card-header">{title}</h3>
          <p className="text">Type: {type}</p>
          <p className="text">Dimmensjon: {dim}</p>
          <p className="text">Antall tenner: {zAnt}</p>
          <p className="text">Brystvinkel: {angle} grader</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 20rem;
            height: 25rem;
            padding: 1rem;
            border-radius: 15px;
            background: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(#a95),
              to(#fea)
            );
          }
          .card-header {
            font-weight: 600;
            margin: 0.5rem 0;
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

export default VisualToolImageComponent;
